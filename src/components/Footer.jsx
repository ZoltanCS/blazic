export default function Footer() {
  return (
    <footer className="relative px-6 md:px-12 py-16 border-t border-concrete bg-concrete-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          <div>
            <h4 className="text-lg font-black tracking-[-0.02em] text-concrete-darkest mb-4">
              BLAZIC
            </h4>
            <p className="text-[0.6rem] tracking-[0.15em] leading-relaxed text-concrete-dark font-light max-w-xs">
              Súlyos darabok, kőkemény napokra. Betonon formálva, utcán bizonyítva.
            </p>
          </div>

          <div>
            <h5 className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4">
              Menü
            </h5>
            <ul className="space-y-2">
              {['Shop', 'Lookbook', 'Rólunk', 'Boltok', 'Kapcsolat'].map((item) => (
                <li key={item}>
                  <button className="text-xs tracking-[0.15em] text-concrete-darkest hover:underline underline-offset-4 font-light">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4">
              Kapcsolat
            </h5>
            <ul className="space-y-2">
              {['info@blazic.com', 'Instagram', 'Twitter / X'].map((item) => (
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
            &copy; 2024 BLAZIC. Minden jog fenntartva.
          </p>
          <div className="flex gap-8">
            {['Adatvédelem', 'Felhasználási feltételek', 'Szállítás'].map((item) => (
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
