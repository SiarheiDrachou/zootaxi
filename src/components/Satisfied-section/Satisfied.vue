<template>
    <section class="satisfied">
        <svg version="1.1" viewBox="0 0 5223 186" preserveAspectRatio="none" class="satisfied__top">
            <path d="M2057.1 37.42c206.9 83.752 297.8 147.42 660.2 92.25 493-75.037 624.1 29.02 898.2 32.826 226.7 3.145 357-81.27 521.4-81.27 164.3 0 274 98.65 436.4 101.63C4743.3 186 5259 186 5259 186L0 184.4h715.9c11.4 0 16.6-1.655 19.3-4.303 22.9-22.4 142.7-122.705 415.2-87.89 151.2 19.31 310.3-23.284 459-67.2 115.1-34.098 327-36.415 447.7 12.413z" style="fill: white;"></path>
        </svg>

        <h2 class="satisfied__header">{{ textSatisfied.whySmile }}</h2>

        <SatisfiedCarousel :textSatisfied="textSatisfied" />
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import SatisfiedCarousel from './SatisfiedCarousel.vue'

    export default {
        components: {
            SatisfiedCarousel,
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textSatisfied() {
                if (this.text) { 
                    let text = this.text.satisfied;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .satisfied {
        position: relative;
        background-color: rgb(39, 46, 64);
        padding-bottom: 60px;
        overflow: hidden;

        &__header {
            color: white;
            text-align: center;

            @media(max-width: 768px) {
                font-size: 28px;
            }

            @media(max-width: 500px) {
                font-size: 24px;
            }

            @media(max-width: 400px) {
                font-size: 20px;
            }
        }

        &-container {
            background-color: #fff;
            border-radius: 15px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 15px;
            margin: 0 auto;
            margin-top: 20px;
            max-width: 1170px;

            @media(max-width: 1024px) {
                width: 90%;
                padding: 25px;
                max-width: 720px;
            }

            @media(max-width: 768px) {
                width: 480px;
                padding: 25px;
            }

            @media(max-width: 500px) {
                width: 300px;
            }

            @media(max-width: 320px) {
                width: 270px;
            }

            &-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 225px;

                @media(max-width: 768px) {
                    width: 40%;
                }

                @media(max-width: 500px) {
                    width: 100%;
                }

                &__img {
                    width: 150px;
                    display: block;
                    margin: 0 auto;
                }

                &-container {

                    &__text {
                        margin: 10px 0 10px 0;
                        text-align: center;
                        font-size: 16px;
                    }
                }
            }
        }

        &__top {
            width: 340%;
            height: 47px;
            position: relative;
            left: -50%;
            top: -2px;
            transform: rotate(180deg);

            @media(max-width: 320px) {
                height: 30px;
            }
        }
    }
</style>