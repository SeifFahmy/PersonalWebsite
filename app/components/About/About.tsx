import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./About.module.css";

interface Props {
    children: ReactNode;
    image: StaticImageData;
    alt: string;
    title: string;
    text: string[];
}

const About = ({ children, image, alt, title, text }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>{title}</h3>
                {text.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                ))}
                <Image className={styles.auxilliary} src={image} alt={alt} />
            </div>
            {children}
        </div>
    );
};

export default About;
