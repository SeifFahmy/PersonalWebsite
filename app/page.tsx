"use client";
import AboutMePage from "./components/AboutMePage";
import AwardsPage from "./components/AwardsPage";
import ContactPage from "./components/ContactPage";
import Cursor from "./components/Cursor";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            {/* <Cursor /> */}
            <TitlePage />
            {/* <TransitionPage page="About" /> */}
            <AboutMePage />
            {/* <TransitionPage page="Experience" /> */}
            <ExperiencePage page="Experience4" />
            {/* <TransitionPage page="Projects" /> */}
            <ProjectPage page="Project1" />
            {/* <TransitionPage page="Awards" /> */}
            <AwardsPage />
            {/* <TransitionPage page="Contact" /> */}
            <ContactPage />
            {/* <canvas id="splineCanvas" className="splineCanvas"></canvas> */}
        </>
    );
};

export default page;
