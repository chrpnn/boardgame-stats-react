import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainButton.module.scss";

export default function MainButton({ to, children }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(to);
    };

    return (
        <button className={styles.root} onClick={handleClick}>
            {children}
        </button>
    );
}
