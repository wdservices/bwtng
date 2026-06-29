const modules = import.meta.glob('./*.json', { eager: true })

const posts = Object.values(modules).map(m => m.default)

export const allPosts = posts.sort(
  (a, b) => new Date(b.date) - new Date(a.date)
)

export const getPostBySlug = (slug) =>
  allPosts.find(post => post.slug === slug)
