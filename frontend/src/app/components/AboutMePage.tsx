import trip from "@public/trip.svg";
import About from "./About";
import AboutMeCard from "./AboutMeCard";
import NavBar from "./NavBar";

const AboutMePage = () => {
    return (
        <div className="layout">
            <NavBar />
            <About
                title="Hi! 👋🏼"
                paragraph1="non ad deserunt pariatur ullamco labore ullamco aute labore
            ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu
            commodo labore consectetur ipsum id ex consequat consequat
            consectetur enim cupidatat adipisicing aute sit consequat
            anim exercitation sint id ad id anim minim dolore
            reprehenderit reprehenderit veniam minim adipisicing
            deserunt laborum nulla reprehenderit nostrud adipisicing
            elit amet consectetur."
                paragraph2="duis commodo aliqua non fugiat anim deserunt adipisicing
            sunt ipsum anim aliquip ea amet veniam enim Lorem mollit
            quis culpa dolore qui ipsum non minim anim consequat laborum
            ullamco quis sit ut cupidatat qui adipisicing exercitation
            Lorem occaecat do cupidatat ipsum aute"
                image={trip}
                alt="trip alt"
            >
                <AboutMeCard />
            </About>
        </div>
    );
};

export default AboutMePage;
