import React, {useContext} from 'react'
import {MainContext} from "../context/ContextProvider";

const ModeSwitcher = () => {
    const {theme, setTheme} = useContext(MainContext)

    const changeMode = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            <button onClick={changeMode}>Change Mode</button>
        </>
    )
}

export default ModeSwitcher
