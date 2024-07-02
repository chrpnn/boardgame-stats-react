import React from "react";

import MedBlock from "../components/MedBlock/MedBlock";
import Categories from "../components/Categories/Categories";
import { useOutletContext } from "react-router-dom";

export default function Home({ searchValue }) {
    const [items, setItems] = React.useState([]);
    const [categoryName, setCategoryName] = React.useState("Все");

    const category = categoryName === "Все" ? "" : `types=${categoryName}`;
    const search = searchValue ? `search=${searchValue}` : "";

    React.useEffect(() => {
        fetch(
            `https://66392da24253a866a250a005.mockapi.io/item?${category}&${search}`
        )
            .then((res) => res.json())
            .then((arr) => setItems(arr));
    }, [categoryName, searchValue]);

    return (
        <div className="container">
            <div className="content__categories">
                <Categories
                    value={categoryName}
                    onCnahgeCategory={(id) => setCategoryName(id)}
                />
            </div>
            <div className="content__items">
                {items.map((obj, i) => (
                    <MedBlock key={i} {...obj} />
                ))}
            </div>
        </div>
    );
}
