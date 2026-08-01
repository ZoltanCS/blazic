import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#efebe5]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-2 group"
          >
            <div className="flex flex-col gap-1">
              <div className={`w-5 h-px bg-[#1c1a18] transition-transform ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-5 h-px bg-[#1c1a18] transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-5 h-px bg-[#1c1a18] transition-transform ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
            <span className="text-[0.55rem] tracking-[0.25em] uppercase font-light">
              {menuOpen ? 'BEZÁR' : 'MENÜ'}
            </span>
          </button>

          <h1 className="text-xl md:text-2xl font-black tracking-[-0.03em] select-none">
            BLAZIC
          </h1>

          <button className="flex items-center gap-2 group">
            <span className="text-[0.55rem] tracking-[0.25em] uppercase font-light">
              KOSÁR
            </span>
            <div className="relative">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#1c1a18] text-white text-[0.5rem] flex items-center justify-center rounded-full">
                  {cartCount}
                </div>
              )}
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#f7f5f0]/98 backdrop-blur-md border-b border-[#efebe5] animate-fadeIn">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h3 className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] mb-6 font-light">
                  TERMÉKEK
                </h3>
                <ul className="space-y-3">
                  {['Minden termék', 'Hoodies', 'Pólók', 'Nadrágok', 'Accessory'].map((item) => (
                    <li key={item}>
                      <button className="text-sm tracking-[0.1em] text-[#1c1a18] hover:underline underline-offset-4 font-light">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] mb-6 font-light">
                  MÁRKÁNK
                </h3>
                <ul className="space-y-3">
                  {['Rólunk', 'Lookbook', 'Történetünk', 'Fenntarthatóság'].map((item) => (
                    <li key={item}>
                      <button className="text-sm tracking-[0.1em] text-[#1c1a18] hover:underline underline-offset-4 font-light">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] mb-6 font-light">
                  TÁMOGATÁS
                </h3>
                <ul className="space-y-3">
                  {['Kapcsolat', 'Szállítás', 'Visszaküldés', 'GYIK', 'Mérettáblázat'].map((item) => (
                    <li key={item}>
                      <button className="text-sm tracking-[0.1em] text-[#1c1a18] hover:underline underline-offset-4 font-light">
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
