// QualitySection: outlines the production and quality-control journey from intake to dispatch.
export default function QualitySection() {
  const steps = [
    'Raw material intake',
    'Quality testing',
    'Precision blending',
    'Packaging',
    'Distribution',
  ]

  const stepIcons = [
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-700">
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-700">
      <circle cx="11" cy="11" r="6" />
      <path d="M16.5 16.5L20 20" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-700">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-700">
      <path d="M4 7h16v10H4z" />
      <path d="M4 7l8 5 8-5" />
      <path d="M12 12v5" />
    </svg>,
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-700">
      <rect x="3" y="11" width="13" height="7" />
      <path d="M16 18h2" />
      <path d="M5 18h2" />
      <path d="M16 11V6h4v5" />
      <path d="M18 15h0" />
      <path d="M6 15h0" />
    </svg>,
  ]

  return (
    <section id="quality" className="bg-slate-50 py-16 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-green-700/70">Quality assurance</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From raw material to dispatch</h2>

        <div className="mt-12 overflow-x-auto">
          <div className="inline-flex min-w-full items-center justify-between gap-6 px-2 sm:px-0">
            {steps.map((step, index) => (
              <div key={step} className="relative flex w-40 flex-col items-center gap-4 sm:w-[180px]">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-green-700 bg-white shadow-sm">
                  {stepIcons[index]}
                </div>
                <p className="text-sm font-semibold text-slate-900">{step}</p>
                {index < steps.length - 1 && (
                  <div className="absolute right-[-24px] top-1/2 hidden h-0.5 w-16 bg-slate-300 sm:block" />
                )}
                {index < steps.length - 1 && (
                  <svg className="absolute right-[-10px] top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 relative h-1 w-full rounded-full bg-slate-300">
          <div className="absolute left-0 top-0 h-1 w-3/4 rounded-full bg-green-700" />
        </div>
      </div>
    </section>
  )
}
