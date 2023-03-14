<template>
    <section class="navigation" :class="{'navigation--mobile': activeMenu}">
        <picture class="navigation__img" v-if="!activeMenu">
            <img src="https://zootaxi.by/images/bfe2e10630f836ee3f815a23b30c893c.png" alt="" />
        </picture>

        <nav class="navigation__nav">
            <ul class="navigation__nav__list">
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('header')">{{ textNav.home }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('servicesAnchor')">{{ textNav.services }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('warrantyAnchor')">{{ textNav.warranty }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('priceAnchor')">{{ textNav.price }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('specialAnchor')">{{ textNav.special }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('reviewsAnchor')">{{ textNav.review }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('partnersAnchor')">{{ textNav.partner }}</a>
                </li>
                <li class="navigation__nav__list__item">
                    <a class="navigation__nav__list__item__link" @click="scrollLink('header')">{{ textNav.contact }}</a>
                </li>
            </ul>

            <div class="mt">
                <Messangers :type="'Nav'"/>
            </div>
        </nav>
    </section>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Messangers: () => import(/* webpackChunkName: "Messangers" */ "../messangers/Messangers.vue"),
        },
        computed: {
            ...mapState({
                activeMenu: state => state.activeMenu,
                text: state => state.text,
            }),
            textNav() {
                if (this.text) { 
                    let text = this.text.nav;

                    return text;
                }

                return {}
            }
        },
        methods: {
            ...mapActions({
                getNotActiveMenu: 'getNotActiveMenu',
                scrollLink: 'scrollLink'
            })
        },
        mounted() {
            window.onresize = () => {
                if(window.clientWidth >= 1024) {
                    this.getNotActiveMenu();
                } 
            }
        },
    }
</script>

<style lang="scss">
    .navigation {
        width: 100%;
        padding: 5px 30px;
        position: sticky;
        top: 0;
        background-color: rgba(255, 255, 255, 0.5);
        z-index: 2;

        @media(max-width: 1024px) {
            display: none;
            position: relative;
            top: -100%;
        }

        &__img {
            display: block;
            margin: 0 auto;
            max-width: 500px;

            @media(max-width: 1024px) {
                max-width: 80%;
            }
        }

        &__nav {
            display: flex;
            align-items: center;
            justify-content: space-around;

            @media(max-width: 1280px) {
                justify-content: space-between;
            }
            
            &__list {
                display: flex;
                list-style-type: none;
                width: fit-content;
                flex-wrap: wrap;

                &__item {
                    background-color: rgb(39, 46, 64);
                    border-radius: 15px;
                    border: 1px solid rgb(31, 37, 51);
                    padding: 6px 12px;
                    font-size: 14px;
                    color: rgb(255, 255, 255);
                    margin-left: 10px;

                    &__link {
                        color: white;
                        text-decoration: none;
                    }
                }
            }

            &__social {
                width: 50px;

                &__img {
                    max-width: 100%;

                    source,
                    img {
                        border-radius: 50%;
                    }
                }
            }

            &__tel {
                font-size: 21px;
                font-weight: bold;
                color: rgb(182, 47, 47);
                margin: 0 20px;

                &--code,
                &--mask,
                &--first,
                &--second,
                &--third {
                    margin-left: 5px;
                }
            }

            &__tel:hover {
                text-decoration: none;
                border-color: rgb(146, 38, 38);
                color: rgb(146, 38, 38);
            }
        }

        &--mobile {
            display: none;
            transition-duration: 3s;
            position: relative;
            top: -100%;

            @media(max-width: 1024px) {
                display: block;
                position: fixed;
                top: 0;
                left: 0;
                background-color: #fff;
                width: 100%;
                height: 100%;
                transition-duration: 3s;
            }

            .navigation__nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 50px;

                @media(max-width: 1024px) {
                    flex-direction: column;
                    height: 90%;
                }

                @media(max-width: 400px) {
                    flex-direction: column;
                    height: 90%;
                }
                
                &__list {
                    display: flex;
                    justify-content: center;
                    list-style-type: none;
                    width: fit-content;
                    flex-wrap: wrap;

                    @media(max-width: 1024px) {
                        flex-direction: column;
                        justify-content: space-around;
                        height: 90%;
                    }

                    &__item {
                        background-color: rgb(39, 46, 64);
                        border-radius: 15px;
                        border: 1px solid rgb(31, 37, 51);
                        padding: 6px 12px;
                        font-size: 14px;
                        color: rgb(255, 255, 255);
                        margin-left: 10px;

                        @media(max-width: 1024px) {
                            background-color: transparent;
                            text-align: center;
                            margin: 0;
                        }

                        @media(max-width: 400px) {
                            padding: 0 12px;
                        }

                        &__link {
                            color: white;
                            text-decoration: none;

                            @media(max-width: 1024px) {
                                font-size: 20px;
                                color: black;
                            }
                        }
                    }
                }

                .navigation__nav__tel {
                    font-size: 21px;
                    font-weight: bold;
                    color: rgb(182, 47, 47);
                    margin: 0 20px;

                    &--code,
                    &--mask,
                    &--first,
                    &--second,
                    &--third {
                        margin-left: 5px;
                    }
                }

                .navigation__nav__tel:hover {
                    text-decoration: none;
                    border-color: rgb(146, 38, 38);
                    color: rgb(146, 38, 38);
                }

                .navigation__nav__social {
                    width: 50px;

                    @media(max-width: 400px) {
                        width: 40px;
                    }

                    &__img {
                        max-width: 100%;

                        source,
                        img {
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
</style>