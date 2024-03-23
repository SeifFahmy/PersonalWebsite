"use client";
import usePageCursor from "@/app/hooks/usePageCursor";
import styles from "./Cursor.module.css";
import { CSSProperties } from "react";

interface CustomStyle extends CSSProperties {
    "--positionX": string;
    "--positionY": string;
}

const Cursor = () => {
    const { cursorPosition, onLink } = usePageCursor();

    const style: CustomStyle = {
        "--positionX": cursorPosition.x + "px",
        "--positionY": cursorPosition.y + "px",
    };

    return (
        <div
            className={`${styles.cursor} ${onLink ? styles.cursorHover : ""}`}
            style={style}
        />
        // <div
        //     ref={pointerRef}
        //     className={[styles.cursor, onLink ? styles.cursorHover : ""].join(
        //         " "
        //     )}
        //     onMouseMove={}
        // />
    );
};

export default Cursor;
