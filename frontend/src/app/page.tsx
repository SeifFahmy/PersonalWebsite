import AboutExperiencePage from "./components/AboutExperiencePage";
import AboutMePage from "./components/AboutMePage";
import AboutProject from "./components/AboutProject";
import ProjectPage from "./components/ProjectPage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            <ProjectPage page="Project1" />
            {/* <TitlePage />
            <TransitionPage page="About" />
            <AboutMePage />
            <TransitionPage page="Experience" />
            <AboutExperiencePage />
            <TransitionPage page="Projects" /> */}
        </>
    );
};

export default page;
