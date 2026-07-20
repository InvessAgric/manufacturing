import { galleryImageOne, galleryImageTwo, galleryImageThree,founderImage } from '../assets/assetRegistry'

// About page: introduces the company story, values, mission, and public-facing impact.
function About() {
  return (
    <section className="   bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eaf7ec_100%)] px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl space-y-20">
        <header className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] mt-10 lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-emerald-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              About Us
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Growing Ghana's harvests, one farm at a time.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Invess Agric Manufacturing Limited blends local manufacturing muscle with trusted crop science —
                delivering affordable fertilizers, seeds, and hands-on agronomic support to farmers across Ghana.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm ring-1 ring-emerald-100 border-l-4 border-emerald-500/25">
                <p className="text-3xl font-semibold text-emerald-800">2018</p>
                <p className="mt-2 text-sm text-slate-600">Founded in Ghana, farmer-first from day one.</p>
              </div>
              <div className="rounded-3xl bg-linear-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm ring-1 ring-emerald-100 border-l-4 border-emerald-500/25">
                <p className="text-3xl font-semibold text-emerald-800">CS077792018</p>
                <p className="mt-2 text-sm text-slate-600">Our registered company number.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-4xl bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.18),transparent_42%)] p-6 shadow-2xl">
            <div className="space-y-4 rounded-[1.75rem] bg-slate-900/95 p-8 text-white">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-300">Our approach</p>
              <h2 className="text-3xl font-semibold">Quality products. Real support. Farmer success.</h2>
              <p className="leading-7 text-slate-300">
                We manufacture blended fertilizers, seeds, and agri inputs built for Ghanaian soil — backed by training
                and field support that turns good products into great harvests.
              </p>
            </div>
          </div>
        </header>

        <section className=" flex rounded-[2rem] mx-auto w-[80%] bg-white p-8 shadow-sm ring-1 ring-emerald-100">
          <div className="grid gap-6 :grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Founder</p>
              <h2 className="text-3xl font-semibold text-slate-900">Meet the founder driving the vision.</h2>
              <p className="text-slate-700 leading-7">
                Francis Dei leads Invess Agric Manufacturing Limited with a farmer-first philosophy — resilient supply
                chains, uncompromising product quality, and practical support in the field, since day one.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem]  ">
              <div className="overflow-hidden rounded-[1.5rem]  shadow-sm">
                <img src={founderImage} alt="Founder" className="h-78 w-full object-fill" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 shadow-sm ring-1 ring-emerald-100 border-l-4 border-emerald-500/30">
            <h2 className="text-2xl font-semibold text-emerald-700">Our Mission</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Quality fertilizer and agri inputs that meet farmers' real needs — driving sustainable production and
              stronger yields across Ghana.
            </p>
          </article>
          <article className="rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 shadow-sm ring-1 ring-emerald-100 border-l-4 border-emerald-500/30">
            <h2 className="text-2xl font-semibold text-emerald-700">Our Vision</h2>
            <p className="mt-4 leading-7 text-slate-700">
              To be Ghana's leading fertilizer and seed partner — known for innovation, reliability, and a lasting
              contribution to food security.
            </p>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">What makes Invess Agric different?</h2>
            <p className="text-slate-700 leading-8">
              Local expertise, customer-first service — products and advice that stay with farmers through every
              stage of the growing season.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Extensive Market Knowledge</p>
                <p className="mt-3 text-sm text-slate-600">
                  Built for Ghanaian crops, climate, and farm sizes.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Customer-Centric Support</p>
                <p className="mt-3 text-sm text-slate-600">
                  Technical guidance and field advice, right when farmers need it.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Quality, Every Batch</p>
                <p className="mt-3 text-sm text-slate-600">
                  Rigorous standards for consistent, reliable performance.
                </p>
              </div>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/80 p-6 shadow-sm">
                <p className="font-semibold text-emerald-800">Sustainable Practices</p>
                <p className="mt-3 text-sm text-slate-600">
                  Products that protect soil health for the long run.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100">
            <h2 className="text-2xl font-semibold text-emerald-700">Our Core Values</h2>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li className="rounded-3xl bg-emerald-50/80 p-4 ring-1 ring-emerald-100">
                <strong>Respect & inclusiveness</strong> in every relationship.
              </li>
              <li className="rounded-3xl bg-emerald-50/80 p-4 ring-1 ring-emerald-100">
                <strong>Integrity & accountability</strong> in every decision.
              </li>
              <li className="rounded-3xl bg-emerald-50/80 p-4 ring-1 ring-emerald-100">
                <strong>Customer focus</strong>, quality assurance, constant improvement.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-white via-emerald-50 to-slate-100 p-8 shadow-sm ring-1 ring-emerald-100">
            <h2 className="text-2xl font-semibold text-emerald-700">Products & impact</h2>
            <p className="mt-4 leading-7 text-slate-700">
              A full portfolio of blended fertilizers and crop inputs formulated for Ghanaian farms — NPK blends,
              UREA, Sulphate of Ammonia, MOP, Potassium Nitrate, Calcium Nitrate, and cocoa-specific formulations.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              Matched nutrients, healthier crops, consistently higher yields.
            </p>
            <a href="/product" className="inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-200/30 transition hover:bg-emerald-700">
              Explore products
            </a>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-white via-slate-100 to-emerald-50 p-8 shadow-sm ring-1 ring-emerald-100">
            <h2 className="text-2xl font-semibold text-emerald-700">Our Story</h2>
            <p className="mt-4 leading-7 text-slate-700">
              Founded in 2018 by Francis Dei and a team of agribusiness professionals, Invess Agric was built to put
              quality fertilizers, training, and support within reach of every farmer.
            </p>
            <p className="mt-4 leading-7 text-slate-700">
              From humble beginnings to steady growth — through practical innovation, strong partnerships, and an
              unwavering focus on farmer success.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <img className="h-44 w-full rounded-[1.5rem] object-cover shadow-lg" src={galleryImageOne} alt="Invess Agric event image 1" loading="lazy" />
              <img className="h-44 w-full rounded-[1.5rem] object-cover shadow-lg" src={galleryImageTwo} alt="Invess Agric event image 2" loading="lazy" />
              <img className="h-44 w-full rounded-[1.5rem] object-cover shadow-lg" src={galleryImageThree} alt="Invess Agric event image 3" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-emerald-100">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Milestones</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Warehouse unveiling highlights</h2>
            <p className="mt-3 text-slate-600 leading-7">
              Relive the launch of our production facility — from the warehouse unveiling to the ceremonial sword
              cutting.
            </p>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
              <video controls className="h-full w-full bg-slate-900">
                <source src="/warehouse-unveiling.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
              <video controls className="h-full w-full bg-slate-900">
                <source src="/sword-cutting.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-emerald-800 to-slate-900 px-8 py-12 text-white shadow-2xl">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Stay connected</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Keep up with product news and farmer support.</h2>
              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Follow us for updates, launches, and practical guidance for growing better crops in Ghana.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-200">
              <a href="https://www.facebook.com/invessagric" target="_blank" rel="noreferrer" className="rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90">
                Facebook /invessagric
              </a>
              <a href="https://gh.linkedin.com/company/invess-agriculture-ltd" target="_blank" rel="noreferrer" className="rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90">
                LinkedIn Invess Agriculture Ltd.
              </a>
              <a href="https://www.instagram.com/invess_agric/" target="_blank" rel="noreferrer" className="rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90">
                Instagram @invess_agric
              </a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About