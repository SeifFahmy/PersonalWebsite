import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";
import styles from "./About.module.css";

interface Props {
    children: ReactNode;
    image: StaticImageData;
    alt: string;
}

const About = ({ children, image, alt }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                <h3>Hi! 👋🏼</h3>
                <p>
                    non ad deserunt pariatur ullamco labore ullamco aute labore
                    ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu
                    commodo labore consectetur ipsum id ex consequat consequat
                    consectetur enim cupidatat adipisicing aute sit consequat
                    anim exercitation sint id ad id anim minim dolore
                    reprehenderit reprehenderit veniam minim adipisicing
                    deserunt laborum nulla reprehenderit nostrud adipisicing
                    elit amet consectetur
                </p>
                <p>
                    duis commodo aliqua non fugiat anim deserunt adipisicing
                    sunt ipsum anim aliquip ea amet veniam enim Lorem mollit
                    quis culpa dolore qui ipsum non minim anim consequat laborum
                    ullamco quis sit ut cupidatat qui adipisicing exercitation
                    Lorem occaecat do cupidatat ipsum aute
                </p>
                <Image className={styles.auxilliary} src={image} alt={alt} />
            </div>
            {children}
        </div>
    );
};

export default About;
