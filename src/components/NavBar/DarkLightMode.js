import React, { useContext } from 'react'
import solNegro from '../../assets/sol_negro.png';
import lunaNegra from '../../assets/luna_negra.png';
import solBlanco from '../../assets/sol_blanco.png';
import lunaBlanca from '../../assets/luna_blanca.png';
import { ThemeContext } from '../../context/ThemeContext';

export const DarkLightMode = () => {

    const {theme,handleTheme} = useContext(ThemeContext)

    return (
        <div className="darkLightMode">
            <img src={theme ? solNegro : solBlanco} alt="Sol - Modo diurno"/>
            <label className="switch">
                <input type="checkbox" onChange={handleTheme}/>
                <span className={theme ? 'sliderMode light' : 'sliderMode dark'}></span>
            </label>
            <img src={theme ? lunaNegra : lunaBlanca} alt="Luna - Modo nocturno"/>
        </div>
    )
}
