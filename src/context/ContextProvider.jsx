import {createContext, useEffect, useState} from "react";

export const MainContext = createContext(null)

function ContextProvider({children}) {
    const [theme, setTheme] = useState("light");
    const [users, setUsers] = useState([])

    useEffect(() => {
        document.body.className = theme
    }, [theme])

    const values = {
        theme,
        setTheme, 
        users, 
        setUsers
    }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider;

