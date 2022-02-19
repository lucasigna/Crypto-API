import React from 'react'
import { ContentList } from './ContentList'
import { HeaderList } from './HeaderList'
import './InitialListContainer.scss'

export const InitialListContainer = () => {

    

    return (

        <main>
            <div className="containerList">
                <HeaderList/>
                <ContentList/>
            </div>
        </main>

    )
}
