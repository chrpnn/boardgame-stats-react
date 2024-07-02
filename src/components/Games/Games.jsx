import React from "react";
import GameCard from "../GameCard/GameCard";
import FastInfo from "../FastInfo/FastInfo";

import styles from "./Games.module.scss";

export default function Games() {
    const [games, setGames] = React.useState([]);
    const [uniqueGames, setUniqueGames] = React.useState([]);
    const [gameStatusesMap, setGameStatusesMap] = React.useState({}); 

    const [showAll, setShowAll] = React.useState(false);

    const displayedGames = showAll ? uniqueGames : uniqueGames.slice(0, 4);

    React.useEffect(() => {
        fetch("https://66795ef418a459f6394f7682.mockapi.io/games")
            .then((response) => response.json())
            .then((arr) => {
                console.log(arr);
                setGames(arr);
                
                const gameStatusesMap = {};
                arr.forEach((game) => {
                    const { gameName, status } = game;
                    if (!gameStatusesMap[gameName]) {
                        gameStatusesMap[gameName] = [];
                    }
                    gameStatusesMap[gameName].push(status);
                });
                console.log("объект с историей результатов:", gameStatusesMap);
                setGameStatusesMap(gameStatusesMap);

                const gameCounts = {};
                arr.forEach((game) => {
                    if (!gameCounts[game.gameName]) {
                        gameCounts[game.gameName] = { ...game, count: 0 };
                    }
                    gameCounts[game.gameName].count += 1;
                });
                setUniqueGames(Object.values(gameCounts));
                
            })
            .catch((error) => console.error("Error fetching the games data:", error));
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
            <FastInfo uniqueGames={uniqueGames} gameStatusesMap={gameStatusesMap}/>
            <div className={styles.cards}>
                {displayedGames.map((obj, i) => (
                    <GameCard key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}
