import React from 'react';
import styles from  "./MedBlock.module.scss"


export default function MedBlock({ title, description, types, expirationDate, remainder }) {

    return (
        <div className={styles.root}>

            <div className={styles.desc}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

            <div className={styles.info}>
                <p>{types}</p>
                <p>Срок годности до: {expirationDate}</p>
                <p>Осталось: {remainder}</p>

                <div className={styles.alert}></div>
            </div>
            
        </div>

    )
}
