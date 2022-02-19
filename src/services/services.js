const URL_BASE = "https://api.coingecko.com/api/v3"

export const getPrices = (setList) => {

    fetch(`${URL_BASE}/coins/markets?vs_currency=usd`)
    .then( (resp) => resp.json())
    .then( (data) => setList(data) )

}