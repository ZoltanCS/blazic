import { useScrollProgress } from '../hooks/useScrollProgress'
import { useMousePosition } from '../hooks/useMousePosition'
import Scene from './Scene'
import TextOverlay from './TextOverlay'

const labels = [
  { at: 0, text: 'A HOODIE', sub: 'Klasszikus. Nulláról.' },
  { at: 0.25, text: 'BETON', sub: '400gsm. Kőkemény.' },
  { at: 0.5, text: 'DROP II.', sub: '2025 TÉL' },
  { at: 0.75, text: 'BLAZIC', sub: 'Budapest.' },
]

export default function StickySection() {
  const { containerRef, progress } = useScrollProgress()
  const mouse = useMousePosition()

  return (
    <section ref={containerRef} className="relative h-[400vh] border-t border-b border-concrete bg-concrete-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden will-change-transform">
        <div className="absolute inset-0">
          <Scene scrollProgress={progress} mouse={mouse} />
        </div>

        <TextOverlay progress={progress} labels={labels} />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark font-light">
            FORGASD MEG
          </div>
          <div className="w-px h-8 bg-concrete-mid" />
        </div>
      </div>
    </section>
  )
}
