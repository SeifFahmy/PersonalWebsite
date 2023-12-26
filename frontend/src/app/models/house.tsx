/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import useRotateModel from "../hooks/useRotateModel";

type GLTFResult = GLTF & {
    nodes: {
        Cube_1: THREE.Mesh;
        Cube_2: THREE.Mesh;
        Cube001: THREE.Mesh;
        Cube004: THREE.Mesh;
        Cube005: THREE.Mesh;
        Cube006: THREE.Mesh;
        Cube007: THREE.Mesh;
        Cube017: THREE.Mesh;
        Cube002: THREE.Mesh;
        Cube003: THREE.Mesh;
        Plane001: THREE.Mesh;
        Plane001_1: THREE.Mesh;
        Cube008: THREE.Mesh;
        Cube009: THREE.Mesh;
        Cube010: THREE.Mesh;
        Cube011: THREE.Mesh;
        Cube012: THREE.Mesh;
        Cube013: THREE.Mesh;
        Cube014: THREE.Mesh;
        Cube015: THREE.Mesh;
        Cube016: THREE.Mesh;
        Cube018_1: THREE.Mesh;
        Cube018_2: THREE.Mesh;
        Cube019_1: THREE.Mesh;
        Cube019_2: THREE.Mesh;
        Cube021: THREE.Mesh;
        Plane002: THREE.Mesh;
        Circle: THREE.Mesh;
        Circle001: THREE.Mesh;
        Circle002: THREE.Mesh;
        Cube022_1: THREE.Mesh;
        Cube022_2: THREE.Mesh;
        Cube023_1: THREE.Mesh;
        Cube023_2: THREE.Mesh;
        Cube024_1: THREE.Mesh;
        Cube024_2: THREE.Mesh;
        Cube025: THREE.Mesh;
        Circle003: THREE.Mesh;
        Plane003: THREE.Mesh;
        Plane004: THREE.Mesh;
        Circle004: THREE.Mesh;
        Circle005: THREE.Mesh;
        Circle006: THREE.Mesh;
        Circle007: THREE.Mesh;
    };
    materials: {
        Bege: THREE.MeshStandardMaterial;
        ["Bege Escuro"]: THREE.MeshStandardMaterial;
        ["Material.001"]: THREE.MeshStandardMaterial;
        ["Material.007"]: THREE.MeshStandardMaterial;
        ["Madeira clara"]: THREE.MeshStandardMaterial;
        ["Material.009"]: THREE.MeshStandardMaterial;
        ["Material.006"]: THREE.MeshStandardMaterial;
        ["Bege Claro"]: THREE.MeshStandardMaterial;
        ["Material.004"]: THREE.MeshStandardMaterial;
        ["Material.003"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
        ["Material.005"]: THREE.MeshStandardMaterial;
        ["Material.008"]: THREE.MeshStandardMaterial;
        ["Material.015"]: THREE.MeshStandardMaterial;
        ["Material.010"]: THREE.MeshStandardMaterial;
        ["Material.012"]: THREE.MeshPhysicalMaterial;
        ["Material.014"]: THREE.MeshPhysicalMaterial;
        ["Material.013"]: THREE.MeshPhysicalMaterial;
        ["Material.016"]: THREE.MeshPhysicalMaterial;
        ["Material.017"]: THREE.MeshStandardMaterial;
        ["Material.018"]: THREE.MeshPhysicalMaterial;
        ["Material.019"]: THREE.MeshStandardMaterial;
        ["Material.021"]: THREE.MeshStandardMaterial;
    };
};

const modelPath = "/models/house.glb";

const HouseModel = (props: JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF(modelPath) as GLTFResult;
    const ref = useRotateModel();

    return (
        <group scale={0.18} position={[0, -1, -1]} rotation={[0.3, -0.3, 0]} {...props} dispose={null}>
            <group
                position={[0, 4.4, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-9.7, -3.5, -6.3]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_1.geometry}
                    material={materials.Bege}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_2.geometry}
                    material={materials["Bege Escuro"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={materials["Material.001"]}
                position={[2.2, 0.7, 0]}
                scale={[13.9, 0.3, 10]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube004.geometry}
                material={materials["Material.007"]}
                position={[0.4, 3.5, 5.6]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[2.4, 0.1, 0.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube005.geometry}
                material={materials["Madeira clara"]}
                position={[1.1, 3.5, 5.6]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[2.4, 0.1, 0.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube006.geometry}
                material={materials["Material.009"]}
                position={[-1.1, 3.5, 5.6]}
                rotation={[-Math.PI, 1.6, 1.6]}
                scale={[2.4, 0.1, 0.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube007.geometry}
                material={materials["Material.006"]}
                position={[-0.4, 3.5, 5.6]}
                rotation={[-Math.PI, 1.6, Math.PI / 2]}
                scale={[2.4, 0.1, 0.4]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube017.geometry}
                material={materials["Bege Claro"]}
                position={[0, 4.4, 0]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-9.7, -3.5, -6.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={materials["Material.004"]}
                position={[-2.8, 13.5, -0.2]}
                scale={[0.3, 0.3, 5.6]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={materials["Material.003"]}
                position={[-8.9, 13.5, -0.2]}
                scale={[0.3, 0.3, 5.6]}
            />
            <group position={[-5.9, 13.9, -0.3]} scale={[5.7, 4.1, 5.2]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001.geometry}
                    material={materials["Material.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane001_1.geometry}
                    material={materials["Material.005"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008.geometry}
                material={materials["Material.007"]}
                position={[-5.8, 8, -0.9]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
                material={materials["Madeira clara"]}
                position={[-5.8, 8, -1.5]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
                material={materials["Material.009"]}
                position={[-5.8, 8, 0.3]}
                rotation={[3.1, 0, 0]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={materials["Material.006"]}
                position={[-5.8, 8, -0.3]}
                rotation={[3.1, 0, 0]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube012.geometry}
                material={materials["Material.007"]}
                position={[-5.8, 8, -2.3]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube013.geometry}
                material={materials["Madeira clara"]}
                position={[-5.8, 8, -2.9]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube014.geometry}
                material={materials["Material.009"]}
                position={[-5.8, 8, -4.2]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube015.geometry}
                material={materials["Material.006"]}
                position={[-5.8, 8, -3.6]}
                rotation={[0, 0, -Math.PI]}
                scale={[2.8, 0.1, 0.3]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube016.geometry}
                material={materials["Material.007"]}
                position={[-5.8, 8, -4.9]}
                scale={[2.8, 0.1, 0.3]}
            />
            <group
                position={[0, 4.4, 0]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[-9.7, -3.5, -6.3]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_1.geometry}
                    material={materials.Bege}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube018_2.geometry}
                    material={materials["Bege Claro"]}
                />
            </group>
            <group position={[-2.9, 1.7, 7]} scale={[0.8, 0.7, 0.8]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_1.geometry}
                    material={materials["Material.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube019_2.geometry}
                    material={materials["Material.015"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube021.geometry}
                material={materials["Material.010"]}
                position={[-3.7, 1.6, 8]}
                rotation={[0, -0.5, -1.7]}
                scale={[0.8, 0.7, 0.8]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane002.geometry}
                material={materials["Material.012"]}
                position={[-3.2, 1.3, 8.4]}
                rotation={[0, 0.2, -0.2]}
                scale={0.3}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle.geometry}
                material={materials["Material.014"]}
                position={[-1.8, 1.2, 7.9]}
                scale={0.4}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle001.geometry}
                material={materials["Material.013"]}
                position={[-2.7, 1, 8.9]}
                rotation={[0, -1.3, 0]}
                scale={0.1}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle002.geometry}
                material={materials["Material.016"]}
                position={[-2.9, 2.3, 7]}
                scale={0.4}
            />
            <group
                position={[7.1, 8.4, -3.9]}
                rotation={[-Math.PI, 0.2, -Math.PI]}
                scale={0.5}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube022_1.geometry}
                    material={materials["Material.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube022_2.geometry}
                    material={materials["Material.015"]}
                />
            </group>
            <group
                position={[6.7, 8.4, -4.6]}
                rotation={[2.5, -0.4, 1.1]}
                scale={0.5}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_1.geometry}
                    material={materials["Material.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube023_2.geometry}
                    material={materials["Material.015"]}
                />
            </group>
            <group
                position={[6.2, 8.5, -3.9]}
                rotation={[2.7, 0.2, -2.3]}
                scale={0.5}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_1.geometry}
                    material={materials["Material.008"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube024_2.geometry}
                    material={materials["Material.015"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube025.geometry}
                material={materials["Material.017"]}
                position={[4.9, 8.2, -4.5]}
                scale={0.6}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle003.geometry}
                material={materials["Material.018"]}
                position={[0.6, 10.7, -0.6]}
                scale={0.9}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane003.geometry}
                material={materials["Material.019"]}
                position={[4, 8, 1.6]}
                rotation={[0, -0.1, 0]}
                scale={[2.7, 1.9, 1.9]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane004.geometry}
                material={materials["Material.021"]}
                position={[3.9, 8, 1.7]}
                rotation={[0, -0.1, 0]}
                scale={[2.7, 1.7, 1.8]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle004.geometry}
                material={materials["Bege Escuro"]}
                position={[0.8, 8, 3.3]}
                scale={[0, 0.5, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle005.geometry}
                material={materials["Bege Escuro"]}
                position={[6.5, 8, 4.1]}
                scale={[0, 0.5, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle006.geometry}
                material={materials["Bege Escuro"]}
                position={[6.9, 8, -0.1]}
                scale={[0, 0.5, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Circle007.geometry}
                material={materials["Bege Escuro"]}
                position={[1.3, 8, -0.7]}
                scale={[0, 0.5, 0]}
            />
        </group>
    );
};

useGLTF.preload(modelPath);

export default HouseModel;
