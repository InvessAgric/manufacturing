import { useEffect, useRef, useState } from 'react'

const stats = [
  { label: 'MT annual capacity', value: 400000, suffix: '+' },
  { label: 'Ghana manufactured', value: 100, suffix: '%' },
  { label: 'Plant operations', staticValue: '24/7' },
  { label: 'Quality standards', staticValue: 'ISO' },
]

function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

// StatsSection: displays the key company metrics in a compact grid.
export default function StatsSection() {
  const sectionRef = useRef(null)
  const awayTimerRef = useRef(null)
  const [animationRun, setAnimationRun] = useState(0)
  const [counts, setCounts] = useState(() => stats.map(() => 0))

  useEffect(() => {
    const node = sectionRef.current
    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (awayTimerRef.current) {
            window.clearTimeout(awayTimerRef.current)
            awayTimerRef.current = null
          }

          setCounts(stats.map(() => 0))
          setAnimationRun((prev) => prev + 1)
          return
        }

        awayTimerRef.current = window.setTimeout(() => {
          setCounts(stats.map(() => 0))
        }, 1800)
      },
      { threshold: 0.35 }
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (awayTimerRef.current) {
        window.clearTimeout(awayTimerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (animationRun === 0) {
      return
    }

    const duration = 1200
    const numericIndexes = stats
      .map((item, index) => (typeof item.value === 'number' ? index : -1))
      .filter((index) => index !== -1)

    let rafId
    let startTime

    const tick = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }

      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress)

      setCounts((prev) => {
        const next = [...prev]
        numericIndexes.forEach((index) => {
          const target = stats[index].value
          next[index] = Math.round(target * eased)
        })
        return next
      })

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick)
      }
    }

    rafId = window.requestAnimationFrame(tick)
    return () => window.cancelAnimationFrame(rafId)
  }, [animationRun])

  return (
    <section ref={sectionRef} id="stats" className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl  text-center">
        <div className="grid  grid-cols-2 sm:grid-cols-4 ">
          {stats.map((item, index) => (
            <div key={item.label} className=" bg-white p-6 shadow-sm border border-slate-200 text-center">
              <span className="block text-4xl font-bold">
                {typeof item.value === 'number'
                  ? `${formatNumber(counts[index])}${item.suffix || ''}`
                  : item.staticValue}
              </span>
              <span className="mt-2 block text-sm text-slate-500">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
