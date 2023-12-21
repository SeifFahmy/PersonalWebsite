import React, { ReactNode } from "react";
import styles from "./AboutProject.module.css";
import { button, highlight } from "@/app/hooks/useProject";
import Image from "next/image";
import Link from "next/link";

interface Props {
    children: ReactNode;
    title: string;
    text: string[];
    highlights: highlight[];
    buttons: button[];
}

const AboutProject = ({
    children,
    title,
    text,
    highlights,
    buttons,
}: Props) => {
    return (
        <div className={styles.container}>
            {children}
            <div className={styles.aboutContainer}>
                <h3>{title}</h3>
                {text.map((text) => (
                    <p>{text}</p>
                ))}
                <div className={styles.highlights}>
                    {highlights.map((highlight) => (
                        <div className={styles.highlight}>
                            {highlight.icon}
                            <span>{highlight.text}</span>
                        </div>
                    ))}
                </div>
                <div className={styles.buttons}>
                    {buttons.map((button) => (
                        <Link
                            className={styles.button}
                            href={button.link}
                            target="_blank"
                        >
                            {button.icon}
                            <span>{button.text}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutProject;
