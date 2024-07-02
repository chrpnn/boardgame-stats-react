import React from "react";
import styles from "./Categories.module.scss";

export default function Categories({ onCnahgeCategory }) {
    const categories = [
        "Все",
        "Капсулы",
        "Таблетки",
        "Капли",
        "Гель",
        "Порошок",
        "Раствор",
        "Спрей",
        "Мазь",
    ];

    return (
        <div className={styles.root}>
            {categories.map((categoryName) => (
                <li key={categoryName} onClick={() => onCnahgeCategory(categoryName)}>
                    {categoryName}
                </li>
            ))}
        </div>
    );
}
