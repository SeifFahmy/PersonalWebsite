import { useLayoutEffect, useRef, useState } from "react";
import throttle from "lodash.throttle";

const usePageCursor = () => {
    // update cursor position
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event: MouseEvent) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useLayoutEffect(() => {
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // const pointerRef = useRef<HTMLDivElement>(null);
    // document.addEventListener("mousemove", (event) => {
    //     pointerRef.current?.style.setProperty(
    //         "--positionX",
    //         event.clientX + "px"
    //     );
    //     pointerRef.current?.style.setProperty(
    //         "--positionY",
    //         event.clientY + "px"
    //     );
    // });

    // on link hover state
    const [onLink, setOnLink] = useState(false);
    // const throttlePeriod = 100;

    // const handleHoverOn = throttle((event: MouseEvent) => {
    //     const target = event.target as Element;
    //     if (!onLink && target.closest("a") !== null) {
    //         setOnLink(true);
    //     }
    // }, throttlePeriod);

    // const handleHoverOff = throttle((event: MouseEvent) => {
    //     const target = event.target as Element;
    //     if (onLink && target.closest("a") !== null) {
    //         setOnLink(false);
    //     }
    // }, throttlePeriod);

    // document.addEventListener("mouseover", (event) => handleHoverOn(event));
    // document.addEventListener("mouseout", (event) => handleHoverOff(event));

    // return { pointerRef, onLink, handleMouseMove };
    return { cursorPosition, onLink };
};

export default usePageCursor;
