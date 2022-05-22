import React from "react"
import Button from "./Button";
import HomePage from './HomePage'
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";



const Container = () => {

    const data = useContext(ThemeContext)

    return (
        <div  className="Container" style={{backgroundColor: data.theme === 'light' ? '#fff' : '#222', color:data.theme === 'light' ? 'black' : 'white' }} >
            <Button />
            <HomePage />
            
        </div>
    )
};

export default Container;
