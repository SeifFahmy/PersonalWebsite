"use client";
import usePageCursor from "@/app/hooks/usePageCursor";
import styles from "./Cursor.module.css";

const Cursor = () => {
    const { pointerRef, onLink } = usePageCursor();

    return (
        <div
            ref={pointerRef}
            className={[styles.cursor, onLink ? styles.cursorHover : ""].join(
                " "
            )}
        />
    );
};

export default Cursor;
