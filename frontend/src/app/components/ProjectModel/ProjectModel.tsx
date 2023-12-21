import Image from "next/image";
import styles from "./ProjectModel.module.css";
import { projectModel, projectPage } from "@/app/hooks/useProject";

const ProjectModel = ({model}: projectModel) => {
    return (
        <div className={styles.container}>
            <Image className={styles.model} src={model} alt="alt" />
        </div>
    );
};

export default ProjectModel;
