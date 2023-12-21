import AboutExperiencePage from "./components/AboutExperiencePage";
import AboutMePage from "./components/AboutMePage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <>
            <TitlePage />
            <TransitionPage />
            <AboutMePage />
            <TransitionPage />
            <AboutExperiencePage />
            <TransitionPage />
        </>
    );
};

export default page;
