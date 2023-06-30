import React, { useState } from "react";
import styled from 'styled-components';
import { LoginForm } from '@/components/login/account-box/loginForm';
import { SignupForm } from '@/components/login/account-box/signupForm';
import { motion } from "framer-motion";
import { AccountContext } from "@/components/login/account-box/accountContext";
import styles from '@/styles/login.module.scss'

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 2550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(2deg);
  top: -290px;
  left: -70px;
  background: #354F52;
`;

const backdropVariants = {
    expanded: {
        width: "200%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(5deg)",
    },
    collapsed: {
        width: "160%",
        height: "460px",
        borderRadius: "50%",
        transform: "rotate(5deg)",
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2,
    stiffness: 30,
};

export default function AccountBox() {
    const [isExpanded, setExpanded] = useState(false);
    const [active, setActive] = useState("signin");
    const [initialRenderComplete, setInitialRenderComplete] = useState(false);

    React.useEffect(() => {
        setInitialRenderComplete(true);
    }, []);

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
    };

    const contextValue = { switchToSignup, switchToSignin };

    if (!initialRenderComplete) {
        return null;
    } else {
        return (
            <div className={styles.appContainer}>
                <AccountContext.Provider value={contextValue}>
                    <div className={styles.boxContainer}>
                        <div className={styles.topContainer}>
                            <BackDrop
                                initial={false}
                                animate={isExpanded ? "expanded" : "collapsed"}
                                variants={backdropVariants}
                                transition={expandingTransition}
                            />
                            {active === "signin" && (
                                <div className={styles.headerContainer}>
                                    <h2 className={styles.headerText}>ورود به حساب کاربری</h2>
                                    {/* <h2 className={styles.headerText}>Back</h2> */}
                                    {/* <h5 className={styles.smallText}>Please sign-in to continue!</h5> */}
                                </div>
                            )}
                            {active === "signup" && (
                                <div className={styles.headerContainer}>
                                    <h2 className={styles.headerText}>ثبت نام</h2>
                                    {/* <h2 className={styles.headerText}>Account</h2> */}
                                    {/* <h5 className={styles.smallText}>Please sign-up to continue!</h5> */}
                                </div>
                            )}
                        </div>
                        <div className={styles.innerContainer}>
                            {active === "signin" && <LoginForm />}
                            {active === "signup" && <SignupForm />}
                        </div>
                    </div>
                </AccountContext.Provider>
            </div>
        );
    }
}