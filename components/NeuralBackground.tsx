'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNodes({ count = 100 }) {
    const points = useMemo(() => {
        const p = new Array(count).fill(0).map(() => ({
            position: new THREE.Vector3(
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 10
            ),
            velocity: new THREE.Vector3(
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02,
                (Math.random() - 0.5) * 0.02
            )
        }));
        return p;
    }, [count]);

    const linesRef = useRef<THREE.LineSegments>(null);
    const nodesRef = useRef<THREE.Points>(null);
    const { mouse } = useThree();

    // Pre-allocate arrays to avoid GC
    const nodePositions = useMemo(() => new Float32Array(count * 3), [count]);
    const maxLines = count * 10; // Estimated max lines for efficiency
    const linePositions = useMemo(() => new Float32Array(maxLines * 2 * 3), [maxLines]);

    useFrame((state) => {
        let lineIdx = 0;
        const mousePos = new THREE.Vector3(mouse.x * 10, mouse.y * 10, 0);

        points.forEach((p, i) => {
            // Move points
            p.position.add(p.velocity);

            // Boundary check
            if (Math.abs(p.position.x) > 10) p.velocity.x *= -1;
            if (Math.abs(p.position.y) > 10) p.velocity.y *= -1;
            if (Math.abs(p.position.z) > 5) p.velocity.z *= -1;

            // React to mouse
            const distSq = p.position.distanceToSquared(mousePos);
            if (distSq < 9) { // 3 * 3
                p.position.lerp(mousePos, 0.02);
            }

            nodePositions[i * 3] = p.position.x;
            nodePositions[i * 3 + 1] = p.position.y;
            nodePositions[i * 3 + 2] = p.position.z;

            // Find neighbors for lines
            for (let j = i + 1; j < points.length; j++) {
                if (lineIdx < maxLines * 2 * 3) {
                    const distSqLine = p.position.distanceToSquared(points[j].position);
                    if (distSqLine < 9) { // 3 * 3
                        linePositions[lineIdx++] = p.position.x;
                        linePositions[lineIdx++] = p.position.y;
                        linePositions[lineIdx++] = p.position.z;
                        linePositions[lineIdx++] = points[j].position.x;
                        linePositions[lineIdx++] = points[j].position.y;
                        linePositions[lineIdx++] = points[j].position.z;
                    }
                }
            }
        });

        if (nodesRef.current) {
            const attr = nodesRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
            if (attr) {
                attr.array.set(nodePositions);
                attr.needsUpdate = true;
            } else {
                nodesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
            }
        }

        if (linesRef.current) {
            const attr = linesRef.current.geometry.getAttribute('position') as THREE.BufferAttribute;
            if (attr) {
                // We need to handle variable number of lines.
                // For simplicity, we can use DrawRange or just update part of the buffer if we pre-allocate enough.
                attr.array.set(linePositions);
                attr.needsUpdate = true;
                linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
            } else {
                linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
                linesRef.current.geometry.setDrawRange(0, lineIdx / 3);
            }
        }
    });

    return (
        <group>
            <points ref={nodesRef}>
                <bufferGeometry />
                <pointsMaterial size={0.06} color="#CAF648" transparent opacity={0.6} />
            </points>
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial color="#CAF648" transparent opacity={0.15} />
            </lineSegments>
        </group>
    );
}

export default function NeuralBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <NeuralNodes count={typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 100} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-wl-dark/40 via-wl-dark/60 to-wl-dark"></div>
        </div>
    );
}
