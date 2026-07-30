const products = [
  {
    id: '01',
    name: 'BETON HOODIE',
    price: '34.900',
    color: 'Kőszürke',
    desc: 'Neh&eacute;z s&uacute;ly&uacute; pamut, kőmosott, oversized.',
    img: 'https://picsum.photos/seed/beton-hoodie/600/800',
  },
  {
    id: '02',
    name: 'V&Aacute;ROSI P&Oacute;L&Oacute;',
    price: '13.900',
    color: 'Fekete',
    desc: 'Vastag pamut, bő szab&aacute;s, erős varr&aacute;sok.',
    img: 'https://picsum.photos/seed/varosi-polo/600/800',
  },
  {
    id: '03',
    name: 'KARGO NADR&Aacute;G',
    price: '27.900',
    color: 'Drap',
    desc: 'Hat zsebes, erős v&aacute;szon, &aacute;ll&iacute;that&oacute; der&eacute;k.',
    img: 'https://picsum.photos/seed/kargo-nadrag/600/800',
  },
  {
    id: '04',
    name: 'NYERS PULCSI',
    price: '24.900',
    color: 'Term&eacute;szetfeh&eacute;r',
    desc: 'F&eacute;lcipz&aacute;ras, magas gall&eacute;r, puha b&eacute;l&eacute;s.',
    img: 'https://picsum.photos/seed/nyers-pulcsi/600/800',
  },
  {
    id: '05',
    name: 'NAGYV&Aacute;ROSI KAPUCNIS',
    price: '29.900',
    color: 'Antracit',
    desc: 'Laza szab&aacute;s, fleece b&eacute;l&eacute;s, k&eacute;nyelmes.',
    img: 'https://picsum.photos/seed/nagyvarosi-kapucnis/600/800',
  },
  {
    id: '06',
    name: 'BETON SAPI',
    price: '8.900',
    color: 'Sz&uuml;rke',
    desc: 'Bord&aacute;zott k&ouml;t&eacute;s, stretch, egym&eacute;retes.',
    img: 'https://picsum.photos/seed/beton-sapi/600/800',
  },
]

export default function ProductGrid() {
  return (
    <section className="relative px-6 md:px-12 py-24 border-t border-concrete bg-concrete-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-3">
            / 02
          </p>
          <h2 className="text-xxl font-black tracking-[-0.03em] leading-none text-concrete-darkest">
            DROPP
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-px bg-concrete-mid" />
            <p className="text-xs tracking-[0.2em] uppercase text-concrete-dark font-light">
              El&eacute;rhető most
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-concrete-white p-6 md:p-8 flex flex-col group cursor-pointer"
            >
              <div className="aspect-[3/4] bg-concrete mb-5 overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <p className="text-xs tracking-[0.15em] text-concrete-dark">
                      {product.id}
                    </p>
                    <h3 className="text-sm md:text-base font-bold tracking-[0.1em] text-concrete-darkest mt-1 group-hover:underline underline-offset-4">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-bold text-concrete-darkest whitespace-nowrap">
                    {product.price} Ft
                  </p>
                </div>
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-concrete-dark mt-2 font-light">
                  {product.color}
                </p>
                <p className="text-[0.6rem] tracking-[0.15em] text-concrete-dark mt-1 leading-relaxed font-light"
                  dangerouslySetInnerHTML={{ __html: product.desc }}
                />
              </div>

              <div className="mt-4 pt-4 border-t border-concrete flex justify-between items-center">
                <span className="text-[0.55rem] tracking-[0.25em] uppercase text-concrete-dark font-light">
                  Kos&aacute;rba
                </span>
                <span className="text-concrete-dark font-mono text-xs opacity-40">
                  &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
