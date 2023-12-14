import logo from "@public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import styles from "./NavBar.module.css";
import "animate.css";

const NavBar = () => {
    const iconSize = 25;
    return (
        <aside className={styles.navbar}>
            <Link href="#">
                <Image
                    className={[styles.logo, styles.navbarSection].join(" ")}
                    src={logo}
                    alt="Personal logo"
                />
            </Link>
            <Link href="#" className={styles.navbarSection}>
                About Me
            </Link>
            <Link href="#" className={styles.navbarSection}>
                Experience
            </Link>
            <Link href="#" className={styles.navbarSection}>
                Projects
            </Link>
            <Link href="#" className={styles.navbarSection}>
                Awards
            </Link>
            <Link href="#" className={styles.navbarSection}>
                Contact
            </Link>
            <div className={styles.iconContainer}>
                <Link
                    href="https://github.com/SeifFahmy"
                    target="_blank"
                    aria-label="Personal GitHub Profile"
                >
                    <AiOutlineGithub color="white" size={iconSize} />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/seif-fahmy/"
                    target="_blank"
                    aria-label="Personal LinkedIn Profile"
                >
                    <FaLinkedin color="white" size={iconSize} />
                </Link>
            </div>
        </aside>
    );
};

export default NavBar;
