import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Chart } from './Chart';
import { ChartHeader } from './ChartHeader';
import './ChartsContainer.scss'
import { ChartContext } from './../../context/ChartContext';
import { getCoinChartData } from '../../services/services';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ChartsContainer = () => {

    const {theme} = useContext(ThemeContext)
    const {chartData,changeData,chartCoin,chartTime} = useContext(ChartContext)

    useEffect(() => {
      getCoinChartData(chartCoin, chartTime, changeData)
    },[chartCoin,chartTime])

    return (
        <main className={theme ? 'light' : 'dark'}>
            <div className={theme ? "containerChart light" : "containerChart dark"}>
                <ChartHeader/>
                <div className="chartBox">
                  {chartData.length > 0 
                  ?   
                  <Chart/>
                  :
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px', width: '1000px'}}>
                    <CircularProgress />
                  </Box>
                  }
                </div>
            </div>
        </main>
    )
}
