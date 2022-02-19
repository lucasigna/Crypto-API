import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { giveFormatToNumbers } from './../../helpers/helpers';

export const ListItem = ({name,price,last24,cap,amount,id}) => {

    const {theme} = useContext(ThemeContext)
    const [icon,setIcon] = useState(null)

    console.log(id);
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then( (resp) => resp.json())
    .then( (data) => setIcon(data.image.large) )

    return (
        <>
            <div className="nameAndThumb">
                {icon && <img src={icon} alt=""/>}
                <p className={theme ? 'light' : 'dark'}>{name}</p>
            </div>
            <p className={theme ? 'light' : 'dark'}>{giveFormatToNumbers(price)} U$D</p>
            <p className={last24 >= 0 ? "green" : "red"} >{last24 >= 0 ? `+${last24}`: last24}%</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(cap)} U$D</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(amount)}</p>
        </>
    )
}
