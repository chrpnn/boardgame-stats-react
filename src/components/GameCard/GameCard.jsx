import React from "react";

import styles from "./GameCard.module.scss";

export default function GameCard({ id, date, gameName, status, count }) {
    return (
        <div className={styles.root} key={id}>
            <img src="https://page-images.websim.ai/Carcassonne_1024x1024xHDQ9l7SLW9TYfKZJgxb004f20d958db.jpg" alt="" />
            <div className={styles.description}>
                <h3>{gameName ? gameName : "Untitled"}</h3>
                <p>Total games: {count}</p>
                <p>WR: 50%</p>
            </div>
        </div>
    );
}