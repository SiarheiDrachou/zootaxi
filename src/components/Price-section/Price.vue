<template>
    <section class="price">
        <a class="priceAnchor anchor"></a>
        <h1 class="price__header">{{ textPrice.price }}</h1>

        <PriceContainer :textPrice="textPrice" @modal="modal" />

        <a name="information" class="anchor"></a>
        <PriceInformation v-if="closePriceInformation" :item="textPrice.info[idx]" :id="idx" />
    </section>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import PriceInformation from './PriceInformation.vue'
    import PriceContainer from './PriceContainer.vue'

    export default {
        components: {
            PriceInformation,
            PriceContainer,
        },
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
                this.getTypeRequest(name);
                this.getClosePriceInformation();
                this.idx = id;
            },
            ...mapActions({
                getClosePriceInformation: 'getClosePriceInformation',
                getTypeRequest: 'getTypeRequest',
            })
        },
        computed: {
            ...mapState({
                closePriceInformation: state => state.closePriceInformation,
                text: state => state.text,
            }),
            textPrice() {
                if (this.text) { 
                    let text = this.text.price;

                    return text;
                }

                return {}
            }
        }
    }
</script>

<style lang="scss">
    .price {
        position: relative;
        width: 100%;
        padding-top: 20px;

        &__header {
            text-align: center;
            color: rgb(157, 10, 15);

            @media(min-width: 400px) {
                text-transform: uppercase;
            }
        }

        &-container {
            padding: 20px 30px;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            max-width: 1500px;
            margin: 0 auto;

            @media(max-width: 1280px) {
                max-width: 100%;
                justify-content: center;
            }

            @media(max-width: 768px) {
                padding: 30px 0;
            }

            @media(max-width: 500px) {
                padding: 20px 0;
            }

            &-card {
                width: 245px;
                border-radius: 5px;
                border: 1px solid rgb(217, 217, 217);
                box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
                padding: 5px;
                margin: 10px 10px 20px;
                position: relative;
                cursor: pointer;

                @media(max-width: 768px) {
                    min-height: 440px;
                    margin: 10px 20px 20px;
                }

                &__time {
                    color: rgba(155, 155, 155, 0.5);
                    font-size: 12px;
                    text-align: center;
                    margin-top: 20px;
                }

                &__name {
                    background-color: rgb(39, 43, 64);
                    color: #EBEBEB;
                    text-align: center;
                    padding: 12px;
                    font-size: 17px;
                    margin-bottom: 5px;
                    position: relative;
                }

                &__img {
                    width: 100%;

                    img,
                    source {
                        max-height: 172px;
                        height: 172px;
                    }

                    @media(max-width: 768px) {
                        height: 152px;
                    }
                }

                &__text {
                    font-size: 14px;
                    color: #333333;
                    font-weight: 700;
                    text-align: center;
                    margin: 15px 0;

                    &--gray {
                        font-size: 10px;
                        text-align: center;
                        color: #333333;
                        line-height: 20px;
                        opacity: 0.5;
                    }
                }

                &__cost {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;

                    img {
                        height: 15px;
                        width: 15px;
                        transition-duration: 1s;
                    }

                    span {
                        color: rgb(157, 10, 15);
                        font-weight: 700;
                        font-size: 18px;
                        padding: 0 10px;
                        width: 100%;
                        text-align: center;
                    }
                }

                &__button {
                    background-color: rgb(39, 46, 64);
                    border-radius: 5px;
                    border: 1px solid rgb(31, 37, 51);
                    padding: 8px 24px;
                    font-size: 14px;
                    font-weight: bold;
                    color: rgb(255, 255, 255);
                    width: 100%;
                    margin-top: 15px;
                }

                &__descr {
                    margin-top: 15px;
                }
            }

            .new-item::before {
                position: absolute;
                content: '';
                left: -30px;
                top: 10;
                width: 100px;
                height: 40px;
                transform: rotate(330deg);
                background-image: url("https://zootaxi.by/images/new-price.png");
                background-repeat: no-repeat;
                background-size: cover;
                z-index: 2;
            }
        }
    }

    .rotate {
        transform: rotate(180deg);
        transition-duration: 1s;
    }

    .bi {
        transition-duration: 1s;
    }

    .photo-svg {
        background-image: url("data:image/svg+xml,%3Csvg id='svg93' width='50' height='50' style='margin: 0 auto; display: block;' preserveAspectRatio='xMidYMid meet' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 60'%3E%3Crect x='0' y='0' width='60' height='60' style='fill: rgba(150, 22, 19, 0.25)' rx='50%25' ry='50%25'%3E%3C/rect%3E%3Cg transform='scale(0.6) translate(20, 20)'%3E%3Cpath fill='rgb(150, 22, 19)' d='M53.792,14.239h-0.841c-0.223-1.834-1.785-3.261-3.68-3.261h-6.488c-1.895,0-3.458,1.427-3.68,3.261H6.21 c-2.046,0-3.71,1.664-3.71,3.709v27.364c0,2.045,1.664,3.709,3.71,3.709h47.582c2.045,0,3.708-1.664,3.708-3.709V17.948 C57.5,15.903,55.837,14.239,53.792,14.239z M42.783,13.873h6.488c0.284,0,0.533,0.146,0.68,0.366h-7.848 C42.25,14.019,42.499,13.873,42.783,13.873z M30.531,24.438c5.061,0,9.178,4.117,9.178,9.177c0,5.062-4.117,9.18-9.178,9.18 s-9.178-4.118-9.178-9.18C21.354,28.556,25.471,24.438,30.531,24.438z M6.21,17.134h23.598v4.434 c-5.77,0.343-10.458,4.754-11.233,10.398H5.395V17.948C5.395,17.5,5.76,17.134,6.21,17.134z M54.605,45.312 c0,0.449-0.365,0.815-0.813,0.815H6.21c-0.45,0-0.815-0.366-0.815-0.815V33.413h13.069c-0.002,0.068-0.006,0.136-0.006,0.202 c0,6.658,5.416,12.073,12.073,12.073s12.073-5.415,12.073-12.073c0-6.413-5.028-11.672-11.35-12.048v-4.434h22.537 c0.448,0,0.813,0.366,0.813,0.814V45.312z'%3E%3C/path%3E%3Cpath fill='rgb(150, 22, 19)' d='M30.531,41.027c4.087,0,7.412-3.324,7.412-7.412c0-4.086-3.325-7.411-7.412-7.411s-7.412,3.325-7.412,7.411 C23.119,37.703,26.444,41.027,30.531,41.027z M30.531,27.169c3.555,0,6.446,2.893,6.446,6.446c0,3.556-2.892,6.447-6.446,6.447 s-6.447-2.892-6.447-6.447C24.084,30.062,26.977,27.169,30.531,27.169z'%3E%3C/path%3E%3Cpath fill='rgb(150, 22, 19)' d='M7.728,23.303h9.235c0.398,0,0.723-0.323,0.723-0.724v-3.188c0-0.399-0.324-0.724-0.723-0.724H7.728 c-0.399,0-0.724,0.324-0.724,0.724v3.188C7.004,22.979,7.328,23.303,7.728,23.303z M8.451,20.115h7.788v1.74H8.451V20.115z'%3E%3C/path%3E%3Cpath fill='rgb(150, 22, 19)' d='M51.493,18.283c-1.044,0-1.894,0.85-1.894,1.894s0.85,1.894,1.894,1.894c1.045,0,1.895-0.85,1.895-1.894 S52.538,18.283,51.493,18.283z M51.493,20.623c-0.245,0-0.445-0.2-0.445-0.446s0.2-0.446,0.445-0.446 c0.247,0,0.447,0.2,0.447,0.446S51.74,20.623,51.493,20.623z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: cover;
        width: 50px;
        height: 50px;
    }
</style>