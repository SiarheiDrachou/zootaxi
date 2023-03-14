<template>
    <section class="reviews">
        <a class="reviewsAnchor anchor"></a>
        <h2 class="reviews__header">{{ textReview.reviewsClients }}</h2>

        <ReviewsCarousel :textReview="textReview" :lazyReviews="lazyReviews" />
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ['lazyReviews'],
        components: {
            ReviewsCarousel: () => import(/* webpackChunkName: "Reviews" */ "./ReviewsCarousel"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textReview() {
                if (this.text) { 
                    let text = this.text.review;

                    return text;
                }

                return {}
            },
        },
    }
</script>

<style lang="scss">
    .reviews {
        position: relative;
        width: 100%;
        padding: 80px 50px 50px 50px;
        background-color: rgb(39, 46, 64);
        overflow: hidden;

        @media(max-width: 500px) {
            padding: 80px 30px 50px 30px;
        }

        &__header {
            text-align: center;
            color: white;
            text-transform: uppercase;

            @media(max-width: 768px) {
                font-size: 28px;
            }

            @media(max-width: 500px) {
                font-size: 24px;
            }

            @media(max-width: 400px) {
                font-size: 18px;
            }
        }

        &-container-carusel {
            padding-top: 20px;
            position: relative;
            width: 800px;
            margin: 0 auto;

            @media(max-width: 1024px) {
                width: 90%;
            }

            &-body {
                display: flex;
                overflow: hidden;

                @media(max-width: 768px) {
                    justify-content: center;
                }

                &-comment {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-around;
                    margin: 0 auto;
                    position: relative;
                    min-width: 100%;

                    &__text {
                        width: 100%;
                        padding: 0 15px;
                        font-size: 22px;
                        color: white;
                        position: absolute;
                        transition-duration: 1s;

                        @media(max-width: 768px) {
                            font-size: 20px;
                        }

                        @media(max-width: 600px) {
                            font-size: 16px;
                        }

                        @media(max-width: 400px) {
                            font-size: 12px;
                        }

                        span {
                            text-align: right;
                        }

                        picture {
                            max-width: 70px;
                        }
                    }
                }
            }

            &-iteration {
                margin-top: 20px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;

                &__circle {
                    background-color: #fff;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    margin: 5px;
                    border-radius: 50%;
                    cursor: pointer;
                }

                &__circle--active {
                    opacity: 1;
                }
            }

            .bi-arrow-left-circle {
                position: absolute;
                top: 40%;
                left: -50px;
                height: 40px;
                width: 50px;
                filter: invert(100%);
                cursor: pointer;

                @media(max-width: 400px) {
                    display: none;
                }
            }

            .bi-arrow-right-circle {
                position: absolute;
                top: 40%;
                right: -50px;
                height: 40px;
                width: 50px;
                filter: invert(100%);
                cursor: pointer;

                @media(max-width: 400px) {
                    display: none;
                }
            }
        }
    }

    .reviews::before {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, white 100%);
        transform: rotate(180deg);
    }
</style>