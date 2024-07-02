import React from "react";
import styles from "./GameResult.module.scss";

export default function GameResult({ id, date, gameName, status }) {
    return (
        <div className={styles.root}>
            <div className={styles.gameContainer} key={id}>
                <div>
                    <p className={styles.gameDate}>{date}</p>
                    <p className={styles.gameName}>{gameName}</p>
                </div>
                <p
                    className={styles.gameStatus}
                    style={{ color: status === "win" ? "#43C465cc" : "#F14985cc" }}
                >
                    {status}
                </p>
            </div>
        </div>
    );
}
