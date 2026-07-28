// import { useMemo, useState } from 'react'
// import { createBlogPost, deleteBlogPost, getBlogPosts } from '../store/blogStore'

// const ADMIN_USERNAME = 'admin'
// const ADMIN_PASSWORD = 'invess123'

// const emptyForm = {
//   title: '',
//   // excerpt: '',
//   content: '',
//   author: '',
//   imageUrl: '',
//   tags: '',
// }

// function Admin() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false)
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [posts, setPosts] = useState(() => getBlogPosts())
//   const [formData, setFormData] = useState(emptyForm)
//   const [saveMessage, setSaveMessage] = useState('')

//   const postCountLabel = useMemo(() => `${posts.length} post${posts.length === 1 ? '' : 's'}`, [posts.length])

//   const handleLogin = (event) => {
//     event.preventDefault()

//     if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
//       setIsLoggedIn(true)
//       setError('')
//       return
//     }

//     setError('Invalid login details.')
//   }

//   const handleLogout = () => {
//     setIsLoggedIn(false)
//     setUsername('')
//     setPassword('')
//     setError('')
//   }

//   const handleChange = (event) => {
//     const { name, value } = event.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleCreatePost = (event) => {
//     event.preventDefault()

//     try {
//       const next = createBlogPost(formData)
//       setPosts(next)
//       setFormData(emptyForm)
//       setSaveMessage('Blog post saved.')
//     } catch (saveError) {
//       setSaveMessage(saveError.message)
//     }
//   }

//   const handleDeletePost = (postId) => {
//     const next = deleteBlogPost(postId)
//     setPosts(next)
//   }

//   if (!isLoggedIn) {
//     return (
//       <section className="bg-slate-50 px-6 pb-16 pt-28 text-slate-900">
//         <div className="mx-auto max-w-lg rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100">
//           <p className="text-xs uppercase tracking-[0.35em] text-emerald-700">Admin</p>
//           <h1 className="mt-3 text-3xl font-semibold">Blog manager login</h1>
//           <p className="mt-2 text-sm text-slate-600">Sign in to publish posts. Default login is admin / invess123.</p>

//           <form onSubmit={handleLogin} className="mt-6 space-y-4">
//             <label className="block">
//               <span className="mb-1.5 block text-sm font-medium text-slate-700">Username</span>
//               <input
//                 type="text"
//                 value={username}
//                 onChange={(event) => setUsername(event.target.value)}
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
//                 required
//               />
//             </label>

//             <label className="block">
//               <span className="mb-1.5 block text-sm font-medium text-slate-700">Password</span>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500"
//                 required
//               />
//             </label>

//             {error ? <p className="text-sm font-medium text-red-600">{error}</p> : null}

//             <button type="submit" className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
//               Login
//             </button>
//           </form>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="bg-slate-50 px-6 pb-16 pt-28 text-slate-900">
//       <div className="mx-auto max-w-6xl space-y-8">
//         <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100">
//           <div>
//             <p className="text-xs uppercase tracking-[0.35em] text-emerald-700">Admin panel</p>
//             <h1 className="mt-2 text-2xl font-semibold">Create and manage blog posts</h1>
//             <p className="mt-1 text-sm text-slate-600">Currently {postCountLabel} stored.</p>
//           </div>
//           <button type="button" onClick={handleLogout} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
//             Logout
//           </button>
//         </div>

//         <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
//           <form onSubmit={handleCreatePost} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
//             <h2 className="text-xl font-semibold">New post</h2>
//             <div className="mt-5 space-y-4">
//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Title</span>
//                 <input name="title" value={formData.title} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" required />
//               </label>

//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Excerpt</span>
//                 <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows="2" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" />
//               </label>

//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Content</span>
//                 <textarea name="content" value={formData.content} onChange={handleChange} rows="6" className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" required />
//               </label>

//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Author</span>
//                 <input name="author" value={formData.author} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="Invess Agric Team" />
//               </label>

//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Image URL</span>
//                 <input name="imageUrl" value={formData.imageUrl} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="https://..." />
//               </label>

//               <label className="block">
//                 <span className="mb-1.5 block text-sm font-medium text-slate-700">Tags (comma separated)</span>
//                 <input name="tags" value={formData.tags} onChange={handleChange} className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500" placeholder="fertilizer, farming" />
//               </label>
//             </div>

//             {saveMessage ? <p className="mt-4 text-sm font-medium text-emerald-700">{saveMessage}</p> : null}

//             <button type="submit" className="mt-6 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
//               Publish post
//             </button>
//           </form>

//           <aside className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
//             <h2 className="text-xl font-semibold">Recent posts</h2>
//             <div className="mt-4 space-y-4">
//               {posts.map((post) => (
//                 <article key={post.id} className="rounded-xl border border-slate-200 p-4">
//                   <h3 className="font-semibold text-slate-900">{post.title}</h3>
//                   <p className="mt-1 text-sm text-slate-500">{new Date(post.createdAt).toLocaleString()}</p>
//                   <p className="mt-2 text-sm text-slate-600">{post.excerpt || `${post.content.slice(0, 120)}...`}</p>
//                   <button
//                     type="button"
//                     onClick={() => handleDeletePost(post.id)}
//                     className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700 hover:bg-red-100"
//                   >
//                     Delete
//                   </button>
//                 </article>
//               ))}
//             </div>
//           </aside>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Admin
