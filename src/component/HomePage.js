import React from "react"
import logo from '../logo.svg'
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";


const HomePage = () => {

    const data = useContext(ThemeContext)

    return (
        <div className="HomePage">
            <h1> {data.theme} Mode </h1>
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <p>Hello  React ! </p>

            </header>
        </div>
    )
};

export default HomePage;
