import { galleryImageOne, galleryImageTwo, galleryImageThree,founderImage } from '../assets/assetRegistry'

const aboutIcons = {
  calendar: 'fi fi-rr-calendar',
  warehouse: 'fi fi-rr-warehouse',
  map: 'fi fi-rr-map-marker',
  shield: 'fi fi-rr-shield-check',
  coins: 'fi fi-rr-coins',
  leaf: 'fi fi-rr-leaf',
  mission: 'fi fi-rr-bullseye-arrow',
  vision: 'fi fi-rr-eye',
  respect: 'fi fi-rr-users',
  integrity: 'fi fi-rr-shield-trust',
  excellence: 'fi fi-rr-award',
  growth: 'fi fi-rr-chart-line-up',
  warehousePlan: 'fi fi-rr-building',
  partnership: 'fi fi-rr-handshake',
  market: 'fi fi-rr-badge-percent',
  farming: 'fi fi-rr-seedling',
  facebook: 'fi fi-brands-facebook',
  linkedin: 'fi fi-brands-linkedin',
  instagram: 'fi fi-brands-instagram',
}

function FlatIconBadge({ tone = 'emerald', children }) {
  const tones = {
    emerald: 'bg-emerald-100 text-emerald-700',
    sky: 'bg-sky-100 text-sky-700',
    teal: 'bg-teal-100 text-teal-700',
    amber: 'bg-amber-100 text-amber-700',
    rose: 'bg-rose-100 text-rose-700',
  }

  return (
    <span className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg ${tones[tone] ?? tones.emerald}`}>
      <i className={children} aria-hidden="true" />
    </span>
  )
}

// About page: introduces the company story, values, mission, and public-facing impact.
function About() {
  return (
    <section className="bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.14),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#eaf7ec_100%)] px-4 py-12 pt-20 text-slate-900 sm:px-6 sm:py-16 sm:pt-24">
      <div className="mx-auto max-w-6xl space-y-10 sm:space-y-16">
        <header className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-emerald-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-700">
              About Us
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Manufacturing high-performance crop inputs for Ghana's farms.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Invess Agriculture manufacturing Ltd. is a prominent agricultural company in Ghana, registered under CS077792018.
                We manufacture and supply quality fertilizers and crop inputs, supported by strong warehousing,
                distribution, and practical agronomic guidance for farmers nationwide.
              </p>
            </div>
            <div className="grid gap-3 grid-cols-2 sm:gap-4">
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm sm:p-6">
                <FlatIconBadge tone="emerald">{aboutIcons.calendar}</FlatIconBadge>
                <p className="text-xl font-semibold text-emerald-800 sm:text-2xl">2018</p>
                <p className="mt-2 text-sm text-slate-600">Founded in Ghana with a farmer-first mission.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5 shadow-sm sm:p-6">
                <FlatIconBadge tone="sky">{aboutIcons.warehouse}</FlatIconBadge>
                <p className="text-xl font-semibold text-emerald-800 sm:text-2xl">40,000 MT</p>
                <p className="mt-2 text-sm text-slate-600">Storage capacity across modern warehouse facilities.</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-slate-900/95 p-6 text-white shadow-2xl sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-emerald-300">Our approach</p>
            <h2 className="mt-4 text-xl font-semibold sm:text-3xl">Manufacturing precision. Reliable delivery. Farmer success.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
              Through quality-controlled blending, trusted supplier partnerships, and hands-on training, we help farmers
              access the right inputs and the right knowledge at the right time.
            </p>
            <a href="/product" className="mt-6 inline-flex w-full justify-center rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 sm:w-auto sm:justify-start">
              Explore our products
            </a>
          </div>
        </header>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Who we are</p>
              <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">A manufacturing-first agricultural company</h2>
              <p className="text-sm leading-8 text-slate-700 sm:text-base">
                Invess Agriculture manufacturing Ltd. focuses on manufacturing and supplying high-quality, affordable fertilizers and
                related agricultural inputs. We combine production expertise with technical support to help farmers make
                informed, sustainable decisions and apply products appropriately.
              </p>
              <p className="text-sm leading-8 text-slate-700 sm:text-base">
                Our company office is located at Dzorwulu, No. 269 Daya Square, and our operations are built on strong
                manufacturing discipline, warehousing efficiency, and continuous product improvement for Ghanaian farmers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="teal">{aboutIcons.map}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">Extensive market knowledge</p>
                <p className="mt-2 text-sm text-slate-600">Tailored solutions for local crops, soils, and farm realities.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="emerald">{aboutIcons.shield}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">Reliable availability</p>
                <p className="mt-2 text-sm text-slate-600">Strategically located storage points help keep products available.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="amber">{aboutIcons.coins}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">Flexible payment terms</p>
                <p className="mt-2 text-sm text-slate-600">Support for deserving customers when finance is a barrier.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="rose">{aboutIcons.leaf}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">CSR commitment</p>
                <p className="mt-2 text-sm text-slate-600">We contribute to community and sector development through meaningful action.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="sky">{aboutIcons.warehouse}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">Strong manufacturing capacity</p>
                <p className="mt-2 text-sm text-slate-600">Quality-controlled production supports consistent performance and supply reliability.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
                <FlatIconBadge tone="teal">{aboutIcons.partnership}</FlatIconBadge>
                <p className="font-semibold text-emerald-800">Trusted supplier partnerships</p>
                <p className="mt-2 text-sm text-slate-600">Long-term global partnerships help us maintain dependable input quality for farmers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Founder</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">The vision behind Invess Agric</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
              Invess Agriculture manufacturing Ltd. was co-founded in 2018 by Francis Dei and other dedicated staff. The company was
              born from a simple but powerful idea: to distribute quality fertilizers and training to smallholder farmers
              across Ghana.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Through perseverance, hard work, and a shared commitment to service, the founders built a business that now
              plays a meaningful role in the agricultural sector.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white p-3 shadow-sm ring-1 ring-emerald-100 sm:p-4">
            <img src={founderImage} alt="Founder Francis Dei" className="h-72 w-full rounded-[1.5rem] object-cover sm:h-full" loading="lazy" />
          </div>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <article className="rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
            <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-emerald-700">
              <i className={aboutIcons.mission} aria-hidden="true" />
              Our Mission
            </h2>
            <p className="mt-4 leading-8 text-slate-700">
              To manufacture and supply high-quality fertilizers and agri-inputs that meet farmers' expectations,
              while promoting best agricultural practices for stronger, more sustainable yields.
            </p>
          </article>
          <article className="rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
            <h2 className="inline-flex items-center gap-2 text-2xl font-semibold text-emerald-700">
              <i className={aboutIcons.vision} aria-hidden="true" />
              Our Vision
            </h2>
            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
              To become a leading force in the manufacturing, trading, and distribution of fertilizers and seeds,
              driving innovation, food sustainability, and a safe environment.
            </p>
          </article>
        </section>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Our values</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">The principles that guide every decision</h2>
            <p className="mt-4 text-sm leading-8 text-slate-700 sm:text-base">
              Every team member is accountable for upholding the highest standards of respect, inclusiveness,
              integrity, objectivity, professional competence, confidentiality, and professionalism.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.respect} aria-hidden="true" />
                Respect & inclusiveness
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.integrity} aria-hidden="true" />
                Integrity & accountability
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.excellence} aria-hidden="true" />
                Professional excellence
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-[2rem] bg-gradient-to-br from-white via-emerald-50 to-slate-100 p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Pillars of foundation</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">The four pillars that shape our culture</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5">
                <p className="font-semibold text-emerald-800">1. Divine guidance</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We treat our work as a gift and approach it with gratitude and purpose.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5">
                <p className="font-semibold text-emerald-800">2. Discipline</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We uphold our values, maintain integrity, and make decisions that protect the company’s long-term reputation.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5">
                <p className="font-semibold text-emerald-800">3. Wisdom</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We believe growth comes from continuous learning, staying informed, and sharpening our skillset.</p>
              </div>
              <div className="rounded-3xl border border-emerald-100 bg-white/80 p-5">
                <p className="font-semibold text-emerald-800">4. Diligence</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">We go the extra mile to create value for farmers, customers, and stakeholders.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Milestones & achievements</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">A steady journey of growth and impact</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700">
              <li className="flex items-start gap-2"><i className={`${aboutIcons.growth} mt-1 text-emerald-700`} aria-hidden="true" />Steady organic sales growth of 12.5%.</li>
              <li className="flex items-start gap-2"><i className={`${aboutIcons.warehousePlan} mt-1 text-emerald-700`} aria-hidden="true" />State-of-the-art warehouses with 40,000 metric tons of storage capacity.</li>
              <li className="flex items-start gap-2"><i className={`${aboutIcons.warehousePlan} mt-1 text-emerald-700`} aria-hidden="true" />Company office location: Dzorwulu, No. 269 Daya Square.</li>
              <li className="flex items-start gap-2"><i className={`${aboutIcons.partnership} mt-1 text-emerald-700`} aria-hidden="true" />Strategic partnerships with suppliers such as NITRON, DUPONT PIONEER, UNIFERT, and LEVITY CROP SCIENCE.</li>
              <li className="flex items-start gap-2"><i className={`${aboutIcons.market} mt-1 text-emerald-700`} aria-hidden="true" />A strong and growing clientele base across the agricultural sector.</li>
              <li className="flex items-start gap-2"><i className={`${aboutIcons.respect} mt-1 text-emerald-700`} aria-hidden="true" />A skilled workforce committed to efficient operations and farmer support.</li>
            </ul>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-emerald-100 sm:p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-600">Long-term aspirations</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">Building for the next decade</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.warehousePlan} aria-hidden="true" />
                Expand warehousing
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Install additional facilities across Ghana to improve distribution and reduce logistics costs.</p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.partnership} aria-hidden="true" />
                Strengthen major partnerships
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Become a significant supplier to institutions such as COCOBOD, MOFA, and major commercial farms.</p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.market} aria-hidden="true" />
                Increase market share
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Grow our annual market share by 10% through expanded reach and trusted service.</p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-5 sm:p-6">
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-800">
                <i className={aboutIcons.farming} aria-hidden="true" />
                Develop commercial farming
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">Expand into commercial farming operations and deepen our contribution to food security.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-gradient-to-r from-slate-950 via-emerald-800 to-slate-900 px-6 py-8 text-white shadow-2xl sm:px-8 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Connect with us</p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Stay connected with the Invess Agric community.</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                Join our social channels for product updates, farmer support, and stories from the field.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-200">
              <a href="https://www.facebook.com/invessagric" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90"><i className={aboutIcons.facebook} aria-hidden="true" />Facebook /invessagric</a>
              <a href="https://gh.linkedin.com/company/invess-agriculture-ltd" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90"><i className={aboutIcons.linkedin} aria-hidden="true" />LinkedIn Invess Agriculture manufacturing Ltd.</a>
              <a href="https://www.instagram.com/invess_agric/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-3xl bg-slate-800 px-5 py-4 transition hover:bg-green-600/90"><i className={aboutIcons.instagram} aria-hidden="true" />Instagram @invess_agric</a>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About