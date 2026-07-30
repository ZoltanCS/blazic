import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-12 pb-8 overflow-hidden border-b border-concrete">
      <div className="relative z-10">
        <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark font-light">
          Alapítva 2024
        </p>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 -my-8">
        <h1 className="text-hero font-black tracking-[-0.04em] leading-[0.85] text-concrete-darkest select-none">
          BLAZIC
        </h1>
        <div className="flex items-end gap-4 md:gap-12 mt-2">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-concrete-dark font-light">
            Utcai viselet
          </p>
          <div className="flex-1 h-px bg-concrete" />
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-concrete-dark font-light">
            Nem magyarázkodunk
          </p>
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-4">
        <div className="max-w-xs">
          <p className="text-xs tracking-[0.15em] leading-relaxed text-concrete-dark font-light">
            Nehéz anyagok, nehéz időkre. Az utcára szabva, ütésálló kivitelben.
          </p>
        </div>
        <div className="text-right">
          <p className="text-[0.55rem] tracking-[0.3em] uppercase text-concrete-dark font-light">
            Görgess lejjebb
          </p>
          <div className="flex justify-end mt-2">
            <div className="w-8 h-px bg-concrete-mid" />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
