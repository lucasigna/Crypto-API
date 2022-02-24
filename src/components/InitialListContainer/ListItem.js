import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { getIcons } from '../../services/services';
import { giveFormatToNumbers } from './../../helpers/helpers';
import Skeleton from '@mui/material/Skeleton';

export const ListItem = ({name,price,last24,cap,amount,id}) => {

    const {theme} = useContext(ThemeContext)
    const [icon,setIcon] = useState(null)

    useEffect( () => {

        setTimeout( () => {
            getIcons(id,setIcon)

        },2000)

    },[])

    return (
        <>
            <div className="nameAndThumb">
                {icon ? <img src={icon} alt=""/> : <Skeleton variant="circular" width={25} height={25} className="skeletonIcon"/>}
                <p className={theme ? 'light' : 'dark'}>{name}</p>
            </div>
            <p className={theme ? 'light' : 'dark'}>{giveFormatToNumbers(price)} U$D</p>
            <p className={last24 >= 0 ? "green" : "red"} >{last24 >= 0 ? `+${last24}`: last24}%</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(cap)} U$D</p>
            <p className={theme ? 'columnNotDisplay light' : 'columnNotDisplay dark'}>{giveFormatToNumbers(amount)}</p>
        </>
    )
}
