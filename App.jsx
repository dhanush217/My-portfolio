import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function SpinningTorus() {
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.4, 128, 32]} />
      <meshStandardMaterial color="#61dafb" />
    </mesh>
  )
}

export default function App() {
  return (
    <div className="space-y-20 font-sans">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Jane Doe</h1>
        <p className="text-xl md:text-2xl mt-4">Frontend Developer & 3D Enthusiast</p>
        <div className="w-full h-[400px] mt-10">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight />
            <directionalLight position={[0, 5, 5]} />
            <OrbitControls enableZoom={false} />
            <SpinningTorus />
          </Canvas>
        </div>
      </section>

      {/* About */}
      <section className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>I build responsive UIs and integrate 3D using React Three Fiber.</p>
      </section>

      {/* Contact */}
      <section className="bg-gray-800 p-6 text-white">
        <h2 className="text-2xl mb-4">Contact</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-2 rounded bg-gray-700" />
          <input type="email" placeholder="Email" className="w-full p-2 rounded bg-gray-700" />
          <textarea placeholder="Message" rows="4" className="w-full p-2 rounded bg-gray-700"></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">Send</button>
        </form>
      </section>
    </div>
  )
}
