import NavBar from "./components/NavBar";
import Title from "./components/Title";
import Transition from "./components/TransitionPage";
import bird from "@public/bird.webp";
import trip from "@public/trip.svg";
import map from "@public/map.svg";

const page = () => {
    return (
        // <div className="layout">
        //     <NavBar />
        //     <Title />
        // </div>
        <Transition
            hero={bird}
            heroAlt="bird 3D model"
            auxiliary1={map}
            auxiliary1Alt="map aux"
            auxiliary2={trip}
            auxiliary2Alt="trip aux"
        />
    );
};

export default page;
