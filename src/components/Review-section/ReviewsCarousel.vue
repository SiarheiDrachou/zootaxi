<template>
    <div class="reviews-container-carusel">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-circle" viewBox="0 0 16 16" @click="left">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
        </svg>

        <div class="reviews-container-carusel-body">
            <div 
                class="reviews-container-carusel-body-comment"
                :style="{height: caruselHeight + 'px'}"
            >
                <div 
                    class="reviews-container-carusel-body-comment__text" 
                    :style="{left: ((100 * item.id) - (100 * idx)) + '%'}"
                    v-for="(item, id) in textReview.carousel" :key="id"
                >
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                        <picture>
                            <source
                                :srcset="item.srcWEBP" alt="comment img"
                                type="image/webp"
                            />
                            <img :src="item.src" alt="comment img" /> 
                        </picture>
                        <p >{{item.name}}</p>
                    </div>
                    
                    <p class="carusel__text" v-html="item.text"></p>
                </div>
            </div>
        </div>
        

        <div class="reviews-container-carusel-iteration">
            <p 
                class="reviews-container-carusel-iteration__circle"
                v-for="(item, id) in textReview.carousel" 
                :key="id" 
                :class="{'reviews-container-carusel-iteration__circle--active': idx == item.id }"
                @click="setId(id)"
            ></p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16" @click="right">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        <a name="partners" class="anchor"></a>
    </div>
</template>

<script>
    export default {
        props: ['textReview'],
        data() {
            return {
                idx: 0,
                caruselHeight: null,
                timer: null
            }
        },
        methods: {
            left() {
                this.idx--;

                if(this.idx < 0) {
                    this.idx = this.textReview.carousel.length - 1;
                }
            },
            right() {
                this.idx++;

                if(this.idx > this.textReview.carousel.length - 1) {
                    this.idx = 0;
                }
            },
            setId(id) {
                this.idx = id;
            },
            carouselTimer() {
                this.timer = setInterval(() => {
                    this.idx++;

                    if(this.idx >= this.textReview.carousel.length - 1) {
                        this.idx = 0;
                    }
                }, 10000);
            },
            getMaxOfArray(numArray) {
                return Math.max.apply(null, numArray);
            },
            getCaruselHeight() {
                let carusel = document.querySelectorAll('.carusel__text'),
                max = [];

                for (let i = 0; i < carusel.length; i++) {
                    max[i] = carusel[i].scrollHeight;
                }
                
                this.caruselHeight = this.getMaxOfArray(max) + 100;
            }
        },
        mounted() {
            this.getCaruselHeight();
            this.carouselTimer();

            window.onresize = () => {
                this.getCaruselHeight();
            }
        }
    }
</script>