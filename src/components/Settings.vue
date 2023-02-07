<template>
    <div class="flex settings">
    <div class="flex header">
        <h2>Settings</h2>
        <button @click="$emit('settings-change', false)">
            <svg width="100%" height="100%" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2.09082" width="29.5699" height="2.95699" transform="rotate(45 2.09082 0)" fill="#333333"/>
            <rect y="20.9092" width="29.5699" height="2.95699" transform="rotate(-45 0 20.9092)" fill="#333333"/>
            </svg>
        </button>

    </div>
    <div class="locations">
        <draggable  v-if="!loading" 
            v-model="countriesList"  
            group="locations" 
            @start="drag = true"  
            @end="dragEnd" 
            item-key="id"
            handle=".handle">
            <template #item="{element}" tag="transition-group">
                <div class="flex location-point" @click="locationPointClick(element)">
                    <button class="handle"> 
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18C3.71667 18 3.47933 17.904 3.288 17.712C3.096 17.5207 3 17.2833 3 17C3 16.7167 3.096 16.4793 3.288 16.288C3.47933 16.096 3.71667 16 4 16H20C20.2833 16 20.5207 16.096 20.712 16.288C20.904 16.4793 21 16.7167 21 17C21 17.2833 20.904 17.5207 20.712 17.712C20.5207 17.904 20.2833 18 20 18H4ZM4 13C3.71667 13 3.47933 12.904 3.288 12.712C3.096 12.5207 3 12.2833 3 12C3 11.7167 3.096 11.479 3.288 11.287C3.47933 11.0957 3.71667 11 4 11H20C20.2833 11 20.5207 11.0957 20.712 11.287C20.904 11.479 21 11.7167 21 12C21 12.2833 20.904 12.5207 20.712 12.712C20.5207 12.904 20.2833 13 20 13H4ZM4 8C3.71667 8 3.47933 7.90433 3.288 7.713C3.096 7.521 3 7.28333 3 7C3 6.71667 3.096 6.479 3.288 6.287C3.47933 6.09567 3.71667 6 4 6H20C20.2833 6 20.5207 6.09567 20.712 6.287C20.904 6.479 21 6.71667 21 7C21 7.28333 20.904 7.521 20.712 7.713C20.5207 7.90433 20.2833 8 20 8H4Z" fill="black"/>
                        </svg>
                    </button>
                    <span>
                        {{element}}
                    </span>
                    <button class="delete" @click.stop="locationPointDelete(element)">
                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.196 20.021 5 19.55 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.021 20.8043 17.55 21 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z" fill="black"/>
                        </svg>
                    </button>
                </div>
            </template>
        </draggable>
        <Loader v-else />
    </div>
    <div class="flex add-location">
        <h2>Add Location</h2>
        <form action="" class="flex" @submit.prevent="">
            <input type="text" v-model="inputCountry" />
            <button @click="addNewCountry(inputCountry); inputCountry = ''" v-if="inputCountry">
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 6C18.7348 6 18.4804 6.10536 18.2929 6.29289C18.1054 6.48043 18 6.73478 18 7V11C18 11.2652 17.8947 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12H7.41002L8.71002 10.71C8.89832 10.5217 9.00411 10.2663 9.00411 10C9.00411 9.7337 8.89832 9.4783 8.71002 9.29C8.52171 9.1017 8.26632 8.99591 8.00002 8.99591C7.73372 8.99591 7.47832 9.1017 7.29002 9.29L4.29002 12.29C4.19898 12.3851 4.12761 12.4972 4.08002 12.62C3.98 12.8635 3.98 13.1365 4.08002 13.38C4.12761 13.5028 4.19898 13.6149 4.29002 13.71L7.29002 16.71C7.38298 16.8037 7.49358 16.8781 7.61544 16.9289C7.7373 16.9797 7.86801 17.0058 8.00002 17.0058C8.13203 17.0058 8.26274 16.9797 8.3846 16.9289C8.50645 16.8781 8.61706 16.8037 8.71002 16.71C8.80375 16.617 8.87814 16.5064 8.92891 16.3846C8.97968 16.2627 9.00582 16.132 9.00582 16C9.00582 15.868 8.97968 15.7373 8.92891 15.6154C8.87814 15.4936 8.80375 15.383 8.71002 15.29L7.41002 14H17C17.7957 14 18.5587 13.6839 19.1213 13.1213C19.6839 12.5587 20 11.7956 20 11V7C20 6.73478 19.8947 6.48043 19.7071 6.29289C19.5196 6.10536 19.2652 6 19 6Z" fill="black"/>
                </svg>
            </button>                    
        </form>
        <div v-if="error.length > 0" class="error">{{ error }}</div>
        
    </div>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue' 
    import draggable from 'vuedraggable'
    import Loader from './Loader.vue'

    export default defineComponent({
        name: 'Settings',
        components: {
            draggable, 
            Loader
        },
        props:
            ['countries', 'error', 'loading'],

        data() {
            return {
                inputCountry: '' as string,
                drag: false,
                countriesList: this.countries as string[]
            }
        },
        methods: {
            setLocalStorage(locations: string[]) {
                localStorage.setItem('weather-widget-locations', JSON.stringify(locations))
            },
            dragEnd () {
                this.drag = false
                this.$emit('setLocation', this.countriesList)
            },
            locationPointClick (element: string) {
                this.$emit('getLocation', element)
                this.$emit('settings-change', false)
            },
            locationPointDelete (element: string) {
                this.$emit('deleteLocation', element)
            },
            addNewCountry(inputCountry: string) {
                this.$emit('getLocation', inputCountry)
            }
        }
    })
</script>

<style lang="scss">

</style>