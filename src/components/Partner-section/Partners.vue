<template>
    <section class="partners">
        <a class="partnersAnchor anchor"></a>
        <svg version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" class="partners__top">
            <path d="M 0 0 C 40 132 60 132 100 0 V 100 H 0 Z" style="fill: white;"></path>
        </svg>

        <h2 class="partners__header">{{ textPartner.ourPartners }}</h2>

        <div class="partners-container">
            <a 
                class="partners-container__link"
                target="_blank"
                @click="postStatistic(item)"
                v-for="(item, id) in textPartner.partners"
                :key="id"
                :href="item.href"
                :class="'img-' + id"
            >
                <picture class="partners-container__link__img">
                    <source
                        :srcset="item.srcWEBP" 
                        alt="partner logo"
                        type="image/webp"
                    />
                    <img :src="item.src" alt="partner logo" />
                </picture>
            </a>
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                getPartner: 'getPartner',
            }),
            postStatistic(item) {
                this.getPartner(item);
            }
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textPartner() {
                if (this.text) { 
                    let text = this.text.partner;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .partners {
        position: relative;
        padding-bottom: 10px;

        &__top {
            position: relative;
            top: -28px;
            width: 100%;
            height: 30px;
        }

        &__header {
            text-align: center;
            color: #9d0a0f;
            font-size: 30px;
            text-transform: uppercase;
        }

        &-container {
            display: grid;
            width: 95%;
            grid-template-areas: 'img-0 img-1 img-2 img-3 img-4'
                                 'img-5 img-6 img-7 img-8 img-9';
            grid-template-columns: repeat(5, 1fr );
            grid-template-rows: repeat(2, 1fr );
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            margin-top: 50px;
            max-width: 1130px;
            
            @media(max-width: 1024px) {
                grid-template-areas: 'img-0 img-1 img-2 img-3'
                                     'img-4 img-5 img-6 img-7'
                                     '. img-8 img-9 .';
                grid-template-columns: repeat(4, 1fr );
                grid-template-rows: repeat(3, 1fr );
            }

            @media(max-width: 768px) {
                grid-template-areas: 'img-0 img-1 img-2'
                                     'img-3 img-4 img-5'
                                     'img-6 img-7 img-8'
                                     'img-9 img-9 img-9';
                grid-template-columns: repeat(3, 1fr );
                grid-template-rows: repeat(4, 1fr );
            }

            @media(max-width: 640px) {
                grid-template-areas: 'img-0 img-1'
                                     'img-2 img-3'
                                     'img-4 img-5'
                                     'img-6 img-7'
                                     'img-8 img-9';
                grid-template-columns: repeat(2, 1fr );
                grid-template-rows: repeat(5, 1fr );
            }

            @media(max-width: 500px) {
                grid-template-areas: 'img-0'
                                     'img-1'
                                     'img-2'
                                     'img-3'
                                     'img-4'
                                     'img-5'
                                     'img-6'
                                     'img-7'
                                     'img-8'
                                     'img-9';
                grid-template-columns: repeat(1, 1fr );
                grid-template-rows: repeat(10, 1fr );
            }

            &__link {
                margin: 15px;
                min-width: 160px;
                max-width: 160px;
                min-height: 30px;
                justify-self: center;

                @media(max-width: 500px) {
                    min-width: 200px;
                    max-width: 200px;
                }
            }

            .img-0 {
                grid-area: img-0;
            }

            .img-1 {
                grid-area: img-1;

                @media(max-width: 500px) {
                    min-width: 250px;
                    max-width: 250px;
                }
            }

            .img-2 {
                grid-area: img-2;
                max-width: 120px;
                min-width: 120px;
                margin: 0 auto;
                display: block;

                @media(max-width: 500px) {
                    min-width: 160px;
                    max-width: 160px;
                }
            }
            .img-3 {
                grid-area: img-3;
            }

            .img-3,
            .img-6,
            .img-8,
            .img-9 {

                @media(max-width: 500px) {
                    min-width: 250px;
                    max-width: 250px;
                }
            }

            .img-4 {
                grid-area: img-4;
                min-width: 120px;
                max-width: 120px;
                margin: 0 auto;
                display: block;

                @media(max-width: 500px) {
                    min-width: 250px;
                    max-width: 250px;
                }
            }

            .img-5 {
                grid-area: img-5;
            }

            .img-6 {
                grid-area: img-6;
                @media(max-width: 500px) {
                    min-width: 230px;
                    max-width: 230px;
                }
            }

            .img-7 {
                grid-area: img-7;
                max-width: 120px;
                min-width: 120px;
                margin: 0 auto;
                display: block;

                @media(max-width: 500px) {
                    min-width: 200px;
                    max-width: 200px;
                }
            }

            .img-8 {
                grid-area: img-8;
            }

            .img-9 {
                grid-area: img-9;
            }

            &__link:hover .partners-container__link__img img {
                transform: scale(1.2);
            }
        }
    }
</style>