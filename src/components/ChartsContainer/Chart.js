import React, { useContext, useEffect, useState } from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
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

    useEffect(()=>{
        const prices = chartData.map( (data) => parseFloat(data.Precio) )
        setMax(Math.max(...prices))
    },[chartData])

    return (
        <AreaChart width={1000} height={400} data={chartData} margin={{ top: 10, right: 30, left: 40, bottom: 10}} >
            <XAxis interval="preserveEnd" tickMargin={20} dataKey="time" />
            <YAxis domain={[0, max]} tickMargin={10} unit="$" dataKey="Precio"/>
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
