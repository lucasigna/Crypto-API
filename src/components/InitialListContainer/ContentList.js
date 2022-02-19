import React from 'react'
import { ListItem } from './ListItem'

export const ContentList = ({list}) => {
    return (
        <>
            { list.map((item) => <ListItem name={item.name} price={item.current_price} last24={item.price_change_percentage_24h} cap={item.market_cap} amount={item.circulating_supply} />)}
        </>
    )
}
