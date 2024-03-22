import { RefObject, useState } from "react";

const useTextHeight = (ref: RefObject<HTMLTextAreaElement>) => {
    const [text, setText] = useState("");

    // to trigger refresh
    const handleChange = () => {
        setText(ref.current?.value || "");
    };

    let newHeight = "45px";

    const messageElement = ref.current;
    if (messageElement && messageElement.value != "") {
        const height = messageElement.scrollHeight;
        newHeight = `${Math.max(height, 45)}px`;
    }

    return { newHeight, handleChange };
};

export default useTextHeight;
