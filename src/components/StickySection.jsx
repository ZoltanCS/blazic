import { useScrollProgress } from '../hooks/useScrollProgress'
import { useMousePosition } from '../hooks/useMousePosition'
import Scene from './Scene'
import TextOverlay from './TextOverlay'

const labels = [
  { at: 0, text: 'A HOODIE', sub: 'Ikonikus szab&aacute;s. &Uacute;jra&eacute;rtelmezve.' },
  { at: 0.25, text: 'BETON', sub: 'Neh&eacute;z pamut. Kőmosott.' },
  { at: 0.5, text: 'DROP II', sub: 'FW25 kollekci&oacute;' },
  { at: 0.75, text: 'BLAZIC', sub: 'Az utc&aacute;ra tervezve.' },
]

export default function StickySection() {
  const { containerRef, progress } = useScrollProgress()
  const mouse = useMousePosition()

  return (
    <section ref={containerRef} className="relative h-[400vh] border-t border-b border-concrete bg-concrete-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Scene scrollProgress={progress} mouse={mouse} />
        </div>

        <TextOverlay progress={progress} labels={labels} />

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="text-[0.55rem] tracking-[0.35em] uppercase text-concrete-dark font-light">
            G&ouml;rgess a forgat&aacute;shoz
          </div>
          <div className="w-px h-8 bg-concrete-mid" />
        </div>
      </div>
    </section>
  )
}
