const looks = [
  {
    id: 'L1',
    title: 'V&Aacute;ROSI MONOLIT',
    subtitle: 'Kő a kőn. R&eacute;teg a r&eacute;tegen.',
    img: 'https://picsum.photos/seed/lookbook-1/1200/800',
    align: 'left',
  },
  {
    id: 'L2',
    title: 'BRUT&Aacute;LIS R&Eacute;TEGEK',
    subtitle: 'T&eacute;rfogat. Text&uacute;ra. S&uacute;ly.',
    img: 'https://picsum.photos/seed/lookbook-2/1200/800',
    align: 'right',
  },
  {
    id: 'L3',
    title: 'UTCAI SZOBOR',
    subtitle: 'A test &eacute;p&iacute;t&eacute;szete.',
    img: 'https://picsum.photos/seed/lookbook-3/1200/800',
    align: 'left',
  },
  {
    id: 'L4',
    title: 'NYERS &Eacute;LEK',
    subtitle: 'Befejezetlen. Csiszolatlan. Hiteles.',
    img: 'https://picsum.photos/seed/lookbook-4/1200/800',
    align: 'right',
  },
]

export default function Lookbook() {
  return (
    <section className="relative px-6 md:px-12 py-24 border-t border-concrete bg-concrete-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-3">
            / 03
          </p>
          <h2 className="text-xxl font-black tracking-[-0.03em] leading-none text-concrete-darkest">
            LOOKBOOK
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-px bg-concrete-mid" />
            <p className="text-xs tracking-[0.2em] uppercase text-concrete-dark font-light">
              FW25 szerkesztői anyag
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {looks.map((look) => (
            <div
              key={look.id}
              className={`relative flex ${look.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  w-full md:w-[80%] lg:w-[65%]
                  border border-concrete
                  ${look.align === 'right' ? 'text-right' : 'text-left'}
                  relative overflow-hidden
                `}
              >
                <img
                  src={look.img}
                  alt={look.title}
                  className="w-full h-full absolute inset-0 object-cover grayscale opacity-30"
                  loading="lazy"
                />
                <div className="relative z-10 p-8 md:p-12 lg:p-16 backdrop-blur-[1px]">
                  <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-4">
                    {look.id}
                  </p>
                  <h3 className="text-xl md:text-xxl font-black tracking-[-0.03em] leading-none text-concrete-darkest">
                    {look.title}
                  </h3>
                  <div className={`flex items-center gap-4 mt-4 ${look.align === 'right' ? 'justify-end' : 'justify-start'}`}>
                    <div className="w-12 h-px bg-concrete-mid" />
                    <p className="text-xs tracking-[0.2em] uppercase text-concrete-dark font-light">
                      {look.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
