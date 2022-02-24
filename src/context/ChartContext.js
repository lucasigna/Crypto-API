import React, { createContext, useState, useEffect } from 'react'

export const ChartContext = createContext()

export const ChartProvider = ({children}) => {

    // Estado de data
    const [chartData, setChartData] = useState([])
    const [chartCoin, setChartCoin] = useState("bitcoin")
    const [chartTime, setChartTime] = useState("7days") // En días

    //Función para cambiar la data
    const changeData = (data) => {
        setChartData(data)
    }

    const changeTime = (time) => {
        setChartTime(time)
    }

    const changeCoin = (coin) => {
        setChartCoin(coin)
    }
    

    return (
        <ChartContext.Provider value={{chartData,changeData,chartCoin,changeCoin,chartTime,changeTime}}>
            {children}
        </ChartContext.Provider>
    )

}