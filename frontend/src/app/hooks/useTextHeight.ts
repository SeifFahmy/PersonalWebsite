import { RefObject, useState } from "react";

const useTextHeight = (ref: RefObject<HTMLTextAreaElement>) => {
    const [text, setText] = useState("");

    const handleChange = () => {
        setText(ref.current?.value || "");
    };

    let newHeight = "45px";

    const messageElement = ref.current;
    if (messageElement) {
        const lineHeight = parseInt(
            getComputedStyle(messageElement).getPropertyValue("line-height")
        );
        const height = messageElement.scrollHeight;
        const numLines = height / lineHeight;
        newHeight = `${Math.max(numLines * lineHeight, 45)}px`;
    }

    console.log(newHeight)

    return { text, newHeight, handleChange };
};

export default useTextHeight;
