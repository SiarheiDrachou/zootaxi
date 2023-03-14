<template>
    <div class="services-container">
        <div 
            class="services-container-card" 
            v-for="(item, id) in textService.carousel"
            :key="id"
        >
            <picture class="services-container-card__img">
                <source
                    :srcset="item.srcWEBP"
                    alt=""
                    type="image/webp"
                />
                <img :src="item.src" alt="" />
            </picture>

            <p class="services-container-card__text" v-html="item.text"></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['textService'],
    }
</script>