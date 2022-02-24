import React, { useContext, useEffect, useState } from 'react'
import { trendCoins } from '../../helpers/helpers'
import { getCoinsList } from '../../services/services'
import { CustomDropdown } from '../Utilities/CustomDropdown'
import { ChartContext } from './../../context/ChartContext';

export const ChartHeader = () => {

    const [coins,setCoins] = useState([])

    const setCoinsList = (list) => {
        const map = list.map(coin => {
            return {label:coin.symbol.toUpperCase(),value:coin.id}
        })
        const filteredCoins = map.filter(coin => {
            
            for (const trendCoin of trendCoins) {
                
                if(coin.value == trendCoin) return coin

            }
        })
        setCoins(filteredCoins)
    }

    const timeOptions = [
        {
            label: 'Últimos 7 días',
            value: '7days'
        },
        {
            label: 'Último mes',
            value: '30days'
        },
        {
            label: 'Últimos 3 meses',
            value: '90days'
        },
        {
            label: 'Últimos 12 meses',
            value: '365days'
        },
        {
            label: 'Últimos 5 años',
            value: '1825days'
        },
        {
            label: 'Últimos 10 años',
            value: '3650days'
        },
        
    ]

    useEffect( () => {
        getCoinsList(setCoinsList)
    },[])

    const {changeCoin,changeTime} = useContext(ChartContext)

    return (
        <div>
            <CustomDropdown onChange={changeCoin} selected="bitcoin" options={coins}/>
            <CustomDropdown onChange={changeTime} selected="7days" options={timeOptions}/>
        </div>
    )
}
