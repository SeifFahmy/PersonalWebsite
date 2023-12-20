import bird from "@public/bird.webp";
import map from "@public/map.svg";
import trip from "@public/trip.svg";
import Transition from "./Transition";

const TransitionPage = () => {
    return (
        <Transition
            title="About Me"
            hero={bird}
            heroAlt="bird"
            auxiliary1={map}
            auxiliary1Alt="map"
            auxiliary2={trip}
            auxiliary2Alt="trip"
        />
    );
};

export default TransitionPage;
