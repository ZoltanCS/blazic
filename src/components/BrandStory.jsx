export default function BrandStory() {
  return (
    <section className="relative px-6 md:px-12 py-32 bg-[#1c1a18] text-[#f7f5f0] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, #f7f5f0 50px, #f7f5f0 51px)',
             }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#d4d0cb] mb-4 font-light">
            / EREDET
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-[0.95] mb-8">
            A BETON<br />GENERÁCIÓ
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#d4d0cb] mb-4 font-light">
                2024. BUDAPEST.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#efebe5] font-light">
                A város nem kér bocsánatot. Nyers, kemény, őszinte. 
                Mi sem kérünk. A BLAZIC nem divat — identitás.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#d4d0cb] mb-4 font-light">
                ANYAG.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#efebe5] font-light">
                400gsm heavyweight cotton. Kőmosva, 
                hogy minden darab egyedi legyen. Kopásálló, 
                mint a betonfalak amik körülvesznek minket.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#d4d0cb] mb-4 font-light">
                FORMA.
              </h3>
              <p className="text-base md:text-lg leading-relaxed text-[#efebe5] font-light">
                Oversized, de nem túl. Kényelmes, de precíz. 
                Minden varrat, minden zseb funkcionális. 
                Nincsenek kompromisszumok.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-[#d4d0cb] mt-3" />
                <div>
                  <p className="text-6xl md:text-7xl font-black tracking-[-0.04em] leading-none mb-2">
                    100%
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#d4d0cb] font-light">
                    MAGYAR TERVEZÉS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-[#d4d0cb] mt-3" />
                <div>
                  <p className="text-6xl md:text-7xl font-black tracking-[-0.04em] leading-none mb-2">
                    400+
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#d4d0cb] font-light">
                    GSM PAMUT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-px bg-[#d4d0cb] mt-3" />
                <div>
                  <p className="text-6xl md:text-7xl font-black tracking-[-0.04em] leading-none mb-2">
                    25Y
                  </p>
                  <p className="text-xs tracking-[0.2em] uppercase text-[#d4d0cb] font-light">
                    GARANCIA
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#6b6560]">
              <p className="text-xs tracking-[0.15em] leading-relaxed text-[#d4d0cb] font-light">
                "A BLAZIC nem trend. Nem szezon. Nem flash-sale. 
                Ez a ruhák amikben élsz, dolgozol, alkotsz. 
                Amik veled öregszenek."
              </p>
              <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#d4d0cb] mt-4 font-light">
                — ALAPÍTÓK, 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
