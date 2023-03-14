<template>
    <section class="taxi">
        <a class="taxiAnchor anchor"></a>
        <svg version="1.1" viewBox="0 0 5223 186" preserveAspectRatio="none" class="taxi__top">
            <path d="M2057.1 37.42c206.9 83.752 297.8 147.42 660.2 92.25 493-75.037 624.1 29.02 898.2 32.826 226.7 3.145 357-81.27 521.4-81.27 164.3 0 274 98.65 436.4 101.63C4743.3 186 5259 186 5259 186L0 184.4h715.9c11.4 0 16.6-1.655 19.3-4.303 22.9-22.4 142.7-122.705 415.2-87.89 151.2 19.31 310.3-23.284 459-67.2 115.1-34.098 327-36.415 447.7 12.413z" style="fill: white;"></path>
        </svg>
        
        <h2 class="taxi__header">{{ textTaxi.header }}</h2>

        <div class="taxi__text">
            <p>
                {{ textTaxi.transportation }}
                <br />
                {{ textTaxi.price }}
            </p>
        </div>

        <div class="taxi-container">
            <TaxiContainerHeading :textTaxi="textTaxi" />

            <TaxiContainerCar :textTaxi="textTaxi" />

            <TaxiContainerBus :textTaxi="textTaxi" />
        </div>

        <div class="taxi__text">
            <p>
                {{ textTaxi.questions }}
                <br />
                {{ textTaxi.request }}
            </p>

            <button class="taxi__text__button" @click="getHelp">{{ textTaxi.button}}</button>
        </div>

        <svg version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" class="svg__bottom">
            <path d="M 0 100 H 100 V 0 H 100 L 50 100 L 0 0 H 0 Z" style="fill: white;"></path>
        </svg>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                viewBus: false,
            }
        },
        components: {
            TaxiContainerHeading: () => import(/* webpackChunkName: "Taxi" */ "./TaxiContainerHeading"),
            TaxiContainerCar: () => import(/* webpackChunkName: "Taxi" */ "./TaxiContainerCar"),
            TaxiContainerBus: () => import(/* webpackChunkName: "Taxi" */ "./TaxiContainerBus"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textTaxi() {
                if (this.text) { 
                    let text = this.text.taxi;

                    return text;
                }

                return {}
            },
        },
        methods: {
            ...mapActions({
                getHelp: 'getHelp',
            }),
        },
    }
</script>

<style lang="scss">
    .taxi {
        position: relative;
        width: 100%;
        background-color: rgb(39, 46, 64);
        overflow: hidden;

        &__header {
            padding-left: 30px;
            font-style: italic;
            color: white;
            max-width: 1170px;
            margin: 0 auto;
            
            @media(max-width: 768px) {
                text-align: center;
                font-size: 28px;
            }

            @media(max-width: 400px) {
                padding: 0 10px;
            }
        }

        &__text {
            max-width: 1170px;
            margin: 35px auto 15px;

            @media(max-width: 400px) {
                text-align: center;
            }

            p {
                padding-left: 30px;
                font-size: 15px;
                color: rgba(255, 255, 255, 0.6);

                @media(max-width: 400px) {
                    padding: 0 10px;
                }

                @media(max-width: 320px) {
                    padding: 0 10px;
                    font-size: 14px;
                }
            }

            &__button {
                background-color: rgb(182, 47, 47);
                border-radius: 10px;
                border: 1px solid rgb(146, 38, 38);
                padding: 10px 44px;
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
                color: white;
                margin: 15px 0 20px 30px;
                text-transform: uppercase;
                display: block;
                font-size: 20px;

                @media(max-width: 768px) {
                    display: block;
                    margin: 15px auto;
                }

                @media(max-width: 400px) {
                    font-size: 16px;
                    width: 90%;
                    padding: 10px 16px;
                }
            }

            &__button:hover {
                animation-name: pulse;
                animation-duration: 0.5s;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
            }
        }

        &-container {
            max-width: 1170px;
            margin: 0 auto;

            @media(max-width: 768px) {
                display: flex;
                flex-direction: column;
            }

            &-1 {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 30px 0 30px;

                @media(min-width: 768px) {
                    align-items: flex-start;
                }

                @media(max-width: 768px) {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 100%;
                }

                @media(max-width: 500px) {
                    width: 90%;
                    padding: 15px 0 0 0;
                    margin: 0 auto;
                }

                &__header {
                    color: white;
                    font-size: 16px;
                    text-align: center;
                    width: 30%;

                    @media(max-width: 768px) {
                        width: 100%;
                        text-align: center;
                        margin-bottom: 20px;
                        font-size: 30px;
                    }

                    @media(max-width: 500px) {
                        font-size: 24px;
                    }

                    @media(max-width: 400px) {
                        font-size: 20px;
                    }

                    &--none {
                        display: block;

                        @media(max-width: 768px) {
                            display: none;
                        }
                    }
                }
            }

            &-2 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 15px 30px 0 30px;

                @media(max-width: 768px) {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 90%;
                }

                &-container {
                    width: 100%;
                    max-width: 30%;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 10px 20px;

                    @media(max-width: 768px) {
                        margin: 0 auto;
                        padding: 16px 20px;
                        min-width: 170px;
                        max-width: none;
                    }

                    @media(max-width: 600px) {
                        min-width: auto;
                    }

                    &__text {
                        position: relative;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: 700;
                        cursor: pointer;

                        img {
                            height: 15px;
                            width: 15px;
                            transition-duration: 1s;
                        }
                    }

                    hr {
                        margin-top: 20px;
                    }

                    &__list {
                        padding-left: 20px;
                        padding-top: 10px;

                        &__item {
                            font-size: 14px;
                            font-style: italic;
                            font-weight: 700;
                            line-height: 20px;
                        }
                    }
                }

                &__text {
                    width: 100%;
                    max-width: 30%;
                    background-color: #fff;
                    color: rgb(157, 10, 15);
                    font-weight: 700;
                    text-align: center;
                    border-radius: 5px;
                    padding: 5px 10px;

                    @media(max-width: 768px) {
                        margin: 0 auto;
                    }

                    &--none {
                        display: flex;
                        justify-content: center;

                        @media(max-width: 768px) {
                            display: none;
                        }
                    }
                }
            }

            &-3 {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 15px 30px;

                @media(min-width: 768px) {
                    margin: 15px 30px 0 30px;
                }

                @media(max-width: 768px) {
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    width: 90%;
                }

                &-container {
                    width: 100%;
                    max-width: 30%;
                    background-color: #fff;
                    border-radius: 5px;
                    padding: 10px 20px;

                    @media(max-width: 768px) {
                        min-width: 170px;
                        max-width: none;
                        padding: 16px 20px;
                    }


                    &__text {
                        position: relative;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                        font-weight: 700;
                        cursor: pointer;

                        img {
                            height: 15px;
                            width: 15px;
                            transition-duration: 1s;
                        }
                    }

                    hr {
                        margin-top: 20px;
                    }

                    &__list {
                        padding-left: 20px;
                        padding-top: 10px;

                        &__item {
                            font-size: 14px;
                            font-style: italic;
                            font-weight: 700;
                            line-height: 20px;
                        }
                    }
                }

                &__text {
                    width: 100%;
                    max-width: 30%;
                    background-color: #fff;
                    color: rgb(157, 10, 15);
                    font-weight: 700;
                    text-align: center;
                    border-radius: 5px;
                    padding: 5px 10px;

                    &--none {
                        display: flex;
                        justify-content: center;

                        @media(max-width: 768px) {
                            display: none;
                        }
                    }
                }
            }
        }

        .svg__bottom {
            position: relative;
            bottom: -6px;
            width: 100%;
            height: 112px;

            @media(max-width: 768px) {
                height: 40px;
            }
        }

        &__top {
            position: relative;
            top: -3px;
            height: 40px;
            left: -50%;
            width: 340%;
            transform: rotate(180deg);

            @media(max-width: 320px) {
                height: 20px;
            }
        }
    }
</style>