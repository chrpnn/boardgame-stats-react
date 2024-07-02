import React from "react";

import MainButton from "../../components/MainButton/MainButton";
import styles from "./Login.module.scss";

import logoImage from "../../assets/Logo.svg";
import googleLogo from "../../assets/Google-logo.svg";
import twitterLogo from "../../assets/Frame.svg";
import facebookLogo from "../../assets/Facebook-logo.svg";
import BackButton from "../../components/BackButton/BackButton";


export default function LogIn() {
    const [rememberMe, setRememberMe] = React.useState(true);
    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
        console.log(!rememberMe);
    };

    return (
        <div className={styles.root}>
            <BackButton />
            <div className={styles.loginContainer}>
                
                <img className={styles.logo} src={logoImage} alt="Logo" />
                <div className={styles.loginGroup}>
                    <h1 className={styles.title}>Log In</h1>
                    <div className={styles.inputGroup}>
                        <input
                            type="email"
                            placeholder="Email"
                            className={styles.input}
                            defaultValue=""
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <label className={styles.checkbox}>
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleRememberMeChange}
                                className={styles.hiddenCheckbox}
                            />
                            <span className={styles.customCheckbox}></span>
                            Remember Me
                        </label>
                        <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                            style={{ color: "#7B61FF" }}
                        >
                            Forgot Password ?
                        </a>
                    </div>
                    <MainButton className={styles.loginButton} to="/home">Log In</MainButton>
                </div>

                <div className={styles.socialButtonsGroup}>
                    <p>Or continue with</p>
                    <div className={styles.socialButtonsSubgroup}>
                        <button className={styles.socialButton}>
                            <img src={googleLogo} alt="Google" />
                        </button>{" "}
                        {/* Замените на правильные пути к иконкам */}
                        <button className={styles.socialButton}>
                            <img src={facebookLogo} alt="Facebook" />
                        </button>
                        <button className={styles.socialButton}>
                            <img src={twitterLogo} alt="Twitter" />
                        </button>
                    </div>
                </div>

                <div className={styles.signUp}>
                    <span>New User? </span>
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                    >
                        Sign Up
                    </a>
                </div>
            </div>
        </div>
    );
}
