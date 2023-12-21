import Image, { StaticImageData } from "next/image";
import styles from "./Transition.module.css";

interface TransitionProps {
    title: string;

    hero: StaticImageData;
    heroAlt: string;

    auxiliary1: StaticImageData;
    auxiliary1Alt: string;

    auxiliary2: StaticImageData;
    auxiliary2Alt: string;
}

const Transition = ({
    title,
    hero,
    heroAlt,
    auxiliary1,
    auxiliary1Alt,
    auxiliary2,
    auxiliary2Alt,
}: TransitionProps) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <div className={styles.heroContainer}>
                <Image className={styles.hero} src={hero} alt={heroAlt} />
                <span className={styles.blur}></span>
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
