import React, {useContext} from 'react'
import {MainContext} from "../context/ContextProvider";

const Header = () => {
    const {theme} = useContext(MainContext)

    return (
        <>
            <h1>Current mode = <span style={{color: "red"}}>{theme}</span></h1>
        </>
    )
}

export default Header
