import { useRef, useState, useEffect, useCallback } from 'react'

export function useScrollProgress() {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    const update = () => {
      rafRef.current = null
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const elHeight = containerRef.current.clientHeight
      const viewHeight = window.innerHeight
      const scrollable = elHeight - viewHeight
      if (scrollable <= 0) return setProgress(0)
      const scrolled = -rect.top
      setProgress(Math.max(0, Math.min(1, scrolled / scrollable)))
    }

    const handleScroll = () => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return { containerRef, progress }
}
