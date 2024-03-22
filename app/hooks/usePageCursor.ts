import { useRef, useState } from "react";
import throttle from "lodash.throttle";

const usePageCursor = () => {
    // update cursor position
    const pointerRef = useRef<HTMLDivElement>(null);
    document.addEventListener("mousemove", (event) => {
        pointerRef.current?.style.setProperty(
            "--positionX",
            event.clientX + "px"
        );
        pointerRef.current?.style.setProperty(
            "--positionY",
            event.clientY + "px"
        );
    });

    // on link hover state
    const [onLink, setOnLink] = useState(false);
    const throttlePeriod = 100;

    const handleHoverOn = throttle((event: MouseEvent) => {
        const target = event.target as Element;
        if (!onLink && target.closest("a") !== null) {
            setOnLink(true);
        }
    }, throttlePeriod);

    const handleHoverOff = throttle((event: MouseEvent) => {
        const target = event.target as Element;
        if (onLink && target.closest("a") !== null) {
            setOnLink(false);
        }
    }, throttlePeriod);

    document.addEventListener("mouseover", (event) => handleHoverOn(event));
    document.addEventListener("mouseout", (event) => handleHoverOff(event));

    return { pointerRef, onLink };
};

export default usePageCursor;
