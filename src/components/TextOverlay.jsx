import { useMemo } from 'react'

export default function TextOverlay({ progress, labels }) {
  const current = useMemo(() => {
    let active = labels[0]
    for (let i = labels.length - 1; i >= 0; i--) {
      if (progress >= labels[i].at) {
        active = labels[i]
        break
      }
    }
    return active
  }, [progress, labels])

  return (
    <div className="relative z-10 pointer-events-none text-center select-none">
      {labels.map((label, i) => {
        const isActive = current === label
        const distance = Math.abs(progress - label.at)
        const fade = isActive ? 1 : Math.max(0, 1 - distance * 8)
        const yOffset = isActive ? 0 : (progress > label.at ? -15 : 15)

        return (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-out"
            style={{
              opacity: fade,
              transform: `translateY(${yOffset}px)`,
              pointerEvents: 'none',
            }}
          >
            <h2
              className="text-xxl font-black tracking-[-0.03em] leading-none"
              style={{
                color: '#ffffff',
                mixBlendMode: 'difference',
              }}
            >
              {label.text}
            </h2>
            <p
              className="mt-3 text-xs tracking-[0.25em] uppercase font-light"
              style={{
                color: '#ffffff',
                mixBlendMode: 'difference',
              }}
            >
              {label.sub}
            </p>
          </div>
        )
      })}
    </div>
  )
}
