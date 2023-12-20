import Image from "next/image";
import styles from "./Title.module.css";
import mouse from "@public/mouse.webp"

const Title = () => {
    return (
        <div className={styles.page}>
            <div className={styles.headerContainer}>
                <span className={styles.header}>
                    Computational Structural Engineer
                </span>
                <span className={styles.header}>Seif Fahmy</span>
            </div>
            <Image className={styles.scrollIcon} src={mouse} alt="scroll icon" />
        </div>
    );
};

export default Title;
