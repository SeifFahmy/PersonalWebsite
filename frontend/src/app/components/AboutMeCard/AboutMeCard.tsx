import hero from "@public/bird.webp";
import personalPic from "@public/personal-picture.png";
import Image from "next/image";
import styles from "./AboutMeCard.module.css";

const AboutMeCard = () => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.personalImage}
                src={personalPic}
                alt="Picture of Seif Fahmy"
            />
            <div className={styles.hero}>
                <Image src={hero} alt="Bird" />
                <span></span>
            </div>
        </div>
    );
};

export default AboutMeCard;
