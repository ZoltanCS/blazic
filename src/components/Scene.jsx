import { Canvas } from '@react-three/fiber'
import Sweatshirt3D from './Sweatshirt3D'

export default function Scene({ scrollProgress, mouse }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 8, 6]} intensity={2} />
      <directionalLight position={[-4, 3, -5]} intensity={1} />
      <directionalLight position={[0, -2, 4]} intensity={0.5} />
      <hemisphereLight args={['#ffffff', '#d4d0cb', 0.6]} />

      <Sweatshirt3D scrollProgress={scrollProgress} mouse={mouse} />
    </Canvas>
  )
}
