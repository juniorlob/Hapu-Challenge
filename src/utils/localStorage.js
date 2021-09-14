export const setLocalStorage = (name, data) =>
    localStorage.setItem(name, JSON.stringify(data))

export const getLocalStorage = (name) => {
    const n = localStorage.getItem(name)
    if (typeof n === 'string') return JSON.parse(n)
    return n
}
