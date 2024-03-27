"use client";

import mouse from "@public/images/mouse.webp";
import Image from "next/image";
import styles from "./Title.module.css";
import "animate.css";
import { useEffect, useState } from "react";

const Title = () => {
    const [bounce, setBounce] = useState(true);
    const bounceAnimation =
        "animate__animated animate__bounce animate__slow animate__delay-3s";

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (window.scrollY < window.innerHeight / 2) {
                setBounce((prev) => !prev);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className={styles.page}>
            <div className={styles.triangle} />
            <div className={styles.headerContainer}>
                <span className={styles.header}>
                    Developer &#38; Structural Engineer
                </span>
                <p className={styles.declaration}>
                    I build solutions for the web
                </p>
                <span className={styles.header}>Seif Fahmy</span>
            </div>
            <Image
                className={`${styles.scrollIcon} ${
                    bounce ? bounceAnimation : ""
                }`}
                // className={`${styles.scrollIcon}`}
                src={mouse}
                alt="scroll icon"
            />
        </div>
    );
};

export default Title;
