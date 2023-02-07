import axios from 'axios'

const API_KEY = '53ddc94f816f61f021206118717f1c82' as string

export async function apiGetWeather(lat: number, lon: number): Promise<any> {
    return axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`, {
        method: 'GET'
    })
}

export async function apiGetLocation(query: string): Promise<any> {
    return axios(`https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=${API_KEY}`, {
        method: 'GET'
    })
}

export async function apiGetCurrentLocation(latitude: number, longitude: number): Promise<any> {
    return axios(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY} `, {
        method: 'GET'
    })
}