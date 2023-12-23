import { Dispatch, RefObject, SetStateAction, useRef, useState } from "react";

const useContactTransition = () => {
    const emailRef = useRef<HTMLInputElement>(null);
    const [isFocusedEmail, setFocusedEmail] = useState(false);
    const [hasContentEmail, setHasContentEmail] = useState(false);

    const messageRef = useRef<HTMLTextAreaElement>(null);
    const [isFocusedMessage, setFocusedMessage] = useState(false);
    const [hasContentMessage, setHasContentMessage] = useState(false);

    const handleFocus = (setFocus: Dispatch<SetStateAction<boolean>>) => {
        setFocus(true);
    };

    const handleBlur = (
        setFocus: Dispatch<SetStateAction<boolean>>,
        setContent: Dispatch<SetStateAction<boolean>>,
        ref: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement>
    ) => {
        setFocus(false);
        setContent(!!ref.current?.value.trim());
    };

    return {
        emailRef,
        messageRef,
        isFocusedEmail,
        setFocusedEmail,
        hasContentEmail,
        setHasContentEmail,
        isFocusedMessage,
        setFocusedMessage,
        hasContentMessage,
        setHasContentMessage,
        handleFocus,
        handleBlur,
    };
};

export default useContactTransition;
