import React from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import GameCard from "../GameCard/GameCard";
import FastInfo from "../FastInfo/FastInfo";

import styles from "./Games.module.scss";

export default function Games() {
    const [games, setGames] = React.useState([]);
    const [uniqueGames, setUniqueGames] = React.useState([]);
    const [gameStats, setGameStats] = React.useState([]);
    const [showAll, setShowAll] = React.useState(false);

    const displayedGames = showAll ? uniqueGames : uniqueGames.slice(0, 4);

    React.useEffect(() => {
        const db = getFirestore();

        const fetchGames = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "games"));
                const arr = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setGames(arr);

                const gameCounts = {};
                arr.forEach((game) => {
                    if (!gameCounts[game.gameName]) {
                        gameCounts[game.gameName] = { ...game, count: 0, wins: 0 }; 
                    }
                    gameCounts[game.gameName].count += 1;
                    if (game.status === "win") {
                        gameCounts[game.gameName].wins += 1; 
                    }
                });
                const gameStats = Object.values(gameCounts).map(game => ({
                    ...game,
                    winPercentage: (game.wins / game.count) * 100 
                }));
                setUniqueGames(Object.values(gameCounts));
                setGameStats(gameStats); 
            } catch (error) {
                console.error("Error fetching the games data:", error);
            }
        };
        fetchGames();
    }, []);

    return (
        <div className={styles.root}>
            <div className={styles.titleGroup}>
                <h2>Games</h2>
                <button
                    className={styles.toggleShowAll}
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Hide" : "Show all"}
                </button>
            </div>
            <FastInfo uniqueGames={uniqueGames} gameStats={gameStats} />
            <div className={styles.cards}>
                {displayedGames.map((obj, i) => (
                    <GameCard gameStats={gameStats} key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}
