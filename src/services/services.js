const URL_BASE = "https://api.coingecko.com/api/v3"

export const getPrices = (setList) => {

    fetch(`${URL_BASE}/coins/markets?vs_currency=usd`)
    .then( (resp) => resp.json())
    .then( (data) => setList(data) )

}

export const getIcons = (id,setIcon) => {

    fetch(`${URL_BASE}/coins/${id}`)
    .then( (resp) => resp.json())
    .then( (data) => setIcon(data.image.large) )

}

export const getCoinsList = (setList) => {

    fetch(`${URL_BASE}/coins/list`)
    .then( (resp) => resp.json())
    .then( (data) => setList(data) )

}

export const getCoinChartData = (coin,days,setData) => {

    let daysFixed;
    switch (days) {
        case '7days':
            daysFixed = 7
            break;
        case '30days':
            daysFixed = 30
            break;
        case '90days':
            daysFixed = 90
            break;
        case '365days':
            daysFixed = 365
            break;
        case '1825days':
            daysFixed = 1825
            break;
        case '3650days':
            daysFixed = 3650
            break;
        default:
            daysFixed = 7
            break;
    }

    fetch(`${URL_BASE}/coins/${coin}/market_chart?vs_currency=usd&days=${daysFixed}`)
    .then( (resp) => resp.json())
    .then( (data) => {
        setData(data.prices.map( (d) => {
            const date = new Date(d[0])
            const dateFormat = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours() < 10 ? '0'+date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()} UTC`
            return {
                time: `${dateFormat}`,
                Precio: d[1].toFixed(2)
            }
        }))
    })

}