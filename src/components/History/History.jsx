import React from "react";
import GameResult from "../GameResult/GameResult";
import Search from "../Search/Search";

import styles from "./History.module.scss";

export default function History({ setGameCount, setPercentWinsCount }) {
    const [games, setGames] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const [showAll, setShowAll] = React.useState(false);

    const search = searchValue ? `search=${searchValue}` : "";

    const sortedGames = React.useMemo(() => {
        return games.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [games]);

    React.useEffect(() => {
        fetch(`https://66795ef418a459f6394f7682.mockapi.io/games?${search}`)
            .then((response) => response.json())
            .then((arr) => {
                setGames(arr);
                setGameCount(arr.length);
                setPercentWinsCount(
                    (arr.filter((item) => item.status === "win").length / arr.length) *
                    100
                );
            })
            .catch((error) => console.error("Error fetching the games data:", error));
    }, [searchValue]);

    const displayedGames = showAll ? sortedGames : sortedGames.slice(0, 3);

    return (
        <div className={styles.root}>
            <div className={styles.titleGroup}>
                <h2>History</h2>
                <button className={styles.toggleShowAll} onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Hide" : "Show all"}
                </button>
            </div>

            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className={styles.container}>
                {displayedGames.map((obj, i) => (
                    <GameResult key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}
