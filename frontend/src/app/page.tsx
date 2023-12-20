import About from "./components/About";
import AboutMeCard from "./components/AboutMeCard";
import NavBar from "./components/NavBar";
import Transition from "./components/TransitionPage";
import bird from "@public/bird.webp";
import map from "@public/map.svg";
import trip from "@public/trip.svg";

const page = () => {
    return (
        <div className="layout">
            <NavBar />
            <About image={trip} alt="trip alt">
                <AboutMeCard />
            </About>
        </div>
        // <Transition
        //     title="About Me"
        //     hero={bird}
        //     heroAlt="bird"
        //     auxiliary1={map}
        //     auxiliary1Alt="map"
        //     auxiliary2={trip}
        //     auxiliary2Alt="trip"
        // />
    );
};

export default page;
