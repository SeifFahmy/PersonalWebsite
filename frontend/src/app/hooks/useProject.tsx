import logo from "@public/logo.svg";
import { ReactNode } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { RiMoneyPoundCircleLine } from "react-icons/ri";

export type projectPage = "Project1" | "Project2" | "Project3";
export type highlight = { icon: ReactNode; text: string };
export type button = { icon: ReactNode; text: string; link: string };

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
    },
};

const useProject = (page: projectPage) => {
    return pageProperties[page];
};

export default useProject;
