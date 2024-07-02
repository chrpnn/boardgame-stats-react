import React, { useState } from "react";
import BackButton from "../../components/BackButton/BackButton";

import styles from "./AddGamePage.module.scss";

export default function AddGamePage() {
    const [gameName, setGameName] = useState("");
    const [date, setDate] = useState("");
    const [status, setStatus] = useState("win");

    const handleAddGame = () => {
        const newGame = {
            gameName,
            date,
            status,
        };

        fetch("https://66795ef418a459f6394f7682.mockapi.io/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGame),
        })
            .then((response) => response.json())
            .then(() => {
                // history.push("/");
            })
            .catch((error) => console.error("Error adding game:", error));
    };

    return (
        <div className={styles.root}>
            <div className={styles.backbutton}>
                <BackButton />
            </div>
            <div className={styles.formGroup}>
            <h2>Add New Result</h2>
            <div className={styles.form}>
                <label className={styles.label}>
                    Game Name:
                    <input className={styles.input}
                        type="text"
                        value={gameName}
                        onChange={(e) => setGameName(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    Date:
                    <input className={styles.input}
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <label className={styles.label}>
                    Status:
                    <select className={styles.input} value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="win">Win</option>
                        <option value="lose">Lose</option>
                    </select>
                </label>
                <button className={styles.button} onClick={handleAddGame}>Add Game</button>
            </div>
            </div>
            
        </div>
    );
}
