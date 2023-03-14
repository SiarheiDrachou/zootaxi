<template>
    <div class="satisfied-container">
        <div 
            class="satisfied-container-card"
            v-for="(item, id) in textSatisfied.carousel"
            :key="id"
        >
            <picture class="satisfied-container-card__img">
                <source
                    :srcset="item.srcWEBP"
                    alt=""
                    type="image/webp"
                />
                <img :src="item.src" alt="" />
            </picture>

            <div class="satisfied-container-card-container">
                <p class="satisfied-container-card-container__text">
                    <b>{{item.bold_text}}</b>
                </p>
                
                <p class="satisfied-container-card-container__text" v-html="item.text">
                    
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['textSatisfied'],
    }
</script>