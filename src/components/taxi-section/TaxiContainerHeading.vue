<template>
    <div class="taxi-container-1">
        <h3 class="taxi-container-1__header">{{ textTaxi.specialCar }}</h3>

        <h3 class="taxi-container-1__header taxi-container-1__header--none">{{ textTaxi.kmCost }}</h3>

        <h3 class="taxi-container-1__header taxi-container-1__header--none">{{ textTaxi.carCost }}</h3>
    </div>
</template>

<script>
    export default {
        props: ['textTaxi']
    }
</script>