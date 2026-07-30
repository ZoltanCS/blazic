import { useState, useEffect, useRef } from 'react'

export function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const handleMouse = (e) => {
      if (rafRef.current) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null
        setMouse({
          x: (e.clientX / window.innerWidth) * 2 - 1,
          y: -(e.clientY / window.innerHeight) * 2 + 1,
        })
      })
    }

    window.addEventListener('mousemove', handleMouse, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouse)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return mouse
}
