<template>
    <div class="order-container-carusel">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" @click="left">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>

        <div class="order-container-carusel-body" ref="caruselOrder">
            <p 
                class="order-container-carusel-body__item" 
                ref="caruselText"
                :style="{left: -idx * 100 + '%'}"
                v-for="(item, id) in textOrder.carousel" 
                :key="id" 
                v-html="item.text"
            ></p>
        </div>

        <div class="order-container-carusel-iteration" @click="stopCarusel">
            <p 
                class="order-container-carusel-iteration__circle"
                v-for="(item, id) in textOrder.carousel" 
                :key="id" 
                :class="{'order-container-carusel-iteration__circle--active': idx == item.id }"
            ></p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" @click="right">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                idx: 0,
                timer: null,
            }
        },
        props: ['textOrder'],
        methods: {
            left() {
                this.idx--;

                if(this.idx < 0) {
                    this.idx = this.textOrder.carousel.length - 1;
                }
                
                this.stopCarusel();
            },
            right() {
                this.idx++;

                if(this.idx > this.textOrder.carousel.length - 1) {
                    this.idx = 0;
                }
                
                this.stopCarusel();
            },
            stopCarusel() {
                clearInterval(this.timer);
            },
            carouselTimer() {
                this.timer = setInterval(() => {
                    this.idx++;

                    if(this.idx >= this.textOrder.carousel.length - 1) {
                        this.idx = 0;
                    }
                }, 2000);
            },
        },
        mounted() {
            this.carouselTimer();
        }
    }
</script>