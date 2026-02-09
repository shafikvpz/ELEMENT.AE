import { OrbitControls } from '@react-three/drei'

export const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#FF4500" />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls makeDefault />
        </>
    )
}
