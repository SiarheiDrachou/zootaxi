<template>
    <footer class="footer">
        <a class="contactsAnchor anchor"></a>
        <div v-if="isSvg" class="footer__svg-top"></div>
        
        <FooterContact :scroll="scroll" :textFooter="textFooter" />

        <svg class="footer__svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 0 100 H 100 V 0 H 100 L 50 100 L 0 0 H 0 Z" style="fill: white;"></path>
        </svg>

        <svg class="footer__svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none" style="position: relative; top: -6px;">
            <path d="M 0 0 L 50 100 L 100 0 Z" style="fill: white;"></path>
        </svg>

        <FooterPay :textFooter="textFooter" />
    </footer>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                scroll: false
            }
        },
        props: {
            isSvg: {
                default: true,
            },
        },
        components: {
            FooterPay: () => import(/* webpackChunkName: "Footer" */ "./FooterPay.vue"),
            FooterContact: () => import(/* webpackChunkName: "Footer" */ "./FooterContact.vue"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textFooter() {
                if (this.text) { 
                    let text = this.text.footer;

                    return text;
                }

                return {}
            },
        },
        mounted() {
            window.onscroll = () => {
                if(pageYOffset > document.querySelector('.footer-contact').getBoundingClientRect().top) {
                    this.scroll = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .footer {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-bottom: 30px;
        background-color: rgb(39, 46, 64);

        &-contact {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            padding: 0 25px;
            max-width: 1280px;
            margin: 0 auto;

            @media(max-width: 900px) {
                display: none;
            }

            &__img {
                width: 335px;
                max-width: 30%;
                position: relative;

                &--fly {
                    animation-name: dogFly;
                    animation-duration: 1s;
                    animation-timing-function: linear;
                }
            }

            &-social {
                max-width: 35%;

                &__link {
                    background-color: rgb(255, 255, 255);
                    border-radius: 50px 50px 0 0;
                    border: 2px solid rgb(71, 84, 118);
                    padding: 8px 24px;
                    font-size: 14px;
                    font-weight: bold;
                    color: rgb(71, 84, 118);
                    margin: 0 auto;
                    margin-bottom: 10px;
                    width: 100px;
                    display: block;
                }

                &__link:hover {
                    background-color: rgb(162, 194, 249);
                    border-color: rgb(57, 67, 94);
                    color: rgb(57, 67, 94);
                }

                &__header {
                    text-align: center;
                    color: white;
                    font-size: 30px;
                    margin-top: 30px;
                }
                
                &__text {
                    font-size: 20px;
                    text-align: center;
                    color: white;
                    font-weight: 700;
                    padding-bottom: 15px;
                }

                &-support {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 15px;

                    &__link {
                        background-color: rgb(182, 47, 47);
                        border-radius: 10px;
                        border: 1px solid rgb(146, 38, 38);
                        padding: 8px 12px;
                        font-size: 14px;
                        width: 45%;
                        text-align: center;
                        color: rgb(255, 255, 255);
                    }

                    &__link:hover {
                        background-color: rgb(164, 42, 42);
                        border-color: rgb(117, 30, 30);
                        text-decoration: none;
                    }
                }
            }

            &-call {
                margin-top: 20px;
                max-width: 30%;

                &__link {
                    font-size: 18px;
                    font-weight: bold;
                    color: white;
                    font-family: Roboto,sans-serif;
                    position: relative;
                    letter-spacing: 2px;
                    display: block;
                    margin-left: 10px;
                    width: 280px;

                    &--code,
                    &--mask,
                    &--first,
                    &--second,
                    &--third {
                        margin-left: 5px;
                    }
                }

                &__link:nth-child(2) {
                    margin-top: 10px;
                }

                &__button {
                    background-color: rgb(182, 47, 47);
                    border-radius: 10px;
                    border: 1px solid rgb(146, 38, 38);
                    padding: 8px 24px;
                    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
                    width: 100%;
                    margin-top: 10px;

                    &__text {
                        font-size: 18px;
                        color: rgb(255, 255, 255);

                        img {
                            margin-right: 10px;
                        }
                    }
                }

                &__button:hover {
                    animation-name: pulse;
                    animation-duration: 0.5s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                &__text {
                    color: white;
                    font-size: 14px;
                    text-align: center;
                    margin: 0 auto;
                    margin-top: 15px;
                }

                .a1::after {
                    content: ' ';
                    position: absolute;
                    top: -2px;
                    right: 35px;
                    width: 25px;
                    height: 25px;
                    background-image: url('https://zootaxi.by/images/a1.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                }

                .life::after {
                    content: ' ';
                    position: absolute;
                    top: 4px;
                    right: 20px;
                    width: 41px;
                    height: 35px;
                    background-image: url('https://zootaxi.by/images/life.png');
                    background-size: contain;
                    background-repeat: no-repeat;
                }
            }
        }

        &__svg {
            height: 30px;
            width: 100%;

            @media(max-width: 900px) {
                display: none;
            }
        }

        &__svg-top {
            display: block;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath d='M 0 0 C 40 132 60 132 100 0 Z' style='fill: white;'%3E%3C/path%3E%3C/svg%3E%0A");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            height: 30px;
            width: 100%;
        }

        &-pay {
            max-width: 1280px;
            margin: 0 auto;
            
            &__img {
                margin: 0 auto;
                display: block;

                @media(max-width: 768px) {
                    width: 90%;
                }
            }

            &__text-copyright {
                color: white;
                text-align: center;
                margin-top: 20px;
                font-size: 12px;

                a {
                    color: white;
                    text-decoration: none;
                }
            }
        }
    }
</style>