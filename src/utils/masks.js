export const formatCurrency = (value, decimals = 2, currency = 'R$') => {
    const preValue = !value ? 0 : value
    const number = !parseInt(preValue, 10)
        ? preValue.toFixed(decimals).toString().replace(/\./g, ',')
        : parseInt(preValue, 10)
              .toFixed(decimals)
              .toString()
              .replace(/\./g, ',')

    return `${currency} ${number.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}
