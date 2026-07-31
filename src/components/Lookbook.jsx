import { useState } from 'react'

const looks = [
  {
    id: 'L1',
    title: 'BÖNGÉSZŐ',
    subtitle: 'Beton. Rétegekben.',
    number: '001',
    items: ['BETON HOODIE', 'VÁROSI PÓLÓ'],
  },
  {
    id: 'L2',
    title: 'ALKONY',
    subtitle: 'A város peremén.',
    number: '002',
    items: ['MONOLIT JACKET', 'KARGO NADRÁG'],
  },
  {
    id: 'L3',
    title: 'NULLA',
    subtitle: 'A kezdőpont.',
    number: '003',
    items: ['NYERS PULCSI', 'VÁROSI PÓLÓ', 'BETON SAPKA'],
  },
  {
    id: 'L4',
    title: 'VÉG',
    subtitle: 'A végső forma.',
    number: '004',
    items: ['BETON HOODIE', 'KARGO NADRÁG'],
  },
]

export default function Lookbook() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="relative px-6 md:px-12 py-24 border-t border-concrete bg-concrete-darkest">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-mid mb-3 font-light">
            / 03 — LOOKBOOK
          </p>
          <h2 className="text-xxl font-black tracking-[-0.03em] leading-none text-concrete-light">
            2025 TÉL
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="relative aspect-[4/5] bg-concrete overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-[20vw] font-black tracking-[-0.05em] text-concrete-white opacity-5 select-none">
                {looks[activeIndex].number}
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex items-center gap-4 mb-4">
                {looks[activeIndex].items.map((item, i) => (
                  <span 
                    key={i}
                    className="text-[0.55rem] tracking-[0.2em] uppercase text-concrete-light font-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <h3 className="text-xxl font-black tracking-[-0.03em] leading-none text-concrete-light mb-2">
                {looks[activeIndex].title}
              </h3>
              <p className="text-xs tracking-[0.25em] uppercase text-concrete-mid font-light">
                {looks[activeIndex].subtitle}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-4">
              {looks.map((look, i) => (
                <button
                  key={look.id}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left py-6 border-b transition-all ${
                    activeIndex === i 
                      ? 'border-concrete-light' 
                      : 'border-concrete opacity-40 hover:opacity-70'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-mid font-light">
                      {look.number}
                    </span>
                    <span className="text-[0.55rem] tracking-[0.2em] uppercase text-concrete-mid font-light">
                      {look.id}
                    </span>
                  </div>
                  <h4 className={`text-lg md:text-xl font-bold tracking-[-0.02em] text-concrete-light ${
                    activeIndex === i ? 'underline underline-offset-4' : ''
                  }`}>
                    {look.title}
                  </h4>
                  <p className="text-xs tracking-[0.25em] uppercase text-concrete-mid font-light mt-1">
                    {look.subtitle}
                  </p>
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-concrete">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  {[0, 1, 2, 3].map((i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        activeIndex === i 
                          ? 'bg-concrete-light' 
                          : 'bg-concrete hover:bg-concrete-mid'
                      }`}
                    />
                  ))}
                </div>
                <button className="text-[0.55rem] tracking-[0.25em] uppercase text-concrete-light font-light flex items-center gap-2 group">
                  OSSZA MEG
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
