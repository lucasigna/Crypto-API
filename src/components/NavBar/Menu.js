import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'

export const Menu = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <nav>
            <ul>
                <NavLink className="navLink" to="/prices"><li className={ theme ? "light" : "dark"}>Precios</li></NavLink>
                <NavLink className="navLink" to="/charts"><li className={ theme ? "light" : "dark"}>Gráficos</li></NavLink>
            </ul>
        </nav>
    )
}
