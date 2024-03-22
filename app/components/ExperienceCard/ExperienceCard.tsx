import Link from "next/link";
import { ReactNode } from "react";
import styles from "./ExperienceCard.module.css";

interface Props {
    icon: ReactNode;
    highlight: string;
    context: string;
}

const ExperienceCard = ({ icon, highlight, context }: Props) => {
    return (
        <Link href="#" className={styles.card}>
            <div className={[styles.cardItem, styles.icon].join(" ")}>
                {icon}
            </div>
            <div>
                <span className={[styles.cardItem, styles.highlight].join(" ")}>
                    {highlight}
                </span>
                <span className={[styles.cardItem, styles.context].join(" ")}>
                    {context}
                </span>
            </div>
            <div className={[styles.cardItem, styles.button].join(" ")}>
                Read story <span className={styles.arrow}>{"->"}</span>
            </div>
        </Link>
    );
};

export default ExperienceCard;
