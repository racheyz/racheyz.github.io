import React from 'react';

import { Suspense, useRef } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';

const Uranus = () => {
    const uranus = useGLTF('./uranus/uranus.gltf');

    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getDelta();
    })

    return (
        <mesh ref={ref}>
            <hemisphereLight intensity={3} groundColor="black" />
            <primitive object={uranus.scene}
                       position={[-7, 2.6, -9]}
                       rotation={[-1.4, 1.5, -0.1]}/>
        </mesh>
    )
}

const Jupiter = () => {
    const jupiter = useGLTF('./jupiter/jupiter.gltf');

    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getDelta();
    })

    return (
        <mesh ref={ref}>
            <primitive object={jupiter.scene}
                       position={[8, -1, -5]}
                       rotation={[0.2, 1.5, -0.1]}/>
        </mesh>
    )
}

const Mercury = () => {
    const mercury = useGLTF('./mercury/mercury.gltf');

    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getDelta();
    })

    return (
        <mesh ref={ref}>
            <hemisphereLight intensity={0} groundColor="black" />
            <primitive object={mercury.scene}
                       position={[-3, -3, 4]}
                       rotation={[-0.9, 1.2, -0.1]}/>
        </mesh>
    )
}

const Rocket = () => {
    const rocket = useGLTF("./rocket/rocket.gltf");

    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.position.y = (0.2 * Math.sin(2*t));
    })


    return (
        <mesh ref={ref}>
            <hemisphereLight intensity={3} groundColor="black" />
            <primitive object={rocket.scene}
                        position={[-2.1,-2,-2.01]}
                        rotation={[0, 1.4, 0]}/>

        </mesh>
    )
}


const SpaceCanvas = () => {
    return (
        <Canvas camera={{position: [20,3,5], fov: 40}}>
            <Suspense fallback={null}>
            <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
            />
                <Rocket />
                <Uranus />
                <Jupiter />
                <Mercury />

            </Suspense>
            <Preload all />
        </Canvas>
    )
}

export default SpaceCanvas;