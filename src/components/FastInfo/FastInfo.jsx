import React from "react";

import styles from "./FastInfo.module.scss";

import PopLogo from "../../assets/clipboard-heart-svgrepo-com.svg";
import SmileLogo from "../../assets/smile-circle-svgrepo-com.svg";
import SadLogo from "../../assets/sad-circle-svgrepo-com.svg";

export default function FastInfo() {
    return (
        <div className={styles.root}>
            <div className={styles.infoBlock}>
                <img src={PopLogo} alt="Popular" />
                <p className={styles.title}>Carcassonne</p>
                <p>Партий всего: 50</p>
            </div>
            <div className={styles.infoBlock}>
                <img src={SmileLogo} alt="Smile" />
                <p className={styles.title}>Carcassonne</p>
                <p>Побед: 10.5 %</p>
            </div>
            <div className={styles.infoBlock}>
                <img src={SadLogo} alt="Sad" />
                <p className={styles.title}>Carcassonne</p>
                <p>Побед: 2.5 %</p>
            </div>
        </div>
    );
}
