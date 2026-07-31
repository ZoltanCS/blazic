import { memo, useState } from 'react'

const products = [
  {
    id: '01',
    name: 'BETON HOODIE',
    price: '34 900',
    color: 'Kőszürke',
    desc: '400gsm pamut. Double-lined hood. Erős varrások.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '02',
    name: 'VÁROSI PÓLÓ',
    price: '13 900',
    color: 'Fekete',
    desc: '220gsm loose fit. Breathable. Kopásálló.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '03',
    name: 'KARGO NADRÁG',
    price: '27 900',
    color: 'Drap',
    desc: 'Heavy canvas. Hat funkcionális zseb. Adjustable.',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: '04',
    name: 'NYERS PULCSI',
    price: '24 900',
    color: 'Natúr',
    desc: 'Quarter-zip. Fleece bélés. Bő ujjak.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '05',
    name: 'MONOLIT JACKET',
    price: '42 900',
    color: 'Antracit',
    desc: 'Water-resistant shell. Bélés nélküli. Tavasz/ősz.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '06',
    name: 'BETON SAPKA',
    price: '8 900',
    color: 'Szürke',
    desc: 'Unisex. Breathable. Állítható méret.',
    sizes: ['ONE'],
  },
]

const ProductCard = memo(function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)

  return (
    <div 
      className="bg-concrete-white p-6 md:p-8 flex flex-col group cursor-pointer border-b border-r border-concrete relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[3/4] bg-concrete-light mb-5 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-xxxl font-black tracking-[-0.05em] text-concrete opacity-20 select-none">
            {product.id}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-concrete-dark opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <div className="flex-1">
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-[0.55rem] tracking-[0.35em] text-concrete-dark font-light">
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
        <p className="text-[0.6rem] tracking-[0.15em] text-concrete-dark mt-2 leading-relaxed font-light">
          {product.desc}
        </p>
      </div>

      <div className="mt-4 pt-4 border-t border-concrete flex justify-between items-center">
        <div className="flex gap-2">
          {product.sizes.slice(0, 4).map((size) => (
            <button 
              key={size}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedSize(size)
              }}
              className={`text-[0.55rem] tracking-[0.15em] px-2 py-1 transition-all ${
                selectedSize === size 
                  ? 'bg-concrete-darkest text-concrete-light' 
                  : 'text-concrete-dark hover:bg-concrete'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <span className="text-concrete-dark font-mono text-xs group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  )
})

export default function ProductGrid() {
  return (
    <section className="relative px-6 md:px-12 py-24 border-t border-concrete bg-concrete-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark mb-3 font-light">
            / 02 — TERMEK
          </p>
          <h2 className="text-xxl font-black tracking-[-0.03em] leading-none text-concrete-darkest">
            DROP II.
          </h2>
          <div className="flex items-center gap-4 mt-4">
            <div className="w-16 h-px bg-concrete-mid" />
            <p className="text-xs tracking-[0.2em] uppercase text-concrete-dark font-light">
              2025 TEL
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 -mx-px">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-concrete flex justify-between items-center">
          <p className="text-[0.55rem] tracking-[0.2em] uppercase text-concrete-dark font-light">
            HAMAROSAN TOVABBI DARABOK
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-concrete-dark animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-concrete-mid" />
            <div className="w-2 h-2 rounded-full bg-concrete-mid" />
          </div>
        </div>
      </div>
    </section>
  )
}
