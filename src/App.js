import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

import "./scss/app.scss";

export default function App() {
    const [searchValue, setSearchValue] = React.useState("");
    console.log(searchValue, "app");

    return (
        <div className="main">
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Home searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
    );
}
