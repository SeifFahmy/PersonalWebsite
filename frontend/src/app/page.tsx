import About from "./components/About";
import AboutMeCard from "./components/AboutMeCard";
import NavBar from "./components/NavBar";
import trip from "@public/trip.svg";

const page = () => {
    return (
        <div className="layout">
            <NavBar />
            <About image={trip} alt="trip alt">
                <AboutMeCard />
            </About>
        </div>
    );
};

export default page;
