<template>
    <section class="special">
        <a class="specialAnchor anchor"></a>
        <h2 class="special__header">{{ textSpecial.specialOffer}}<span class="special__header--red">"{{ textSpecial.outCar }}"</span></h2>
    
        <div class="special-container">
            <picture class="special-container__img">
                <source
                    srcset="https://zootaxi.by/images/1.webp"
                    alt="company transport"
                    type="image/webp"
                />
                <img src="https://zootaxi.by/images/1.jpg" alt="company transport" />
            </picture>

            <p class="special-container__text">
                {{ textSpecial.carZootaxi }}

                <br />
                <br />

                {{ textSpecial.quicker }} <span class="special-container__text--red">{{ textSpecial.placeAnOrder }}</span> {{ textSpecial.get }}
                <br />
                <span class="special-container__text--red">{{ textSpecial.discont }}</span> {{ textSpecial.transportation }}
            </p>
        </div>

        <p class="special__text">
            {{ textSpecial.specialCar }}
        </p>

        <div class="special-background">
            
            <a name="home" class="anchor"></a>
            <svg version="1.1" viewBox="0 0 5223 186" preserveAspectRatio="none" class="special__bottom">
                <path d="M2057.1 37.42c206.9 83.752 297.8 147.42 660.2 92.25 493-75.037 624.1 29.02 898.2 32.826 226.7 3.145 357-81.27 521.4-81.27 164.3 0 274 98.65 436.4 101.63C4743.3 186 5259 186 5259 186L0 184.4h715.9c11.4 0 16.6-1.655 19.3-4.303 22.9-22.4 142.7-122.705 415.2-87.89 151.2 19.31 310.3-23.284 459-67.2 115.1-34.098 327-36.415 447.7 12.413z" style="fill: rgb(39, 46, 64);"></path>
            </svg>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textSpecial() {
                if (this.text) { 
                    let text = this.text.special;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .special {
        position: relative;
        padding-top: 100px;
        width: 100%;
        overflow: hidden;

        @media(max-width: 768px) {
            padding-top: 0;
        }

        &__header {
            padding-left: 150px;
            font-style: italic;
            color: rgb(0, 32, 86);
            max-width: 1170px;
            margin: 20px auto 0;

            @media(max-width: 1024px) {
                padding-left: 100px;
                font-size: 30px;
            }

            @media(max-width: 768px) {
                padding: 0 20px;
                text-align: center;
            }

            @media(max-width: 500px) {
                margin-top: 30px;
                font-size: 24px;
            }

            @media(max-width: 400px) {
                margin-top: 30px;
                font-size: 18px;
            }

            &--red {
                color: rgb(157, 10, 15);
                font-style: normal;

                @media(max-width: 400px) {
                    font-size: 16px;
                }
            }
        }

        &-container {
            padding: 20px 50px 20px 100px;
            display: flex;
            align-items: center;
            max-width: 1170px;
            margin: 0 auto;

            @media(max-width: 1024px) {
                padding-left: 50px;
            }

            @media(max-width: 768px) {
                display: block;
                padding: 20px 20px 0 20px;
            }

            @media(max-width: 400px) {
                margin: 5px auto 0;
            }

            &__img {
                width: 50%;
                max-width: 360px;

                @media(max-width: 1024px) {
                    display: block;
                    width: 90%;
                    margin: 0 auto;
                }
            }

            &__text {
                padding: 30px 0;
                font-style: italic;
                font-weight: 700;
                font-size: 18px;
                text-align: center;
                color: rgb(0, 32, 86);

                &--red {
                    font-size: 24px;
                    color: rgb(157, 10, 15);
                }
            }
        }

        &__text {
            font-style: italic;
            font-weight: 700;
            font-size: 14px;
            color: rgb(0, 32, 86);
            opacity: 0.65;
            padding: 0 170px 40px;
            padding-bottom: 40px;
            text-align: center;

            @media(max-width: 1024px) {
                padding: 0 50px 40px;
            }

            @media(max-width: 400px) {
                padding: 0 20px 40px;
            }
        }

        &__bottom {
            position: relative;
            width: 340%;
            height: 30px;
            left: -190%;
            top: 0;
            transform: scaleX(-1);

            @media(max-width: 500px) {
                height: 15px;
                top: 6px;
                width: 425%;
            }
        }

        &-background {
            height: 20px;
        }
    }

    .special::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: -3px;
        width: 110%;
        height: 100px;
        background-image: url('https://zootaxi.by/images/volna2.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;

        @media(max-width: 768px) {
            display: none;
        }
    }
</style>