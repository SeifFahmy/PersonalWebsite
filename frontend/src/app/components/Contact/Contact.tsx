"use client";
import useContactTransition from "@/app/hooks/useContactTransition";
import styles from "./Contact.module.css";
import useTextHeight from "@/app/hooks/useTextHeight";
import Link from "next/link";

const Contact = () => {
    // used to manage field label transition
    const {
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
    } = useContactTransition();

    // used to update textarea height as user types
    const {
        text: message,
        newHeight,
        handleChange,
    } = useTextHeight(messageRef);

    return (
        <div className={styles.container}>
            <h3>Get in touch!</h3>
            <p>
                If you'd like to know more about the work I've done or just want
                to get in touch, feel free to email me by filling in the form
                below.
            </p>
            <form className={styles.form}>
                <div className={styles.field}>
                    <label
                        className={[
                            styles.fieldLabel,
                            isFocusedEmail || hasContentEmail
                                ? styles.focused
                                : "",
                        ].join(" ")}
                        htmlFor="email"
                    >
                        Your Email
                    </label>
                    <input
                        ref={emailRef}
                        id="email"
                        type="email"
                        onFocus={() => handleFocus(setFocusedEmail)}
                        onBlur={() =>
                            handleBlur(
                                setFocusedEmail,
                                setHasContentEmail,
                                emailRef
                            )
                        }
                    />
                    <div className={styles.divider} />
                </div>
                <div className={styles.field}>
                    <label
                        className={[
                            styles.fieldLabel,
                            isFocusedMessage || hasContentMessage
                                ? styles.focused
                                : "",
                        ].join(" ")}
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        ref={messageRef}
                        id="message"
                        value={message}
                        onChange={handleChange}
                        onFocus={() => handleFocus(setFocusedMessage)}
                        onBlur={() =>
                            handleBlur(
                                setFocusedMessage,
                                setHasContentMessage,
                                messageRef
                            )
                        }
                        style={{ height: newHeight }}
                    />
                    <div className={styles.divider} />
                </div>
                <Link className={styles.button} href="#" target="_blank">
                    Send
                </Link>
            </form>
        </div>
    );
};

export default Contact;
