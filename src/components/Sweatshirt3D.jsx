import { useRef, useEffect, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Center } from '@react-three/drei'

export default function Sweatshirt3D({ scrollProgress, mouse }) {
  const ref = useRef()
  const { scene } = useGLTF('/models/sweatshirt.glb')
  const targetY = useRef(0)

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.frustumCulled = true
      }
    })
  }, [scene])

  useFrame((_, delta) => {
    if (!ref.current) return
    const target = scrollProgress * Math.PI * 2
    targetY.current += (target - targetY.current) * Math.min(1, delta * 5)
    ref.current.rotation.y = targetY.current

    if (mouse) {
      ref.current.rotation.x += (mouse.y * 0.04 - ref.current.rotation.x) * delta * 3
      ref.current.rotation.z += (mouse.x * 0.04 - ref.current.rotation.z) * delta * 3
    }
  })

  return (
    <Center>
      <primitive ref={ref} object={scene} scale={4} />
    </Center>
  )
}
