<template>
    <header class="header" id="header">
        <Logo :textHeader="textHeader" />

        <div class="header__text">
            <a name="top" class="anchor">
                <picture class="header__text__img">
                    <img src="https://zootaxi.by/images/image_2021-01-25_15-52-01.png" alt="" />
                </picture>
            </a>
            <h1 class="header__text--bold">
                {{ textHeader.transportHomePets }}

                <br />

                <span class="header__text--red">
                    {{ textHeader.zootaxiMinsk }}
                </span>
            </h1>

            <span class="header__text--medium">
                {{ textHeader.comfortablyAnywhere }}

                <br />

                {{ textHeader.minskAndBelarus }}
            </span>
        </div>

        <Contacts />
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    import Contacts from '../Contacts/Contacts.vue'
    import Logo from './Logo.vue'

    export default {
        components: {
            Contacts,
            Logo,
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textHeader() {
                if (this.text) { 
                    let text = this.text.header;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .header {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 20px 0 40px;
        width: 100%;
        max-width: 1170px;
        margin: 0 auto;

        @media(max-width: 1280px) {
            padding-bottom: 20px;
            padding: 20px 20px 40px;
        }

        @media(max-width: 1025px) {
            flex-direction: column;
            padding: 0;
            background-image: url('https://zootaxi.by/images/header-bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
        }

        &-logo {
            position: relative;

            @media(max-width: 1025px) {
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 50px;
                padding: 10px 50px;
                width: 100%;
                background-color: #fff;
                position: fixed;
                top: 0;
                z-index: 3;
            }

            @media(max-width: 400px) {
                padding: 10px 40px 10px 10px;
            }

            &__img {
                position: relative;
                width: 350px;
                animation-name: dogFly;
                animation-duration: 1s;
                animation-timing-function: linear;

                @media(max-width: 1025px) {
                    width: 100px;
                    min-width: auto;
                }

                &::after {
                    content: ' ';
                    position: absolute;
                    bottom: -50px;
                    right: 0;
                    width: 200px;
                    height: 70px;
                    background-image: url('https://zootaxi.by/images/image_2021-01-25_15-52-01.png');
                    background-size: contain;
                    background-repeat: no-repeat;

                    @media(max-width: 1025px) {
                        display: none;
                    }
                }

                &-site {
                    max-width: 200px;

                    @media(min-width: 1025px) {
                        display: none;
                    }

                    @media(max-width: 500px) {
                        max-width: 150px;
                    }
                }
            }
        }

        &__text {
            text-align: center;
            min-width: 460px;
            max-width: 460px;

            @media(max-width: 1280px) {
                min-width: 350px;
            }

            @media(max-width: 1025px) {
                width: 100%;
                min-width: auto;
                max-width: none;
                padding-bottom: 25px;
                padding-top: 60px;
                background-color: rgba(255,255,255,0.58);
            }

            &__img {
                display: block;
                margin: 0 auto;
                width: 380px;

                @media(min-width: 1025px) {
                    display: none;
                }

                @media(max-width: 400px) {
                    width: 300px;
                    margin-bottom: 15px;
                }
            }

            &--bold {
                color: rgb(0, 32, 86);
                font-family: Roboto, sans-serif;
                font-weight: 900;
                font-size: 36px;
                margin-top: 15px;
                margin-bottom: 10px;

                @media(max-width: 1280px) {
                    font-size: 30px;
                }

                @media(max-width: 1025px) {
                    padding: 15px 0;
                    color: white;
                    background-color: rgb(39, 45, 64);
                    border-radius: 6px;
                    width: 70%;
                    margin: 0 auto;
                }

                @media (max-width: 400px) {
                    width: 90%;
                    font-size: 22px;
                }
            }

            &--red {
                color: rgb(150, 22, 19);
                font-size: 28px;
                font-weight: 500;

                @media(max-width: 400px) {
                    font-size: 19px;
                }
            }

            &--medium {
                color: rgb(0, 32, 86);
                font-size: 22px;
                font-family: Roboto, sans-serif;
                font-weight: 600;

                @media(max-width: 1025px) {
                    color: rgb(121, 0, 0);
                    margin-top: 16px;
                    display: inline-block;
                }

                @media(max-width: 400px) {
                    font-size: 19px;
                }
            }
        }

        &__menu {
            position: absolute;
            top: 15px;
            right: 20px;
            width: 25px;
            filter: invert(100%);
            cursor: pointer;

            @media(min-width: 1025px) {
                display: none;
            }
        }
        &__close {
            position: absolute;
            top: 15px;
            right: 20px;
            width: 25px;
            cursor: pointer;

            @media(min-width: 1025px) {
                display: none;
            }
        }
    }
</style>