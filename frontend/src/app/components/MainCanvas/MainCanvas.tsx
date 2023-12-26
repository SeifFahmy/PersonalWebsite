"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./MainCanvas.module.css";
import { ReactNode } from "react";
import useRotateModel from "@/app/hooks/useRotateModel";
import HouseModel from "@/app/models/house";

interface Props {
    children: ReactNode;
}

const MainCanvas = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Canvas>
                <OrbitControls enablePan={false} enableZoom={false} />
                <directionalLight args={[0xffffff, 5]} position={[0, 20, 20]} />
                <ambientLight args={[0xffffff, 0.5]} />
                <hemisphereLight intensity={0.5} />
                {children}
            </Canvas>
        </div>
    );
};

export default MainCanvas;
