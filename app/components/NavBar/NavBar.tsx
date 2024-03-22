import logoClipPath from "@/app/data/logoClip";
import "animate.css";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import styles from "./NavBar.module.css";

const NavBar = () => {
    const iconSize = 25;
    return (
        <aside className={styles.navbar}>
            <Link href="#">
                <div className={[styles.logo, styles.navbarSection].join(" ")} style={logoClipPath} >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 300 501"
                    >
                        <path d="M 142.5 5.6 c -7.9 1.1 -16.1 3.1 -22 5.4 c -23.1 9 -39.7 19.6 -56.5 36.1 c -31.5 30.8 -51.5 68.7 -58.1 109.9 c -1.7 10.5 -1.7 41.9 0 51.5 c 2.4 14.1 3.4 18.2 6.8 29 c 7.6 23.7 16.4 37.6 36.8 58.1 c 7.7 7.7 17.6 17.2 22 20.9 c 14.1 12 30.2 29 35.8 37.7 c 11.4 17.9 14.7 30.6 14.7 57.4 c 0 19 -1.7 31.6 -6.3 45.4 c -2.4 7.5 -10 20.9 -16.3 28.9 c -3.6 4.5 -6.2 8.7 -5.7 9.1 c 1.7 1.7 36.3 -1.1 48.8 -3.9 c 2.2 -0.6 7.4 -1.7 11.5 -2.6 c 18.2 -4.1 37.4 -11.9 56.7 -23.2 c 31.8 -18.6 58.4 -47.9 71.5 -78.8 c 4.1 -9.7 4.9 -11.8 6.4 -17.2 c 5.1 -18.6 6.4 -27.8 6.4 -45.3 c 0 -20.6 -2.9 -32.5 -12.3 -50 c -2.8 -5.2 -15.2 -23.9 -16.6 -25 c -0.4 -0.3 -3.3 -3.7 -6.5 -7.5 c -3.3 -3.9 -17.3 -19.2 -31.2 -34 c -13.9 -14.9 -26.7 -28.8 -28.4 -31 c -1.7 -2.2 -4.8 -6 -6.8 -8.4 c -12.3 -14.8 -25.9 -39.3 -30.5 -55.1 c -4.5 -15.4 -4.7 -17.4 -4.7 -41.5 c 0 -24.4 1 -34.5 5.1 -50.9 c 2.4 -9.8 2.4 -10.9 0 -13 c -2 -1.8 -13.8 -2.9 -20.6 -2 z"></path>
                    </svg>
                </div>
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
