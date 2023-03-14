<template>
    <div class="price-container">
        <div 
            class="price-container-card"
            :class="item.new"
            v-for="(item, id) in textPrice.prices"
            :key="id"
        >
            <a :class="item.class"></a>
            <p class="price-container-card__name">
                {{ item.name }}
            </p>

            <picture class="price-container-card__img">
                <source
                    :srcset="item.srcWEBP" 
                    alt="price category"
                    type="image/webp"
                />
                <img :src="item.src" alt="price category" />
            </picture>

            <p class="price-container-card__text" v-html="item.text"></p>

            <p v-html="item.textGray" class="price-container-card__text--gray"></p>

            <p class="price-container-card__cost" @click="viewDescr(id)">
                <img src="https://zootaxi.by/images/arrow-down.svg" alt="" :class="{ 'rotate': item.rotate }">

                <span v-html="item.cost"></span>
            </p>

            <p 
                class="price-container-card__time" 
                v-if="item.name !== textPrice.urgentCall && item.name !== textPrice.nightRoute"
            >
                {{ textPrice.oneHour }}
            </p>
            <p 
                class="price-container-card__time" 
                v-if="item.name === textPrice.urgentCall"
            >
                {{ textPrice.unscheduledRegistration }}
            </p>
            <p 
                class="price-container-card__time" 
                v-if="item.name === textPrice.nightRoute"
            >
                {{ textPrice.fromTo }}
            </p>

            <p v-show="item.view" v-html="(item.descr1 || '') +(item.descr || '') + (item.descr2 || '')" class="price-container-card__descr"></p>

            <button class="price-container-card__button" @click="modal(id, item.name)">Подробнее</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['textPrice'],
        data() {
            return {
                idx: null,
                view: false,
            }
        },
        methods: {
            viewDescr(id) {
                this.textPrice.prices[id].view = !this.textPrice.prices[id].view;
                this.textPrice.prices[id].rotate = !this.textPrice.prices[id].rotate;
            },
            modal(id, name) {
                this.$emit('modal', id, name)
            },
        },
    }
</script>