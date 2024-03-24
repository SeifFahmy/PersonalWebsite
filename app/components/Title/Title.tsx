import mouse from "@public/images/mouse.webp";
import Image from "next/image";
import styles from "./Title.module.css";

const Title = () => {
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
                className={styles.scrollIcon}
                src={mouse}
                alt="scroll icon"
            />
        </div>
    );
};

export default Title;
