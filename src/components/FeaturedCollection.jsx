export default function FeaturedCollection() {
  const collections = [
    {
      title: 'BETON KOLLEKCIÓ',
      desc: 'A legikonikusabb darabjaink. Kőmosott finish, brutális súly.',
      items: '6 termék',
      color: 'bg-[#2a2520]',
    },
    {
      title: 'OVERSIZED ESSENTIALS',
      desc: 'Laza szabás, tökéletes arányok. Mindennapi alapok.',
      items: '8 termék',
      color: 'bg-[#1c1a18]',
    },
    {
      title: 'TÉLI RÉTEGEK',
      desc: 'Heavy duty jackets, fleece bélések. Hideg ellen built.',
      items: '4 termék',
      color: 'bg-[#6b6560]',
    },
  ]

  return (
    <section className="relative px-6 md:px-12 py-24 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] mb-4 font-light">
            / KOLLEKCIO
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-tight text-[#1c1a18]">
              KATEGÓRIÁK
            </h2>
            <button className="text-[0.55rem] tracking-[0.25em] uppercase text-[#1c1a18] font-light flex items-center gap-2 group self-start md:self-auto">
              ÖSSZES MEGTEKINTÉSE
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((collection, i) => (
            <button
              key={i}
              className="group relative aspect-[3/4] overflow-hidden border border-[#d4d0cb] hover:border-[#1c1a18] transition-all"
            >
              <div className={`absolute inset-0 ${collection.color} group-hover:scale-105 transition-transform duration-500`} />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                <p className="text-[0.55rem] tracking-[0.3em] uppercase text-[#d4d0cb] mb-3 font-light">
                  {collection.items}
                </p>
                <h3 className="text-xl md:text-2xl font-black tracking-[-0.02em] leading-tight text-[#f7f5f0] mb-3">
                  {collection.title}
                </h3>
                <p className="text-xs tracking-[0.1em] leading-relaxed text-[#efebe5] font-light mb-4">
                  {collection.desc}
                </p>
                <div className="flex items-center gap-2 text-[#f7f5f0] group-hover:gap-3 transition-all">
                  <span className="text-[0.55rem] tracking-[0.25em] uppercase font-light">
                    FELFEDEZÉS
                  </span>
                  <span>→</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
