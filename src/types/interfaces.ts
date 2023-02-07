export interface getCountryWeather {
    name: string,
    main: {
        temp: string,
        feels_like: string,
        pressure: number,
        humidity: number
    },
    visibility: string,
    wind: {
        speed: number,
        deg: number
    },
    weather: [{
        icon: string,
        description: string,
        main: string
    }],
    image: string,
}

export interface getCountry {
    name: string,
    lat: number,
    lon: number,
    country: string
}