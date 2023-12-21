import useTransition, { transitionPage } from "../hooks/useTransition";
import Transition from "./Transition";

const TransitionPage = ({ page }: { page: transitionPage }) => {
    const properties = useTransition(page);

    return <Transition {...properties!} />;
};

export default TransitionPage;
