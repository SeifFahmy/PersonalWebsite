import bird from "@public/images/bird.webp";
import map from "@public/images/map.svg";
import trip from "@public/images/trip.svg";

export type transitionPage =
    | "About"
    | "Experience"
    | "Projects"
    | "Awards"
    | "Contact";

const pageProperties = {
    About: {
        title: "About Me",
        hero: bird,
        heroAlt: "bird",
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Experience: {
        title: "Experience",
        hero: bird,
        heroAlt: "bird",
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Projects: {
        title: "Projects",
        hero: bird,
        heroAlt: "bird",
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Awards: {
        title: "Awards",
        hero: bird,
        heroAlt: "bird",
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Contact: {
        title: "Contact",
        hero: bird,
        heroAlt: "bird",
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },
};

const useTransition = (page: transitionPage) => {
    return pageProperties[page];
};

export default useTransition;
