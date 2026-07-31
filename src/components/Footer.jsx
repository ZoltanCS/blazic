export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-16 border-t border-concrete bg-concrete-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="text-lg font-black tracking-[-0.02em] text-concrete-darkest mb-6">
              BLAZIC
            </h4>
            <p className="text-[0.6rem] tracking-[0.15em] leading-relaxed text-concrete-dark font-light max-w-xs">
              Budapest, Hungary. Undergroundtől a felszínig.
            </p>
            <div className="mt-6 flex gap-4">
              <span className="text-[0.5rem] tracking-[0.2em] uppercase text-concrete-dark font-light">
                EST. 2024
              </span>
            </div>
          </div>

          <div>
            <h5 className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4 font-light">
              SHOP
            </h5>
            <ul className="space-y-2">
              {['Minden termék', 'Hoodies', 'Pólók', 'Nadrágok', 'Kiegészítők'].map((item) => (
                <li key={item}>
                  <button className="text-xs tracking-[0.15em] text-concrete-darkest hover:underline underline-offset-4 font-light">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4 font-light">
              INFORMACIO
            </h5>
            <ul className="space-y-2">
              {['Szallitas', 'Merettabla', 'Garancia', 'GYIK'].map((item) => (
                <li key={item}>
                  <button className="text-xs tracking-[0.15em] text-concrete-darkest hover:underline underline-offset-4 font-light">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4 font-light">
              KAPCSOLAT
            </h5>
            <ul className="space-y-2">
              {['Instagram', 'hello@blazic.hu', 'Budapest, HU'].map((item) => (
                <li key={item}>
                  <button className="text-xs tracking-[0.15em] text-concrete-darkest hover:underline underline-offset-4 font-light">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-concrete flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[0.5rem] tracking-[0.2em] uppercase text-concrete-dark font-light">
            © 2025 BLAZIC. Minden jog fenntartva.
          </p>
          <div className="flex flex-wrap gap-6 md:gap-8">
            {['Adatvedelem', 'ASZF', 'Cookie'].map((item) => (
              <button key={item} className="text-[0.5rem] tracking-[0.2em] uppercase text-concrete-dark hover:underline underline-offset-4 font-light">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
