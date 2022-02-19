import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const date = new Date()
    const initialTheme = date.getHours() > 18 ? false : true

    // Estado de theme
    const [theme, setTheme] = useState(initialTheme);

    //Función para cambiar de theme
    const handleTheme = () => {
        setTheme(!theme);
    };

    useEffect( () => {

    }, [theme])

    return (
        <ThemeContext.Provider value={{theme,handleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}