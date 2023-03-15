<template>
    <section class="information">
        <a class="informationAnchor anchor"></a>
        <h1 class="information__header">{{ textInformation.information }}</h1>
        
        <div class="flex">
            <div class="information-container">
                <Rules :textInformation="textInformation" />
            </div>

            <Youtube />
        </div>
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import Rules from './Rules.vue'
    import Youtube from './Youtube.vue'

    export default {
        components: {
            Rules,
            Youtube,
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textInformation() {
                if (this.text) { 
                    let text = this.text.information;

                    return text;
                }

                return {}
            }
        },
    };
</script>

<style lang="scss">
    .information {
        position: relative;
        padding: 20px 20px 60px 20px;
        width: 100%;

        .flex {
            display: flex;
            justify-content: center;
            align-items: flex-start;

            @media(max-width: 768px) {
                display: block;
            }
        }

        &__header {
            color: rgb(157, 10, 15);
            text-align: center;
            margin-bottom: 35px;
            display: block;
            text-transform: uppercase;
            font-size: 36px;

            @media(max-width: 768px) {
                font-size: 28px;
            }
        }

        &-container {
            max-width: 455px;
            width: 45%;
            background-color: rgb(255, 255, 255);
            color: #333;
            border-radius: 5px;
            border: 1px solid rgb(217, 217, 217);
            box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
            padding: 5px;
            height: auto;

            @media(max-width: 768px) {
                width: 90%;
                margin: 0 auto;
            }

            @media(max-width: 768px) {
                height: auto;
            }

            &-rules {

                &__img {
                    width: 100%;

                    @media(max-width: 500px) {
                        height: auto;
                    }
                }

                &__text {
                    width: 100%;
                    position: relative;
                    margin-top: 5px;
                    cursor: pointer;

                    img {
                        position: absolute;
                        top: 10px;
                        left: 5px;
                        transition-duration: 1s;
                    }

                    span {
                        font-size: 22px;
                        font-weight: 700;
                        color: rgb(157, 10, 15);
                        text-align: center;
                        display: block;
                        padding-left: 20px;

                        @media(max-width: 320px) {
                            font-size: 14px;
                        }

                        b {

                            @media(max-width: 768px) {
                                font-size: 18px;
                            }

                            @media(max-width: 320px) {
                                font-size: 14px;
                            }
                        }


                    }
                }

                &__descr {

                    &__header {
                        font-size: 16px;
                        color: #333333;
                        margin-top: 10px;
                        padding-left: 5px;
                        width: 80%;
                    }

                    &__list {
                        padding-left: 40px;
                        width: 80%;
                    }

                    &__button {
                        background-color: rgb(39, 46, 64);
                        border-radius: 5px;
                        border: 1px solid rgb(31, 37, 51);
                        padding: 8px 24px;
                        font-size: 15px;
                        font-weight: bold;
                        color: rgb(255, 255, 255);
                        display: block;
                        margin: 0 auto;
                        margin-top: 15px;
                        max-width: 150px;
                        text-align: center;
                        text-decoration: none;
                    }

                    &__attention {
                        opacity: 0.6;
                        padding: 15px 40px;

                        &--right {
                            text-align: right;
                            width: 100%;
                        }
                    }
                }
            }
        }

        &__video {
            width: 515px;
            height: 388px;
            margin-left: 50px;

            @media(max-width: 900px) {
                height: 360px;
            }

            @media(max-width: 768px) {
                width: 90%;
                display: block;
                margin: 0 auto;
                margin-top: 30px;
                max-width: 455px;
            }

            @media(max-width: 500px) {
                height: 371px;
            }

            @media(max-width: 400px) {
                height: 300px;
            }
        }
    }
</style>