const BLOG_STORAGE_KEY = 'invess-blog-posts-v1'

const defaultPosts = [
  {
    id: 'welcome-post',
    title: 'Welcome To Invess Agric Insights',
    excerpt: 'This blog shares practical agronomy updates, plant activity, and distribution news from our team.',
    content:
      'We are launching this blog to give farmers, distributors, and partners a clearer view of how we work. Expect updates on fertilizer guidance, production milestones, and field support programs.',
    author: 'Invess Agric Team',
    imageUrl: '',
    tags: ['company', 'farming'],
    createdAt: '2026-07-27T00:00:00.000Z',
  },
]

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function normalizePosts(value) {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) => ({
      id: typeof item.id === 'string' ? item.id : `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      title: typeof item.title === 'string' ? item.title.trim() : '',
      excerpt: typeof item.excerpt === 'string' ? item.excerpt.trim() : '',
      content: typeof item.content === 'string' ? item.content.trim() : '',
      author: typeof item.author === 'string' ? item.author.trim() : 'Invess Agric Team',
      imageUrl: typeof item.imageUrl === 'string' ? item.imageUrl.trim() : '',
      tags: Array.isArray(item.tags) ? item.tags.filter(Boolean).map((tag) => String(tag).trim()) : [],
      createdAt: typeof item.createdAt === 'string' ? item.createdAt : new Date().toISOString(),
    }))
    .filter((item) => item.title && item.content)
}

function writePosts(posts) {
  if (!canUseStorage()) {
    return
  }

  window.localStorage.setItem(BLOG_STORAGE_KEY, JSON.stringify(posts))
}

export function getBlogPosts() {
  if (!canUseStorage()) {
    return [...defaultPosts]
  }

  const raw = window.localStorage.getItem(BLOG_STORAGE_KEY)

  if (!raw) {
    writePosts(defaultPosts)
    return [...defaultPosts]
  }

  try {
    const parsed = JSON.parse(raw)
    const normalized = normalizePosts(parsed)

    if (!normalized.length) {
      writePosts(defaultPosts)
      return [...defaultPosts]
    }

    return normalized.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
  } catch {
    writePosts(defaultPosts)
    return [...defaultPosts]
  }
}

export function createBlogPost(payload) {
  const title = typeof payload.title === 'string' ? payload.title.trim() : ''
  const excerpt = typeof payload.excerpt === 'string' ? payload.excerpt.trim() : ''
  const content = typeof payload.content === 'string' ? payload.content.trim() : ''
  const author = typeof payload.author === 'string' && payload.author.trim() ? payload.author.trim() : 'Invess Agric Team'
  const imageUrl = typeof payload.imageUrl === 'string' ? payload.imageUrl.trim() : ''
  const tags = typeof payload.tags === 'string'
    ? payload.tags
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean)
    : []

  if (!title || !content) {
    throw new Error('Title and content are required.')
  }

  const nextPost = {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    title,
    excerpt,
    content,
    author,
    imageUrl,
    tags,
    createdAt: new Date().toISOString(),
  }

  const current = getBlogPosts()
  const next = [nextPost, ...current]
  writePosts(next)

  return next
}

export function deleteBlogPost(postId) {
  const current = getBlogPosts()
  const next = current.filter((post) => post.id !== postId)
  writePosts(next.length ? next : defaultPosts)

  return next.length ? next : [...defaultPosts]
}
