'use client';

import { Canvas } from '@react-three/fiber'
import Particles from './Particles';
import { Loader } from '@react-three/drei'
import { Suspense } from 'react';

export default function Experience() {

    return (
        <>
            <Canvas 
                dpr={[1, 2]} 
                camera={{ position: [0, 0, 35], fov: 90 }}
            >
                <Suspense fallback={null}>
                    <Particles />
                </Suspense>
            </Canvas>
            <Loader />
        </>
    )
}

console.log(
    '%cBuilt with %c♥️', // Console Message
    'color: orange; font-size: 40px; font-weight: bold;',
    'color: pink; font-size: 40px; font-weight: bold;', // CSS Style
);