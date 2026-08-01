import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 pb-16 overflow-hidden bg-[#f7f5f0]">
      <motion.div 
        style={{ scale }} 
        className="absolute inset-0 bg-gradient-to-b from-[#efebe5] via-[#f7f5f0] to-[#f7f5f0]"
      />
      
      <div className="absolute top-0 left-0 right-0 p-6 md:p-12 flex justify-between items-start z-20">
        <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] font-light">
          EST. 2024
        </p>
        <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] font-light">
          BUDAPEST, HU
        </p>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10">
        <div className="mb-8">
          <h1 className="text-[clamp(4rem,18vw,14rem)] font-black tracking-[-0.05em] leading-[0.88] text-[#1c1a18] select-none mb-4">
            BLAZIC
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
            <div className="max-w-md">
              <p className="text-sm md:text-base tracking-[0.15em] uppercase text-[#2a2520] font-light mb-6">
                KŐKEMÉNY SZÖVETEK.<br />
                BRUTÁLIS FORMÁK.<br />
                NINCS KOMPROMISSZUM.
              </p>
              <p className="text-xs md:text-sm tracking-[0.1em] leading-relaxed text-[#6b6560] font-light">
                400gsm pamut, kőmosott felülettel. Minden darab egyedi. 
                Tervezve Budapesten, hordva mindenhol ahol számít.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <button className="group px-8 py-4 bg-[#1c1a18] text-[#f7f5f0] text-[0.55rem] tracking-[0.25em] uppercase font-light hover:bg-[#2a2520] transition-all border border-[#1c1a18] flex items-center gap-3">
                DROP II. FELFEDEZÉSE
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
              
              <button className="px-8 py-4 bg-transparent text-[#1c1a18] text-[0.55rem] tracking-[0.25em] uppercase font-light hover:bg-[#efebe5] transition-all border border-[#1c1a18]">
                MÉRETTÁBLÁZAT
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-8 md:gap-12 pt-8 border-t border-[#d4d0cb]">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#1c1a18] animate-pulse" />
            <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
              ÚJ DARABOK HAMAROSAN
            </span>
          </div>
          <div className="hidden md:block w-px h-4 bg-[#d4d0cb]" />
          <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
            INGYENES SZÁLLÍTÁS 25.000 FT FELETT
          </span>
          <div className="hidden md:block w-px h-4 bg-[#d4d0cb]" />
          <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
            30 NAP VISSZAKÜLDÉS
          </span>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <div className="text-[0.5rem] tracking-[0.3em] uppercase text-[#6b6560] font-light">
            SCROLL
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-[#6b6560] to-transparent" />
        </div>
      </div>
    </section>
  )
}
