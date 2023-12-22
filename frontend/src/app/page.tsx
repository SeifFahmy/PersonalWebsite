import AboutMePage from "./components/AboutMePage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            <TitlePage />
            <TransitionPage page="About" />
            <AboutMePage />
            <TransitionPage page="Experience" />
            <ExperiencePage page="Experience1" />
            <TransitionPage page="Projects" />
            <ProjectPage page="Project1" />
            <TransitionPage page="Awards" />
        </>
    );
};

export default page;
