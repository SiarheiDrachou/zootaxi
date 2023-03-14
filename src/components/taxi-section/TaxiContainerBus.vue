<template>
    <div class="taxi-container-3">
        <div class="taxi-container-3-container">
            <p class="taxi-container-3-container__text" @click="viewDescrBus()">
                {{ textTaxi.maxiVan }}

                <img class="bi" src="https://zootaxi.by/images/arrow-down.svg" alt="" :class="{ rotate: viewBus }">
            </p>

            <hr  v-show="viewBus" />

            <ul v-show="viewBus" transition="slide" class="taxi-container-3-container__list">
                <li class="taxi-container-3-container__list__item">{{ textTaxi.li6 }}</li>
                <li class="taxi-container-3-container__list__item">{{ textTaxi.li7 }}</li>
                <li class="taxi-container-3-container__list__item">{{ textTaxi.li8 }}</li>
                <li class="taxi-container-3-container__list__item">{{ textTaxi.li9 }}</li>
                <li class="taxi-container-3-container__list__item">{{ textTaxi.li10 }}</li>
            </ul>
        </div>

        <Cost 
            :header="textTaxi.cost[1].header" 
            :distance="textTaxi.cost[1].distance" 
            :minsk="textTaxi.cost[1].minsk" 
            :costKm="textTaxi.cost[1].costKm"
            :cost="textTaxi.cost[1].cost"
            :everyCost="textTaxi.cost[1].everyCost"
        />

        <p class="taxi-container-3__text taxi-container-3__text--none">{{ textTaxi.cost088 }}</p>

        <p class="taxi-container-3__text taxi-container-3__text--none">{{ textTaxi.cost24 }}</p>
    </div>
</template>

<script>
    export default {
        props: ['textTaxi'],
        data() {
            return {
                viewBus: false,
            }
        },
        components: {
            Cost: () => import(/* webpackChunkName: "Taxi" */ "../cost/Cost"),
        },
        methods: {
            viewDescrBus() {
                this.viewBus = !this.viewBus;
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