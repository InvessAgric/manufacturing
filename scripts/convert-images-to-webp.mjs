import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const VALID_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png'])

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)))
      continue
    }

    if (!entry.isFile()) {
      continue
    }

    const extension = path.extname(entry.name).toLowerCase()
    if (VALID_EXTENSIONS.has(extension)) {
      files.push(fullPath)
    }
  }

  return files
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const inputDirArg = process.argv[2] ?? 'src/assets/images/our-team'
  const qualityArg = Number(process.argv[3] ?? 80)
  const overwrite = process.argv.includes('--overwrite')

  if (!Number.isFinite(qualityArg) || qualityArg < 1 || qualityArg > 100) {
    console.error('Quality must be a number between 1 and 100.')
    process.exit(1)
  }

  const inputDir = path.resolve(process.cwd(), inputDirArg)

  let stat
  try {
    stat = await fs.stat(inputDir)
  } catch {
    console.error(`Folder not found: ${inputDir}`)
    process.exit(1)
  }

  if (!stat.isDirectory()) {
    console.error(`Path is not a folder: ${inputDir}`)
    process.exit(1)
  }

  const sourceFiles = await walk(inputDir)

  if (sourceFiles.length === 0) {
    console.log(`No JPG/JPEG/PNG files found in: ${inputDir}`)
    return
  }

  let converted = 0
  let skipped = 0

  for (const sourcePath of sourceFiles) {
    const outputPath = sourcePath.replace(/\.(jpe?g|png)$/i, '.webp')

    if (!overwrite && (await fileExists(outputPath))) {
      skipped += 1
      continue
    }

    await sharp(sourcePath)
      .rotate()
      .webp({ quality: qualityArg })
      .toFile(outputPath)

    converted += 1
    console.log(`Converted: ${path.relative(process.cwd(), sourcePath)} -> ${path.relative(process.cwd(), outputPath)}`)
  }

  console.log(`Done. Converted: ${converted}, Skipped: ${skipped}, Total source files: ${sourceFiles.length}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
