import Link from "next/link";
import styles from "./ExperienceCard.module.css";
import { HiArrowNarrowRight } from "react-icons/hi";

interface Props {
    title: string;
    highlight: string;
    context: string;
}

const ExperienceCard = ({ title, highlight, context }: Props) => {
    return (
        <Link href="#" className={styles.card}>
            <span className={[styles.cardItem, styles.title].join(" ")}>
                {title}
            </span>
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
