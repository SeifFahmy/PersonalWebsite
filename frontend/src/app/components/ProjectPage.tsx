import useProject, { projectPage } from "../hooks/useProject";
import NavBar from "./NavBar";
import AboutProject from "./AboutProject";

const ProjectPage = ({ page }: { page: projectPage }) => {
    const properties = useProject(page);

    return (
        <div className="layout">
            <NavBar />
            <AboutProject {...properties!}>
                <p>project model</p>
            </AboutProject>
        </div>
    );
};

export default ProjectPage;
