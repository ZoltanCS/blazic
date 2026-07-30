const looks = [
  {
    id: 'L1',
    title: 'VÁROSI MONOLIT',
    subtitle: 'Beton, réteg réteg hátán.',
    img: 'https://picsum.photos/seed/lookbook-1/600/400',
    align: 'left',
  },
  {
    id: 'L2',
    title: 'BRUTÁLIS RÉTEGEK',
    subtitle: 'Forma, anyag, súly – egyben.',
    img: 'https://picsum.photos/seed/lookbook-2/600/400',
    align: 'right',
  },
  {
    id: 'L3',
    title: 'UTCAI SZOBOR',
    subtitle: 'Testre húzott építészet.',
    img: 'https://picsum.photos/seed/lookbook-3/600/400',
    align: 'left',
  },
  {
    id: 'L4',
    title: 'NYERS ÉLEK',
    subtitle: 'Nyers. Csiszolatlan. Igazi.',
    img: 'https://picsum.photos/seed/lookbook-4/600/400',
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
              Ősz/tél '25 válogatás
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {looks.map((look) => (
            <div
              key={look.id}
              className={`relative flex ${look.align === 'right' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`w-full md:w-[80%] lg:w-[65%] border border-concrete ${look.align === 'right' ? 'text-right' : 'text-left'} relative overflow-hidden`}>
                <img
                  src={look.img}
                  alt={look.title}
                  className="w-full h-full absolute inset-0 object-cover opacity-30"
                  loading="lazy"
                  decoding="async"
                />
                <div className="relative z-10 p-8 md:p-12 lg:p-16">
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
