import trip from "@public/trip.svg";
import About from "./About";
import AboutMeCard from "./AboutMeCard";
import NavBar from "./NavBar";

const AboutMePage = () => {
    const text = [
        "non ad deserunt pariatur ullamco labore ullamco aute labore ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu commodo labore consectetur ipsum id ex consequat consequat consectetur enim cupidatat adipisicing aute sit consequat anim exercitation sint id ad id anim minim dolore reprehenderit reprehenderit veniam minim adipisicing deserunt laborum nulla reprehenderit nostrud adipisicing elit amet consectetur.",
    ];
    return (
        <div className="layout">
            <NavBar />
            <About title="Hi! 👋🏼" text={text} image={trip} alt="trip alt">
                <AboutMeCard />
            </About>
        </div>
    );
};

export default AboutMePage;
