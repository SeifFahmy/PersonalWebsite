"use client";
import useContactTransition from "@/app/hooks/useContactTransition";
import styles from "./Contact.module.css";
import useTextHeight from "@/app/hooks/useTextHeight";
import Link from "next/link";

const Contact = () => {
    // used to manage field label transition as user clicks on field
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

    // used to update textarea element's height as user types
    const { newHeight, handleChange } = useTextHeight(messageRef);

    return (
        <div className={styles.container}>
            {/* Header */}
            <h3>Get in touch!</h3>
            <p>
                If you&apos;d like to know more about the work I&apos;ve done or
                just want to get in touch, feel free to email me by filling in
                the form below or message me on{" "}
                <Link
                    href="https://www.linkedin.com/in/seif-fahmy/"
                    target="_blank"
                    aria-label="Personal LinkedIn Profile"
                >
                    LinkedIn
                </Link>
                .
            </p>

            {/* Form */}
            <form className={styles.form}>
                {/* Email field */}
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

                {/* Message field */}
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
                        onInput={handleChange}
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

                {/* Form button */}
                <Link className={styles.button} href="#" target="_blank">
                    Send Message
                </Link>
            </form>
        </div>
    );
};

export default Contact;
