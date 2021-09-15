export const setLocalStorage = (name: string, data: unknown): void =>
    localStorage.setItem(name, JSON.stringify(data))

export const getLocalStorage = (name: string): unknown => {
    const n = localStorage.getItem(name)
    if (typeof n === 'string') return JSON.parse(n)
    return n
}
