<template>
    <section class="services">
        <a class="servicesAnchor anchor"></a>
        <h2 class="services__header">
            {{ textService.services }}
        </h2>

        <ServicesCarousel :textService="textService" />

        <a name="warranty" class="anchor"></a>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        components: {
            ServicesCarousel: () => import(/* webpackChunkName: "Services" */ "./ServicesCarousel"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textService() {
                if (this.text) { 
                    let text = this.text.service;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .services {
        width: 100%;
        padding: 0 30px 50px 20px;
        position: relative;

        &__header {
            margin: 30px 0;
            text-align: center;
            text-transform: uppercase;
            color: rgb(157, 10, 15);

            @media(max-width: 768px) {
                font-size: 26px;
            }

            @media(max-width: 500px) {
                font-size: 22px;
            }

            @media(max-width: 400px) {
                font-size: 18px;
            }
        }

        &-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 90%;
            max-width: 1100px;
            margin: 0 auto;

            @media(max-width: 1280px) {
                width: 85%;
            }

            @media(max-width: 1024px) {
                width: 95%;
            }

            @media(max-width: 600px) {
                max-width: 350px;
            }

            @media(max-width: 400px) {
                max-width: 300px;
            }

            &-card {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                align-items: center;
                width: 350px;
                margin-bottom: 15px;

                @media(max-width: 800px) {
                    margin: 0 auto 10px;
                    width: 300px;
                }

                &__img {
                    width: 220px;
                    height: 220px;

                    source,
                    img {
                        border-radius: 50%;
                    }
                }

                &__text {
                    font-weight: 700;
                    color: rgb(0, 32, 86);
                    font-size: 17px;
                    text-align: center;
                    margin-top: 20px;

                    @media(max-width: 500px) {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .services:after {
        content: ' ';
        position: absolute;
        bottom: -1px;
        left: 0;
        width: 100%;
        height: 10px;
        background-image: url('https://zootaxi.by/images/spear.png');
    }
</style>