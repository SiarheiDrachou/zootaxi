<template>
    <section class="promotion">
        <a class="promotionAnchor anchor"></a>
        <div class="promotion-background">
            <svg version="1.1" viewBox="0 0 5223 186" preserveAspectRatio="none" class="promotion__top">
                <path d="M2057.1 37.42c206.9 83.752 297.8 147.42 660.2 92.25 493-75.037 624.1 29.02 898.2 32.826 226.7 3.145 357-81.27 521.4-81.27 164.3 0 274 98.65 436.4 101.63C4743.3 186 5259 186 5259 186L0 184.4h715.9c11.4 0 16.6-1.655 19.3-4.303 22.9-22.4 142.7-122.705 415.2-87.89 151.2 19.31 310.3-23.284 459-67.2 115.1-34.098 327-36.415 447.7 12.413z" style="fill: white;"></path>
            </svg>
        </div>

        <h1 class="promotion__header promotion__header--upper">{{ textPromoution.stock }} <span class="promotion__header--red">"{{ textPromoution.newHome }}"</span></h1>

        <h2 class="promotion__header">
            {{ textPromoution.allPets }}
            <br class="br" />
            <br class="br1">
            <span class="promotion__header--red">{{ textPromoution.discount }}</span>
        </h2>

        <picture class="promotion__img">
            <source
                srcset="https://zootaxi.by/images/17.webp"
                alt=""
                type="image/webp"
            />
            <img src="https://zootaxi.by/images/17.png" alt="" />
        </picture>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textPromoution() {
                if (this.text) { 
                    let text = this.text.promoution;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss" scoped>
    .promotion {
        padding-bottom: 30px;
        position: relative;
        width: 100%;
        color: rgb(0, 32, 86);
        overflow: hidden;

        &__header {
            text-align: center;
            margin: 20px 0;

            @media(max-width: 768px) {
                font-size: 28px;
            }

            @media(max-width: 500px) {
                font-size: 26px;
            }

            @media(max-width: 400px) {
                font-size: 20px;
            }

            &--upper {
                text-transform: uppercase;
            }

            &--red {
                color: rgb(157, 10, 15);
            }
        }

        &__img {
            margin: 0 auto;
            display: block;
            width: 90%;
            max-width: 820px;
        }

        &-background {
            background-color: rgb(39, 46, 64);
            height: 60px;

            @media(max-width: 500px) {
                height: 30px;
            }
        }

        &__top {
            position: relative;
            left: -67%;
            height: 30px;
            width: 340%;
            bottom: -35px;

            @media(max-width: 500px) {
                height: 15px;
                bottom: -16px;
            }
        }
    }

    .br {

        @media(max-width: 500px) {
            display: none;
        }
    }

    .br1 {

        @media(min-width: 500px) {
            display: none;
        }
    }
</style>