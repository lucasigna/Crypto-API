import React, { useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

export const Menu = () => {

    const {theme} = useContext(ThemeContext)
    const route = useLocation()

    return (
        <nav>
            <ul>
                <NavLink className="navLink" to="/prices"><li id={route.pathname == '/prices' ? "actualTab" : ""} className={ theme ? "light" : "dark"}>Precios</li></NavLink>
                <NavLink className="navLink" to="/charts"><li id={route.pathname == '/charts' ? "actualTab" : ""} className={ theme ? "light" : "dark"}>Gráficos</li></NavLink>
            </ul>
        </nav>
    )
}
