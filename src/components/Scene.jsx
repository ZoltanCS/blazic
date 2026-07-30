import { Canvas } from '@react-three/fiber'
import Sweatshirt3D from './Sweatshirt3D'

export default function Scene({ scrollProgress, mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={1}
      gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      style={{ background: 'transparent' }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 8, 6]} intensity={1.5} />
      <directionalLight position={[-4, 3, -5]} intensity={0.6} />

      <Sweatshirt3D scrollProgress={scrollProgress} mouse={mouse} />
    </Canvas>
  )
}
