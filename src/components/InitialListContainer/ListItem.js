import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { giveFormatToNumbers } from './../../helpers/helpers';

export const ListItem = ({name,price,last24,cap,amount}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            <p className={theme ? 'light' : 'dark'}>{name}</p>
            <p className={theme ? 'light' : 'dark'}>{giveFormatToNumbers(price)} U$D</p>
            <p className={last24 >= 0 ? "green" : "red"} >{last24 >= 0 ? `+${last24}`: last24}%</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(cap)} U$D</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(amount)}</p>
        </>
    )
}
