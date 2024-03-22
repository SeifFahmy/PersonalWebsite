import Image, { StaticImageData } from "next/image";
import styles from "./Transition.module.css";
import MainCanvas from "../MainCanvas";
import { ReactNode } from "react";

interface TransitionProps {
    title: string;

    hero: ReactNode;

    auxiliary1: StaticImageData;
    auxiliary1Alt: string;

    auxiliary2: StaticImageData;
    auxiliary2Alt: string;
}

const Transition = ({
    title,
    hero,
    auxiliary1,
    auxiliary1Alt,
    auxiliary2,
    auxiliary2Alt,
}: TransitionProps) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.heroContainer}>
                <MainCanvas>{hero}</MainCanvas>
            </div>
            <Image
                className={[styles.auxilliary, styles.aux1].join(" ")}
                src={auxiliary1}
                alt={auxiliary1Alt}
            />
            <Image
                className={[styles.auxilliary, styles.aux2].join(" ")}
                src={auxiliary2}
                alt={auxiliary2Alt}
            />
        </div>
    );
};

export default Transition;
