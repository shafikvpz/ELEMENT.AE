import React, { useRef } from 'react'
import { Clouds, Cloud } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Smoke = () => {
    const ref = useRef()

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05
        }
    })

    return (
        <group ref={ref}>
            <Clouds material={THREE.MeshBasicMaterial}>
                <Cloud
                    seed={1}
                    scale={2}
                    volume={5}
                    color="white"
                    fade={100}
                    speed={0.5}
                    position={[0, 0, 0]}
                    opacity={1}
                />
                <Cloud
                    seed={2}
                    scale={3}
                    volume={3}
                    color="hotpink"
                    fade={100}
                    speed={0.5}
                    position={[4, 0, -2]}
                    opacity={0.8}
                />
            </Clouds>
        </group>
    )
}
