<template>
    <section class="warranty">
        <a class="warrantyAnchor anchor"></a>
        <h1 class="warranty__header">{{ textWarranty.header }}</h1>

        <div class="warranty-container">
            <div 
                class="warranty-container-card" 
                v-for="(item, id) in textWarranty.carousel"
                :key="id"
            >
                <picture class="warranty-container-card__img">
                    <source
                        :srcset="item.srcWEBP"
                        alt=""
                        type="image/webp"
                    />
                    <img :src="item.src" alt="" />
                </picture>

                <p class="warranty-container-card__text" v-text="item.text"></p>
            </div>
        </div>

        <svg version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" class="svg__bottom">
            <path d="M 0 100 H 100 V 0 H 100 L 50 100 L 0 0 H 0 Z" style="fill: white;"></path>
        </svg>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textWarranty() {
                if (this.text) { 
                    let text = this.text.warranty;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .warranty {
        width: 100%;
        background-color: rgb(39, 46, 64);
        position: relative;
        padding-top: 20px;

        &__header {
            color: white;
            text-align: center;
            margin-bottom: 20px;
            padding: 0 15px;

            @media(max-width: 768px) {
                font-size: 30px;
            }

            @media(max-width: 500px) {
                font-size: 26px;
            }

            @media(max-width: 400px) {
                font-size: 24px;
            }
        }

        &-container {
            width: 90%;
            background-color: #fff;
            border-radius: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 20px;
            margin: 0 auto;

            @media(min-width: 1280px) {
                max-width: 1170px;
            }

            @media(max-width: 1024px) {
                width: 600px;
            }

            @media(max-width: 768px) {
                width: 90%;
                padding: 30px 70px;
            }

            @media(max-width: 400px) {
                padding: 15px;
            }

            &-card {

                @media(max-width: 768px) {
                    margin: 10px auto 20px;
                }

                @media(max-width: 600px) {
                    width: 300px;
                }

                &__img {
                    margin: 0 auto;
                    display: block;
                    width: 170px;
                    height: 170px;
                }

                &__text {
                    width: 195px;
                    margin-top: 20px;
                    font-size: 16px;

                    @media(max-width: 1024px) {
                        text-align: center;
                    }

                    @media(max-width: 600px) {
                        width: auto;
                    }
                }
            }
            
        }

        .svg__bottom {
            position: relative;
            bottom: -5px;
            width: 100%;
            height: 110px;

            @media(max-width: 500px) {
                height: 40px;
            }
        }
    }
</style>