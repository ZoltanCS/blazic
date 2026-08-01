import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, loading, success, error

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    
    setStatus('loading')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1000)
  }

  return (
    <section className="relative px-6 md:px-12 py-24 bg-[#efebe5] border-y border-[#d4d0cb]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[0.55rem] tracking-[0.35em] uppercase text-[#6b6560] mb-6 font-light">
          / KÖZÖSSÉG
        </p>
        <h2 className="text-3xl md:text-5xl font-black tracking-[-0.03em] leading-tight mb-6">
          ELSŐ VAGY AKI TUDJA
        </h2>
        <p className="text-sm md:text-base tracking-[0.1em] text-[#6b6560] font-light mb-12 max-w-2xl mx-auto">
          Új dropok. Exkluzív hozzáférés. Nincs spam, csak a lényeg. 
          Leiratkozás bármikor.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@pelda.hu"
              disabled={status === 'success'}
              className="flex-1 px-6 py-4 bg-[#f7f5f0] border border-[#d4d0cb] text-[#1c1a18] text-sm tracking-[0.1em] placeholder:text-[#6b6560] focus:outline-none focus:border-[#1c1a18] transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-8 py-4 bg-[#1c1a18] text-[#f7f5f0] text-[0.55rem] tracking-[0.25em] uppercase font-light hover:bg-[#2a2520] transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'KÜLDÉS...' : status === 'success' ? 'KÉSZ' : 'FELIRATKOZÁS'}
            </button>
          </div>
          {status === 'success' && (
            <p className="mt-4 text-xs tracking-[0.15em] text-[#1c1a18] font-light">
              Köszönjük! Hamarosan jelentkezünk.
            </p>
          )}
        </form>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-2xl font-bold tracking-[-0.02em] text-[#1c1a18] mb-1">
              2.4K+
            </p>
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
              KÖZÖSSÉG
            </p>
          </div>
          <div className="w-px h-8 bg-[#d4d0cb]" />
          <div className="text-center">
            <p className="text-2xl font-bold tracking-[-0.02em] text-[#1c1a18] mb-1">
              98%
            </p>
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
              ELÉGEDETTSÉG
            </p>
          </div>
          <div className="w-px h-8 bg-[#d4d0cb]" />
          <div className="text-center">
            <p className="text-2xl font-bold tracking-[-0.02em] text-[#1c1a18] mb-1">
              4.8/5
            </p>
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#6b6560] font-light">
              ÉRTÉKELÉS
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
