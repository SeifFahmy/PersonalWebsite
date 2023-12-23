import AboutMePage from "./components/AboutMePage";
import AwardsPage from "./components/AwardsPage";
import ContactPage from "./components/ContactPage";
import ExperiencePage from "./components/ExperiencePage";
import ProjectPage from "./components/ProjectPage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            {/* <TitlePage />
            <TransitionPage page="About" />
            <AboutMePage />
            <TransitionPage page="Experience" />
            <ExperiencePage page="Experience1" />
            <TransitionPage page="Projects" />
            <ProjectPage page="Project1" />
            <TransitionPage page="Awards" />
            <AwardsPage />
            <TransitionPage page="Contact" /> */}
            <ContactPage />
        </>
    );
};

export default page;
