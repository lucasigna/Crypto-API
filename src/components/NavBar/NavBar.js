import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { DarkLightMode } from './DarkLightMode';
import { Menu } from './Menu';
import './NavBar.scss';

export const NavBar = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <header className={theme ? 'light' : 'dark'}>
            <h1 className={theme ? 'light' : 'dark'}>Crypto API</h1>
            <DarkLightMode/>
            <Menu/>
        </header>
    )
}
