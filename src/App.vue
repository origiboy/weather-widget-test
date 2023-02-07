<template>
    <WeatherWidget />
</template>

<script lang="ts">
    import './style/main.scss'
    import WeatherWidget from './components/WeatherWidget.vue'
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'App',
        components: {
            WeatherWidget
        }
    }); 
</script>