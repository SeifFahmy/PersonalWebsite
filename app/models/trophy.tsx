"use client";

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import useRotateModel from "../hooks/useRotateModel";


type GLTFResult = GLTF & {
    nodes: {
        Plane_1: THREE.Mesh;
        Plane_2: THREE.Mesh;
        Trophy_1: THREE.Mesh;
        Trophy_2: THREE.Mesh;
    };
    materials: {
        ["Material.001"]: THREE.MeshPhysicalMaterial;
        ["Material.005"]: THREE.MeshPhysicalMaterial;
        ["M.01"]: THREE.MeshPhysicalMaterial;
        ["M.03"]: THREE.MeshPhysicalMaterial;
    };
};

interface Props {
    scroll: number;
    modelProps: JSX.IntrinsicElements["group"];
}

// looks for path starting at "public" directory
const modelPath = "/models/trophy.glb";

const TrophyModel = ({ scroll, modelProps }: Props) => {
    const { nodes, materials } = useGLTF(modelPath) as GLTFResult;

    const trophyRef = useRotateModel();

    return (
        <group ref={trophyRef} {...modelProps} dispose={null}>
            <group
                position={[0, 0, -1.3]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={2.7}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_1.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane_2.geometry}
                    material={materials["Material.005"]}
                />
            </group>
            <group position={[0, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Trophy_1.geometry}
                    material={materials["M.01"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Trophy_2.geometry}
                    material={materials["M.03"]}
                />
            </group>
        </group>
    );
};
useGLTF.preload(modelPath);

export default TrophyModel;
