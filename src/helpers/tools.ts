export function setLocalStorage(key: string, locations: string[]) {
    localStorage.setItem(key, JSON.stringify(locations))
}

export function getLocalStorage(key: string) :string[] {
    const data = localStorage.getItem(key)
    if (data !== null) {
        return JSON.parse(data)
    } else {
        return []
    }
}
