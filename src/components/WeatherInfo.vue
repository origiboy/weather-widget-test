<template>
    <div class="flex temp">
                <img :src = dataWeather.image alt="">
                <span>{{ temperatureFormatted(dataWeather.main.temp) }}°C</span>
            </div>
            <div class="flex desc">
                Feels like {{ temperatureFormatted(dataWeather.main.feels_like) }}°C. {{ dataWeather.weather[0].main }}, {{ dataWeather.weather[0].description }}.
            </div>
            <div class="flex info-wind-pressure">
                <div class="flex wind-info">
                    <button class="wind-direction">
                        <svg width="100%" height="100%" viewBox="0 0 426 425" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.978617 0.868826L425.087 212.846H212.955V424.978L0.978617 0.868826Z" fill="black"/>
                        </svg>
                    </button>
                    <span class="wind-speed">{{ dataWeather.wind.speed }} m/s</span>
                    <span>{{ dataWeather.wind.deg }} deg</span>
                </div>
                <div class="flex pressure-info">
                        <button class="pressure">
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 900 900"><path d="m224.7 140.8-27.9.2.5 54.3.4 54.2 3.1 14.7c1.7 8 6.5 25.4 10.6 38.5 9.3 29.5 11.2 37.1 12.7 50.2 1.4 13 .8 20.5-2.6 30.1-3.4 9.4-6.9 15.8-21.8 39.5-14.6 23-22.4 38.9-26.9 54.3-3.3 11.5-3.3 12-3.3 31.7.1 27.2 1.5 34.5 15 77 3.5 11 7.3 23.8 8.4 28.5 1.7 7.5 4.1 25.5 4.1 31.1 0 1.8-1.5 1.9-42.2 1.9h-42.3l56.3 56.2 56.2 56.3 56.2-56.3 56.3-56.2h-84.2l-.6-11.8c-1.2-21.2-4.4-35.4-16.2-72.1-8.7-27.1-10.7-37.2-10.9-53.6-.1-11.1.2-14 2.2-19.9 3.4-10.2 8.2-19 21.5-40.1 24.7-39 31.6-57.5 31.7-84.9 0-22.7-3.2-38.9-15.1-76.7-12.4-39.4-12.1-37-12.8-96.4l-.6-51-27.8.3zM716.8 140.8l-69.8.2v56h141v-27.9c0-15.4-.3-28.1-.7-28.3-.5-.2-32.2-.2-70.5 0zM450 188.9c0 63 1.2 71.9 15 115.1 9.9 31 13 45.3 13 60 0 15-4.1 24.6-23.4 55.5-25.7 41.1-32.6 59.7-32.6 88.1 0 22.4 3.7 41.2 14.5 74.4 9.3 28.5 13.5 47.5 13.5 61.7v3.3h-84.5l56.3 56.2 56.2 56.3 56.2-56.3 56.3-56.2h-84.2l-.6-12.3c-1.1-21.3-4-34.4-16-71.7-8.5-26.5-10.9-38.1-11.1-53.5-.2-18.8 2.9-26.7 22.9-58.6 16.2-25.8 22.5-37.7 26.9-50.9 4.5-13.6 5.6-20.6 5.6-36.5 0-22.6-3-37.7-15-75.5-12.4-39.4-12.2-38-12.7-96.8l-.5-50.2H450v47.9zM703 309.5V338l42.3-.2 42.2-.3v-56l-42.2-.3-42.3-.2v28.5zM647 450v28h141v-56H647v28zM703 590.5V619h85l-.2-28.3-.3-28.2-42.2-.3-42.3-.2v28.5zM647 731.2v28.3l70.5-.3 70.5-.2v-56H647v28.2z"/></svg>
                        </button>
                        {{ dataWeather.main.pressure }} hPa
                </div>                
            </div>
            <div class="flex info-extra">
                <span>Humidity: {{ dataWeather.main.humidity }} %</span>
                <span>Visibility: {{ dataWeather.visibility }} m</span>
            </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue' 

    export default defineComponent({
        name: 'WeatherInfo',
        props: ['dataWeather'],
        methods: {
            temperatureFormatted(t: string) :string {
                return Number(t).toFixed(1)
            }
        }
    })
    
    
</script>
