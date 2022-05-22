import React from "react"
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BsLightbulbOffFill } from 'react-icons/bs'
import { MdLightMode, MdNightlight } from 'react-icons/md'

const Button = () => {


    const data = useContext(ThemeContext)
    console.log(data);

    return (
        <div>
            <br />
            <button
                onClick={() => {
                    data.setTheme(data.theme === 'dark' ? 'light' : 'dark')
                }}
            >
                {
                    data.theme === 'dark' ? <MdLightMode style={{color:'white'}}/> : <MdNightlight  />
                }

            </button>
        </div>
    )
};

export default Button;
