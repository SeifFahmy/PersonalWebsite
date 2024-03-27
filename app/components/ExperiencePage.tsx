import useExperience, { experiencePage } from "../hooks/useExperience";
import About from "./About";
import ExperienceCard from "./ExperienceCard";
import NavBar from "./NavBar";

const ExperiencePage = ({ page }: { page: experiencePage }) => {
    const { title, text, image, alt, icon, highlight, context } =
        useExperience(page);

    return (
        <About title={title} text={text} image={image} alt={alt}>
            <ExperienceCard
                icon={icon}
                highlight={highlight}
                context={context}
            />
        </About>
    );
};

export default ExperiencePage;