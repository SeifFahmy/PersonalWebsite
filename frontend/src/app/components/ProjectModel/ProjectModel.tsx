"use client";
import Image from "next/image";
import styles from "./ProjectModel.module.css";
import { projectModel, projectPage } from "@/app/hooks/useProject";
import TrophyModel from "@/app/models/trophy";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";

const ProjectModel = ({ model }: projectModel) => {
    const [colour, setColour] = useState(0xffffff);
    const [scroll, setScroll] = useState(0);
    function handleScroll() {
        setScroll(scroll + 1);
    }

    return (
        <div className={styles.container}>
            <Canvas
                onScroll={(event) => {
                    event.stopPropagation;
                    event.preventDefault;
                    handleScroll();
                }}
            >
                <OrbitControls enableZoom={false} />
                <directionalLight args={[0xffffff, 1]} position={[0, 10, 10]} />
                <ambientLight args={[colour, 0.5]} />
                <hemisphereLight intensity={0.5} />
                <TrophyModel modelProps={{ scale: 0.8 }} scroll={scroll} />
            </Canvas>
        </div>
    );
};

export default ProjectModel;
