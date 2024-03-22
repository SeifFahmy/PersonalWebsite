"use client";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./MainCanvas.module.css";
import { ReactNode } from "react";
import useRotateModel from "@/app/hooks/useRotateModel";
import HouseModel from "@/app/models/house";
// import SplineTestModel from "@/app/models/spline";

interface Props {
    children: ReactNode;
}

const MainCanvas = ({ children }: Props) => {
    return (
        <div className={styles.container}>
            <Canvas>
                <OrbitControls enablePan={false} />
                <directionalLight args={[0xffffff, 2]} position={[0, 20, 20]} />
                <ambientLight args={[0xffffff, 0.4]} />
                <hemisphereLight intensity={0.1} />
                {/* {children} */}
                {/* <SplineTestModel /> */}
            </Canvas>
        </div>
    );
};

export default MainCanvas;
