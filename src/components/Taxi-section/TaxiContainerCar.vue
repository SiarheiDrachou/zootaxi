<template>
    <div class="taxi-container-2">
        <div class="taxi-container-2-container">
            <p class="taxi-container-2-container__text" @click="viewDescrCar()">
                {{ textTaxi.lightVan }}

                <img class="bi" src="https://zootaxi.by/images/arrow-down.svg" alt="" :class="{ rotate: viewCar }">
            </p>

            <hr  v-show="viewCar" />

            <ul v-show="viewCar" class="taxi-container-2-container__list">
                <li class="taxi-container-2-container__list__item">{{ textTaxi.li1 }}</li>
                <li class="taxi-container-2-container__list__item">{{ textTaxi.li2 }}</li>
                <li class="taxi-container-2-container__list__item">{{ textTaxi.li3 }}</li>
                <li class="taxi-container-2-container__list__item">{{ textTaxi.li4 }}</li>
                <li class="taxi-container-2-container__list__item">{{ textTaxi.li5 }}</li>
            </ul>
        </div>

        <Cost 
            :header="textTaxi.cost[0].header" 
            :distance="textTaxi.cost[0].distance" 
            :minsk="textTaxi.cost[0].minsk" 
            :costKm="textTaxi.cost[0].costKm"
            :cost="textTaxi.cost[0].cost"
            :everyCost="textTaxi.cost[0].everyCost"
        />

        <p class="taxi-container-2__text taxi-container-2__text--none">{{ textTaxi.cost088 }}</p>    
        
        <p class="taxi-container-2__text taxi-container-2__text--none">{{ textTaxi.cost19 }}</p>
    </div>
</template>

<script>
    export default {
        props: ['textTaxi'],
        data() {
            return {
                viewCar: false,
            }
        },
        components: {
            Cost: () => import(/* webpackChunkName: "Taxi" */ "../Cost/Cost"),
        },
        methods: {
            viewDescrCar() {
                this.viewCar = !this.viewCar;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .bi {
        transition-duration: 1s;
        position: absolute;
        top: 10%;
        right: -15px;

        @media(max-width: 796px) {
            top: 30%;
        }
    }

    .rotate {
        transform: rotate(180deg);
        transition-duration: 1s;
    }
</style>