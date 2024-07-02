import React from "react";

import styles from "./FastInfo.module.scss";

import PopLogo from "../../assets/clipboard-heart-svgrepo-com.svg";
import SmileLogo from "../../assets/smile-circle-svgrepo-com.svg";
import SadLogo from "../../assets/sad-circle-svgrepo-com.svg";

export default function FastInfo({ uniqueGames, gameStatusesMap }) {
    console.log(uniqueGames);
    console.log(gameStatusesMap);

    const findMaxObject = (arr) => {
        let maxObject = null;
        let maxCount = 0;
        arr.forEach((obj) => {
            if (obj.count > maxCount) {
                maxCount = obj.count;
                maxObject = obj;
            }
        });
        console.log("Максимальное значение count:", maxCount);
        console.log("Объект с максимальным значением count:", maxObject);
        return { maxCount, maxObject };
    };
    
    const { maxCount, maxObject } = findMaxObject(uniqueGames);

   //пока аопрос с передачей объекта не реализован. наверное нужно передавать все одним обеъктом, а не новым

    return (
        <div className={styles.root}>
            <div className={styles.infoBlock}>
                <img src={PopLogo} alt="Popular" />
                <p className={styles.title}>{maxObject && maxObject.gameName ? maxObject.gameName : "Untitled"}</p>
                <p>Партий всего: {maxCount}</p>

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
