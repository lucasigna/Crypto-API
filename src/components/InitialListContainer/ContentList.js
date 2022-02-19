import React from 'react'
import { ListItem } from './ListItem'

export const ContentList = () => {
    return (
        <>
            { Array(15).fill(<ListItem/>)}
        </>
    )
}
