export default function BrandsSection() {
  const brands = [
    "Jaguar",
    "Godrej",
    "Prayag",
    "Parryware",
    "Astral",
    "Cera",
    "Finolex",
    "Supreme",
    "Prince",
    "Pidilite",
  ];

  return (
    <section id="brands" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-500 mb-3">
            Top brands in store
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Trusted brands we carry for every home and project
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            From plumbing and sanitaryware to adhesives and electrical fittings,
            our shelves are stocked with premium brands you already trust.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-center text-sm uppercase  tracking-[0.35em] font-semibold text-slate-900 shadow-sm transition hover:shadow-md"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
