import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./About.module.css";

interface Props {
    children: ReactNode;
    image: StaticImageData;
    alt: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
}

const About = ({
    children,
    image,
    alt,
    title,
    paragraph1,
    paragraph2,
}: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>{paragraph1}</p>
                {paragraph2 && <p>{paragraph2}</p>}
                <Image className={styles.auxilliary} src={image} alt={alt} />
            </div>
            {children}
        </div>
    );
};

export default About;
