import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const HeaderList = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <p className={theme ? 'head light' : 'head dark'} >Nombre</p>
            <p className={theme ? 'head light' : 'head dark'} >Precio</p>
            <p className={theme ? 'head light' : 'head dark'} >Últimas 24hs</p>
            <p className={theme ? 'columnNotDisplay head light' : 'columnNotDisplay head dark'} >Capitalización de mercado</p>
            <p className={theme ? 'columnNotDisplay head light' : 'columnNotDisplay head dark'} >Cantidad en circulación</p>
        </>
    )
}
