import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { getPrices } from '../../services/services'
import { ContentList } from './ContentList'
import { HeaderList } from './HeaderList'
import './InitialListContainer.scss'

export const InitialListContainer = () => {

    const {theme} = useContext(ThemeContext)
    const [list,setList] = useState([])

    
    useEffect(() => {
        
        setInterval( () => {

            getPrices(setList)

        }, 10000)

    }, [])
    

    return (

        <main className={theme ? 'light' : 'dark'}>
            <div className={theme ? "containerList light" : "containerList dark"}>
                <HeaderList/>
                <ContentList list={list}/>
            </div>
        </main>

    )
}
