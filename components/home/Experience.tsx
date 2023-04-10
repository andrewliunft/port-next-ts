'use client';

import { Canvas } from '@react-three/fiber'
import Particles from './Particles';

export default function Experience() {

    return (
        <Canvas 
            dpr={[1, 2]} 
            camera={{ position: [0, 0, 35], fov: 90 }}
        >
            <Particles />
        </Canvas>
    )
}

console.log(
    '%cBuilt with %c♥️', // Console Message
    'color: orange; font-size: 40px; font-weight: bold;',
    'color: pink; font-size: 40px; font-weight: bold;', // CSS Style
);