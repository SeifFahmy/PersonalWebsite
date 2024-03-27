import useProject, { projectPage } from "../hooks/useProject";
import NavBar from "./NavBar";
import AboutProject from "./AboutProject";
import ProjectModel from "./ProjectModel";

const ProjectPage = ({ page }: { page: projectPage }) => {
    const properties = useProject(page);

    return (
        <AboutProject {...properties!}>
            <ProjectModel model={properties.model} />
        </AboutProject>
    );
};

export default ProjectPage;
