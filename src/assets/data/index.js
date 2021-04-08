import currency from "./currency.json"
import rates from "./currency_rates.json"

const countries = Object.values(currency).map(i => ({ name: i.name, symbol: i.symbol, code: i.code }))
const find_rate = code => rates.rates[code]

export { countries, find_rate }