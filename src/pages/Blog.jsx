// import { useEffect, useMemo, useState } from 'react'
// import { getBlogPosts } from '../store/blogStore'

// function formatDate(value) {
//   const date = new Date(value)
//   if (Number.isNaN(date.getTime())) {
//     return 'Unknown date'
//   }

//   return date.toLocaleDateString(undefined, {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   })
// }

// function Blog() {
//   const [posts, setPosts] = useState([])

//   useEffect(() => {
//     setPosts(getBlogPosts())
//   }, [])

//   const featured = useMemo(() => posts[0] ?? null, [posts])
//   const rest = useMemo(() => posts.slice(1), [posts])

//   return (
//     <section className="bg-slate-50 px-6 pb-16 pt-28 text-slate-900">
//       <div className="mx-auto max-w-6xl space-y-10">
//         <header className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100 sm:p-10">
//           <p className="text-xs uppercase tracking-[0.4em] text-emerald-700">Invess Blog</p>
//           <h1 className="mt-4 text-3xl font-semibold sm:text-5xl">Field updates, agronomy notes, and company news</h1>
//           <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
//             Follow what we are learning from the field, what we are producing in our plant, and how we are supporting farm performance across Ghana.
//           </p>
//         </header>

//         {!posts.length ? (
//           <div className="rounded-[1.5rem] border border-dashed border-slate-300 bg-white p-8 text-center text-slate-500">
//             No blog posts yet.
//           </div>
//         ) : null}

//         {featured ? (
//           <article className="grid gap-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
//             <div className="space-y-4">
//               <p className="text-xs uppercase tracking-[0.35em] text-emerald-700">Featured</p>
//               <h2 className="text-2xl font-semibold sm:text-3xl">{featured.title}</h2>
//               <p className="text-slate-600">{featured.excerpt || featured.content.slice(0, 180)}</p>
//               <p className="text-sm text-slate-500">{formatDate(featured.createdAt)} · {featured.author || 'Invess Agric Team'}</p>
//               {featured.tags?.length ? (
//                 <div className="flex flex-wrap gap-2">
//                   {featured.tags.map((tag) => (
//                     <span key={`${featured.id}-${tag}`} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               ) : null}
//             </div>
//             <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
//               {featured.imageUrl ? (
//                 <img src={featured.imageUrl} alt={featured.title} className="h-full min-h-[220px] w-full object-cover" loading="lazy" />
//               ) : (
//                 <div className="flex min-h-[220px] items-center justify-center p-8 text-center text-sm text-slate-500">
//                   Add an image URL from the admin page to show a featured image here.
//                 </div>
//               )}
//             </div>
//           </article>
//         ) : null}

//         {rest.length ? (
//           <div className="grid gap-6 md:grid-cols-2">
//             {rest.map((post) => (
//               <article key={post.id} className="rounded-[1.5rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
//                 <h3 className="text-xl font-semibold text-slate-900">{post.title}</h3>
//                 <p className="mt-3 text-sm text-slate-500">{formatDate(post.createdAt)} · {post.author || 'Invess Agric Team'}</p>
//                 <p className="mt-3 text-slate-600">{post.excerpt || `${post.content.slice(0, 180)}...`}</p>
//                 {post.tags?.length ? (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {post.tags.map((tag) => (
//                       <span key={`${post.id}-${tag}`} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 ) : null}
//               </article>
//             ))}
//           </div>
//         ) : null}
//       </div>
//     </section>
//   )
// }

// export default Blog
