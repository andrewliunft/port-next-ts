'use client';

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Center, Sparkles } from '@react-three/drei'

export default function Particles() {

    const particles = useRef()
    const points = useRef()

    useFrame((state, delta) => {
        particles.current.rotation.y -= 0.002
        points.current.rotation.y += 0.002
        points.current.rotation.x -= 0.001
    })

    return (
        <>
            <Center>
                <points ref={points}>
                    <boxGeometry args={[17,17,17,20,20,20]} />
                    <pointsMaterial color="black" size={0.08} sizeAttenuation />
                </points>
            </Center>

            <Sparkles 
                ref={particles}
                size={20}
                scale={100}
                speed={0.2}
                noise={0.01}
                count={400}
                color={'black'}
            />
        </>
    )
}
