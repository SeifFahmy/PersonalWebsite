// "use client";
import AboutMePage from "./components/AboutMePage";
import AwardsPage from "./components/AwardsPage";
import ContactPage from "./components/ContactPage";
import Cursor from "./components/Cursor";
import ExperiencePage from "./components/ExperiencePage";
import NavBar from "./components/NavBar";
import ProjectPage from "./components/ProjectPage";
import TitlePage from "./components/TitlePage";
import TransitionPage from "./components/TransitionPage";

const page = () => {
    return (
        <div className="layout">
            <div style={{ gridColumn: "1 / span 1" }}>
                <NavBar />
            </div>
            <div className="content">
                {/* <Cursor /> */}
                <TitlePage />
                {/* <TransitionPage page="About" /> */}
                <AboutMePage />
                {/* <TransitionPage page="Experience" /> */}
                <ExperiencePage page="Experience1" />
                {/* <TransitionPage page="Projects" /> */}
                <ProjectPage page="Project1" />
                {/* <TransitionPage page="Awards" /> */}
                <AwardsPage />
                {/* <TransitionPage page="Contact" /> */}
                <ContactPage />
                {/* <canvas id="splineCanvas" className="splineCanvas"></canvas> */}
            </div>
        </div>
    );
};

export default page;
