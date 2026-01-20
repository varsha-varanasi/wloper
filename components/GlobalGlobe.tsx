'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    const points = useMemo(() => {
        const p = [];
        for (let i = 0; i < 30; i++) {
            const phi = Math.acos(-1 + (2 * i) / 30);
            const theta = Math.sqrt(30 * Math.PI) * phi;
            p.push(new THREE.Vector3().setFromSphericalCoords(2.1, phi, theta));
        }
        return p;
    }, []);

    return (
        <group>
            <Sphere args={[2, 64, 64]} ref={meshRef}>
                <meshStandardMaterial
                    color="#111"
                    wireframe
                    transparent
                    opacity={0.1}
                />
            </Sphere>

            {/* Pulsing Nodes */}
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshBasicMaterial color="#CAF648" />
                </mesh>
            ))}

            {/* Single Accent Light for Glow */}
            <pointLight position={[2, 2, 2]} color="#CAF648" intensity={2} distance={5} />
            <pointLight position={[-2, -2, 2]} color="#CAF648" intensity={1} distance={5} />
        </group>
    );
}

export default function GlobalGlobe() {
    return (
        <div className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Globe />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
