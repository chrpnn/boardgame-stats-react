import React from "react";
import styles from "./AddResultModal.module.scss";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function AddResultModal({ active, setActive }) {
    const [gameName, setGameName] = React.useState("");
    const [date, setDate] = React.useState("");
    const [status, setStatus] = React.useState("win");

    const db = getFirestore();

    const handleAddGame = async () => {
        const newGame = {
            gameName,
            date,
            status,
            createdAt: new Date(),
        };
    
        try {
            await addDoc(collection(db, "games"), newGame);
            setActive(false);
            console.log("Document written");
            setGameName("");
            setDate("");
            setStatus("win");
        } catch (error) {
            console.error("Error adding game:", error);
        }
    };

    // старый вариант отправки данных партии (мокАпи)
    // const handleAddGame = () => {
    //     const newGame = {
    //         gameName,
    //         date,
    //         status,
    //     };

    //     fetch("https://66795ef418a459f6394f7682.mockapi.io/games", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newGame),
    //     })
    //         .then((response) => response.json())
    //         .then(() => {
    //             setActive(false);
    //         })
    //         .catch((error) => console.error("Error adding game:", error));
    // };

    return (
        <div
            className={active ? `${styles.root} ${styles.active}` : styles.root}
            onClick={() => setActive(false)}
        >
            <div
                className={active ? `${styles.modal} ${styles.active}` : styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.formGroup}>
                    <h2>Add New Result</h2>
                    <div className={styles.form}>
                        <label className={styles.label}>
                            Game Name:
                            <input
                                className={styles.input}
                                type="text"
                                value={gameName}
                                onChange={(e) => setGameName(e.target.value)}
                            />
                        </label>
                        <label className={styles.label}>
                            Date:
                            <input
                                className={styles.input}
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                        <label className={styles.label}>
                            Status:
                            <select
                                className={styles.input}
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="win">Win</option>
                                <option value="lose">Lose</option>
                            </select>
                        </label>
                        <button
                            className={styles.button}
                            onClick={() => {
                                handleAddGame();
                                
                            }}
                        >
                            Add Game
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
