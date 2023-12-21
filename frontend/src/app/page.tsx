import AboutExperiencePage from "./components/AboutExperiencePage";
import AboutMePage from "./components/AboutMePage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            <TitlePage />
            <TransitionPage page="About" />
            <AboutMePage />
            <TransitionPage page="Experience" />
            <AboutExperiencePage />
            <TransitionPage page="Projects" />
        </>
    );
};

export default page;
