// StatsSection: displays the key company metrics in a compact grid.
export default function StatsSection() {
  return (
    <section id="stats" className="bg-slate-50  text-slate-900">
      <div className="mx-auto max-w-6xl  text-center">
        <div className="grid  grid-cols-2 sm:grid-cols-4 ">
          <div className=" bg-white p-6 shadow-sm border border-slate-200 text-center">
            <span className="block text-4xl font-bold">400,000+</span>
            <span className="mt-2 block text-sm text-slate-500">MT annual capacity</span>
          </div>
          <div className=" bg-white p-6 shadow-sm border border-slate-200 text-center">
            <span className="block text-4xl font-bold">100%</span>
            <span className="mt-2 block text-sm text-slate-500">Ghana manufactured</span>
          </div>
          <div className=" bg-white p-6 shadow-sm border border-slate-200 text-center">
            <span className="block text-4xl font-bold">24/7</span>
            <span className="mt-2 block text-sm text-slate-500">Plant operations</span>
          </div>
          <div className=" bg-white p-6 shadow-sm border border-slate-200 text-center">
            <span className="block text-4xl font-bold">ISO</span>
            <span className="mt-2 block text-sm text-slate-500">Quality standards</span>
          </div>
        </div>
      </div>
    </section>
  )
}
