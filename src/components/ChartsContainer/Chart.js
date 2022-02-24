import React, { useContext, useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import { curveCardinal } from "d3-shape";
import { ChartContext } from './../../context/ChartContext';

/* const data = [
    {
        time: "Page A",
        Precio: 2000,
    },
    {
        time: "Page B",
        Precio: 3000,
    },
    {
        time: "Page C",
        Precio: 2000,
    },
    {
        time: "Page D",
        Precio: 2780,
    },
    {
        time: "Page E",
        Precio: 1890,
    },
    {
        time: "Page F",
        Precio: 2390,
    },
    {
        time: "Page G",
        Precio: 3490,
    }
]; */


const cardinal = curveCardinal.tension(0.2);

export const Chart = () => {
    
    const {chartData} = useContext(ChartContext)

    const [max,setMax] = useState(10000)
    const [width,setWidth] = useState(window.innerWidth*0.8)
    const [height,setHeight] = useState(window.innerWidth/3)
    const [margin,setMargin] = useState({ top: 10, right: 30, left: 40, bottom: 10})
    const [hideY,setHideY] = useState(false)


    useEffect(()=>{
        const prices = chartData.map( (data) => parseFloat(data.Precio) )
        setMax(Math.max(...prices))
        if(window.innerWidth < 900) {
            setMargin({ top: 20, right: 10, left: 10, bottom: 20})
            setHideY(true)
        }
    },[chartData])

    const handleResize = () => {
        setWidth(window.innerWidth*0.8)
        setHeight(width/3)
        if(window.innerWidth < 900) {
            setMargin({ top: 20, right: 10, left: 10, bottom: 20})
            setHideY(true)
        }
        //console.log(width);
    }

    console.log(window.innerWidth);
    if(window.innerWidth < 700) {
        console.log('lol');
    }

    window.addEventListener("resize", handleResize)

    return (
        <AreaChart width={width} height={height} data={chartData} margin={margin} >
            <XAxis interval="preserveEnd" tickMargin={20} dataKey="time" />
            <YAxis hide={hideY} domain={[0, max]} tickMargin={10} unit="$" dataKey="Precio"/>
            <Tooltip />
            <Area
                type="monotone"
                dataKey="Precio"
                stroke="#6096BA"
                fill="#6096BA"
                fillOpacity={0.3}
            />
        </AreaChart>
    )
}
