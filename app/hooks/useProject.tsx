import bird from "@public/images/bird.webp";
import logo from "@public/images/logo.svg";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

export type projectPage = "Project1" | "Project2" | "Project3";
export type highlight = { icon: ReactNode; text: string };
export type button = { icon: ReactNode; text: string; link: string };
export type projectModel = { model: StaticImageData };

const pageProperties = {
    Project1: {
        title: "Next.js",
        text: [
            "I am the creator of Next.js, a powerful React framework. I played a pivotal role in envisioning and developing Next.js to simplify React application building. By introducing features like automatic code splitting, server-side rendering, and an intuitive API, Next.js streamlines development and enhances performance.",
        ],
        highlights: [
            { icon: <RiMoneyPoundCircleLine />, text: "explanatory text" },
            { icon: <RiMoneyPoundCircleLine />, text: "explanatory text" },
            { icon: <RiMoneyPoundCircleLine />, text: "explanatory text" },
        ],
        buttons: [
            {
                icon: <RiMoneyPoundCircleLine />,
                text: "visit project-name",
                link: "#",
            },
            {
                icon: <AiOutlineGithub />,
                text: "GitHub Repo",
                link: "https://github.com/SeifFahmy",
            },
        ],
        model: bird,
    },

    Project2: {
        title: "Project2",
        text: ["This is the second project"],
        highlights: [{ icon: logo, text: "explanatory text" }],
        buttons: [
            {
                icon: <RiMoneyPoundCircleLine />,
                text: "visit project-name",
                link: "#",
            },
            {
                icon: <AiOutlineGithub />,
                text: "GitHub Repo",
                link: "https://github.com/SeifFahmy",
            },
        ],
        model: bird,
    },

    Project3: {
        title: "Project3",
        text: ["This is the third project"],
        highlights: [{ icon: logo, text: "explanatory text" }],
        buttons: [
            {
                icon: <RiMoneyPoundCircleLine />,
                text: "visit project-name",
                link: "#",
            },
            {
                icon: <AiOutlineGithub />,
                text: "GitHub Repo",
                link: "https://github.com/SeifFahmy",
            },
        ],
        model: bird,
    },
};

const useProject = (page: projectPage) => {
    return pageProperties[page];
};

export default useProject;
