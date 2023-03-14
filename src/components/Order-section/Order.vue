<template>
    <section class="order">
        <div class="order-container">
            <p class="order-container__text">
                {{ textOrder.yourTime }}
                <br />
                {{ textOrder.speed }}
                <br />
                {{ textOrder.zootaxi }}
            </p>    

            <OrderCarousel :textOrder="textOrder" />

            <div class="order-container-tags">
                <router-link :to="'/services/'" class="order-container-tags__link alert" >{{ textOrder.request }}</router-link>
                <router-link :to="'/services/'" class="order-container-tags__link homes" >{{ textOrder.newHome }}</router-link>
                <router-link :to="'/services/'" class="order-container-tags__link specials" >{{ textOrder.outCar }}</router-link>
            </div>

            <OrderForm :textOrder="textOrder" />
        </div>

        <a name="services" class="anchor"></a>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        components: {
            OrderForm: () => import(/* webpackChunkName: "Order" */ "./OrderForm.vue"),
            OrderCarousel: () => import(/* webpackChunkName: "Order" */ "./OrderCarousel.vue"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textOrder() {
                if (this.text) { 
                    let text = this.text.order;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .order {
        width: 100%;
        background-image: url('https://zootaxi.by/images/image_2021-01-20_21-47-42.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 70px;

        @media(min-width: 1280px) {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        
        @media(max-width: 768px) {
            padding: 30px;
        }

        @media(max-width: 400px) {
            padding: 30px 10px;
        }

        &-container {
            width: fit-content;
            max-width: 530px;
            margin-left: auto;
            position: relative;

            @media(max-width: 1024px) {
                width: 90%;
            }

            @media(max-width: 400px) {
                margin: 0 auto;
            }

            &__text {
                background-color: rgb(39, 45, 64);
                color: #FFF;
                border-radius: 9px;
                padding: 15px 16px;
                text-align: center;
                font-size: 22px;

                @media(max-width: 768px) {
                    padding: 10px;
                    width: 100%;
                }

                @media(max-width: 500px) {
                    font-size: 20px;
                }

                @media(max-width: 400px) {
                    font-size: 18px;
                }
            }

            &-carusel {
                width: 100%;
                height: 100%;
                padding: 0 40px;
                margin-top: 20px;
                position: relative;

                @media(max-width: 768px) {
                    width: 100%;
                }

                @media(max-width: 480px) {
                    padding: 0;
                }

                &-body {
                    width: 100%;
                    overflow: hidden;
                    display: flex;
                    flex-wrap: nowrap;

                    &__item {
                        position: relative;
                        color: white;
                        font-weight: 700;
                        font-size: 22px;
                        text-align: center;
                        transition-duration: 1s;
                        min-width: 100%;

                        @media(max-width: 500px) {
                            font-size: 16px;
                        }
                    }
                }

                &-iteration {
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: center;
                    margin-top: 10px;

                    &__circle {
                        width: 5px;
                        height: 5px;
                        background-color: rgba(255, 255, 255, 0.2);
                        margin-left: 5px;
                        border-radius: 100%;

                        &--active {
                            background-color: #fff;
                        }
                    }
                }

                .bi-arrow-left-circle {
                    position: absolute;
                    left: 0;
                    top: 10px;
                    z-index: 2;
                    filter: invert(100%);
                }

                .bi-arrow-right-circle {
                    position: absolute;
                    right: 0;
                    top: 10px;
                    z-index: 2;
                    filter: invert(100%);
                }
            }

            &-tags {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;

                @media(max-width: 768px) {
                    width: 100%;
                }

                @media(max-width: 520px) {
                    flex-direction: column;
                }

                &__link {
                    background-color: rgb(182, 47, 47);
                    border-radius: 25px;
                    border: 2px solid rgb(146, 38, 38);
                    padding: 8px 24px;
                    font-size: 14px;
                    font-weight: bold;
                    color: rgb(255, 255, 255);
                    text-decoration: none;
                    min-width: 30%;
                    text-align: center;
                    max-height: 40px;

                    @media(max-width: 520px) {
                        width: 90%;
                        margin: 10px auto;
                        text-align: center;
                    }
                    
                    @media(max-width: 400px) {
                        width: 180px;
                        margin: 10px auto;
                        text-align: center;
                    }
                }

                &__link:hover {
                    animation-name: hvr-wobble-vertical;
                    animation-duration: 1s;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: 1;
                    background-color: rgb(164, 42, 42);
                    border-color: rgb(117, 30, 30);
                }

                .alert {
                    order: 3;

                    @media(max-width: 600px) {
                        order: 1;
                    }
                }

                .homes {
                    order: 1;

                    @media(max-width: 600px) {
                        order: 2;
                    }
                }

                .specials {
                    order: 2;

                    @media(max-width: 600px) {
                        order: 3;
                    }
                }
            }

            &__form {
                padding: 20px;
                background-color: rgb(255, 255, 255);
                border-color: rgb(22, 102, 241);
                border-style: none;
                border-width: 2px;
                border-radius: 5px;
                box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.1);
                width: 400px;
                margin: 0 auto;
                margin-top: 30px;

                @media(max-width: 500px) {
                    width: 300px;
                }

                @media(max-width: 400px) {
                    width: 270px;
                }

                &__text {
                    text-align: center;
                    color: #333;
                    font-size: 18px;
                    font-weight: 700;

                    @media(max-width: 400px) {
                        font-size: 14px;
                    }
                }

                &__input {
                    display: block;
                    margin-top: 30px;
                    width: 95%;
                    border: none;
                    outline: none;
                }

                &__input:focus {
                    border-bottom: 1px solid blue;
                }

                &__button {
                    background-color: rgb(39, 46, 64);
                    border-radius: 25px;
                    border: 1px solid rgb(31, 37, 51);
                    padding: 10px;
                    font-size: 18px;
                    color: rgb(255, 255, 255);
                    margin: 0 auto;
                    margin-top: 30px;
                    width: 100%;

                    @media(max-width: 500px) {
                        font-size: 15px;
                    }

                    @media(max-width: 400px) {
                        font-size: 13px;
                        background-color: rgb(251, 139, 0);
                        border: 1px solid rgb(201, 111, 0);
                    }
                }
            }
        }
    }

    .br {

        @media(min-width: 500px) {
            display: none;
        }
    }
</style>