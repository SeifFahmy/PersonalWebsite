import bird from "@public/images/bird.webp";
import map from "@public/images/map.svg";
import trip from "@public/images/trip.svg";
import HouseModel from "../models/house";
import { StaticImageData } from "next/image";
import TrophyModel from "../models/trophy";
import { ReactNode } from "react";

export type transitionPage =
    | "About"
    | "Experience"
    | "Projects"
    | "Awards"
    | "Contact";

type transitionPageProperties = {
    title: string;
    hero: ReactNode;
    auxiliary1: StaticImageData;
    auxiliary1Alt: string;
    auxiliary2: StaticImageData;
    auxiliary2Alt: string;
};

interface PagePropertiesObject {
    [key: string]: transitionPageProperties;
}

const pageProperties: PagePropertiesObject = {
    About: {
        title: "About Me",
        hero: <HouseModel />,
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Experience: {
        title: "Experience",
        hero: <HouseModel />,
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Projects: {
        title: "Projects",
        hero: <HouseModel />,
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Awards: {
        title: "Awards",
        hero: <HouseModel />,
        auxiliary1: map,
        auxiliary1Alt: "map",
        auxiliary2: trip,
        auxiliary2Alt: "trip",
    },

    Contact: {
        title: "Contact",
        hero: <HouseModel />,
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
