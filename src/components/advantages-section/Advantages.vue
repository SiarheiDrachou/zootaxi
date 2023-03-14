<template>
    <section class="advantages">
        <div class="advantages-information">
            <div class="advantages-information-1">
                <h3 class="advantages-information-1__header">{{ textAdvantages.ourAdvantages }}</h3>

                <AdvantagesInformationList :textAdvantages="textAdvantages" />

                <Social class="none" />

                <div class="advantages-information-1-container">
                    <a class="advantages-information-1-container__link" @click="scrollLink('servicesAnchor')">{{ textAdvantages.services }}</a>

                    <a class="advantages-information-1-container__link" @click="scrollLink('priceAnchor')">{{ textAdvantages.prices }}</a>

                    <a class="advantages-information-1-container__link" @click="scrollLink('header')">{{ textAdvantages.contacts }}</a>
                </div>
            </div>

            <div class="advantages-information-2">
                <h3 class="advantages-information-2__header">{{ textAdvantages.popularTransportation }}</h3>

                <a class="advantages-information-2__link" @click="scrollLink('taxiAnchor')">{{ textAdvantages.transportationInBelarus }}</a>
                
                <a class="advantages-information-2__link" @click="scrollLink('ownerAnchor')">{{ textAdvantages.whithPerson }}</a>
                
                <a class="advantages-information-2__link" @click="scrollLink('cityAnchor')">{{ textAdvantages.outCity }}</a>
            </div>

            <div class="advantages-information-3">
                <h3 class="advantages-information-3__header">{{ textAdvantages.workingHours }}</h3>

                <p class="advantages-information-3__text">
                    {{ textAdvantages.transportationRequests }}
                    <br />

                    <span class="advantages-information-3__text--bigger">{{ textAdvantages.everyDay }}</span> 

                    <br />
                    {{ textAdvantages.withoutLunch }}

                    <br />
                    <br />

                    <span class="advantages-information-3__text--yellow">{{ textAdvantages.attention }}</span>

                    <br />

                    {{ textAdvantages.nightTransportation }} <span class="advantages-information-3__text--18">21:00</span> по <span class="advantages-information-3__text--18">09:00</span>
                    <br />
                    {{ textAdvantages.booked }} <span class="advantages-information-3__text--16">с 8:00</span> по <span class="advantages-information-3__text--16">23:00</span>
                </p>
            </div>
        </div>
        
        <div class="advantages-social">
            <a class="advantages-social__link advantages-social__link-condition" @click="scrollLink('priceAnchor')">{{ textAdvantages.conditionsAndCosts }}</a> 

            <Social />
            
            <a class="advantages-social__link advantages-social__link-inform" @click="scrollLink('informationAnchor')">{{ textAdvantages.information }}</a>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        components: {
            Social: () => import(/* webpackChunkName: "SocialNetworks" */ "../Social-networks/Social"),
            AdvantagesInformationList: () => import(/* webpackChunkName: "Advantages" */ "./AdvantagesInformationList.vue"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textAdvantages() {
                if (this.text) { 
                    let text = this.text.advantages;

                    return text;
                }

                return {}
            }
        },
        methods: {
            ...mapActions({
                scrollLink: 'scrollLink'
            }),
            scroll(name) {
                const city = document.querySelector(`.${name}`);
                
                window.scrollTo({
                    top: city.getBoundingClientRect().top + pageYOffset - 400,
                    behavior: "smooth"
                });
            }
        }
    }
</script>

<style lang="scss">
    .advantages {
        background-color: rgb(39, 45, 64);
        padding: 30px 40px 20px;

        @media(max-width: 500px) {
            padding: 30px 30px 20px;
        }

        @media(max-width: 400px) {
            padding: 30px 15px 20px;
        }

        &-information {
            display: flex;
            justify-content: space-between;
            max-width: 1170px;
            width: 100%;
            margin: 0 auto;

            @media(max-width: 1024px) {
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            @media(max-width: 400px) {
                width: 100%;
            }
            
            &-1 {
                width: 30%;
                max-width: 750px;

                @media(max-width: 1024px) {
                    width: 100%;
                }

                &-container {
                    display: flex;
                    justify-content: space-between;
                    width: 90%;
                    margin: 30px auto;

                    @media(min-width: 1024px) {
                        display: none;
                    }

                    @media(max-width: 400px) {
                        width: 100%;
                    }

                    &__link {
                        width: 30%;
                        background-color: rgb(182, 47, 47);
                        border-radius: 25px;
                        border: 2px solid rgb(146, 38, 38);
                        padding: 6px;
                        font-size: 14px;
                        color: rgb(255, 255, 255);
                        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
                        text-align: center;

                        @media(max-width: 400px) {
                            min-width: 85px;
                        }
                    }

                    &__link:hover {
                        background-color: rgb(255, 255, 255);
                        color: rgb(182, 47, 47);
                        animation-name: pulse;
                        animation-duration: 0.5s;
                        animation-timing-function: linear;
                        animation-iteration-count: infinite;

                    }
                }

                &__header {
                    color: rgb(199, 29, 26);
                    text-align: center;
                    text-transform: uppercase;
                    opacity: 1;
                    font-size: 22px;

                    @media(max-width: 400px) {
                        font-size: 16px;
                    }
                }

                &__list {
                    margin: 20px 0;
                    opacity: 0.65;

                    @media(max-width: 400px) {
                        padding-left: 15px;
                        width: 285px;
                        margin: 20px auto;
                    }
                    
                    &__item {
                        color: white;
                        font-size: 18px;
                        font-style: italic;
                        font-weight: 700;

                        @media(max-width: 400px) {
                            font-size: 14px;
                        }

                        &--color {
                            color: rgb(255, 244, 103);
                        }
                    }
                }
            }

            &-2 {
                width: 30%;
                max-width: 450px;

                @media(max-width: 1024px) {
                    width: 100%;
                }

                &__header {
                    color: white;
                    text-align: center;
                    font-style: italic;
                    text-transform: uppercase;
                    margin-bottom: 20px;
                    opacity: 0.65;
                    font-size: 22px;

                    @media(max-width: 400px) {
                        font-size: 20px;
                    }

                    @media(max-width: 400px) {
                        color: rgb(224, 33, 29);
                        font-size: 18px;
                        text-align: center;
                    }
                }

                &__link {
                    background-color: rgb(182, 47, 47);
                    border-radius: 10px;
                    border: 2px solid white;
                    padding: 8px 24px;
                    font-size: 16px;
                    color: rgb(255, 255, 255);
                    font-family: "Roboto";
                    display: block;
                    width: fit-content;
                    margin-bottom: 10px;
                    margin-left: auto;
                    text-transform: uppercase;
                    text-decoration: none;

                    @media(max-width: 1024px) {
                        margin: 10px auto;
                    }
                }

                &__link:hover {
                    animation-name: hvr-wobble-vertical;
                    animation-duration: 1s;
                    animation-timing-function: ease-in-out;
                    animation-iteration-count: 1;
                }

            }

            &-3 {
                width: 30%;
                opacity: 0.65;
                max-width: 600px;

                @media(max-width: 1024px) {
                    width: 100%;
                }

                &__header {
                    color: white;
                    text-align: center;
                    margin-bottom: 15px;
                    text-transform: uppercase;
                    font-size: 22px;

                    @media(max-width: 1024px) {
                        text-align: center;
                        margin-top: 15px;
                    }

                    @media(max-width: 400px) {
                        font-size: 18px;
                        color: rgb(224, 33, 29);
                        text-transform: uppercase;
                        margin-top: 20px;
                    }
                }

                &__text {
                    font-style: italic;
                    color: white;
                    text-align: center;
                    font-weight: 700;
                    font-size: 16px;

                    &--bigger {
                        font-size: 20px;
                    }

                    &--18 {
                        font-size: 18px;
                    }

                    &--16 {
                        font-size: 16px;
                    }

                    &--yellow {
                        font-weight: 700;
                        font-style: italic;
                        color: #FFF799;
                        font-size: 18px;
                        text-transform: uppercase;
                    }
                }
            }
        }

        &-social {
            display: flex;
            justify-content: center;
            align-items: center;
            max-width: 1170px;
            margin: 30px auto;
            padding: 0 120px 0 100px;

            @media(max-width: 1024px) {
                display: none;
            }

            &__link {
                background-color: rgb(182, 47, 47);
                border-radius: 25px;
                border: 2px solid rgb(146, 38, 38);
                padding: 8px 24px;
                font-size: 16px;
                text-align: center;
                color: rgb(255, 255, 255);
                font-family: "Roboto";
                text-transform: uppercase;
                width: fit-content;

                &-condition {
                    min-width: 260px;
                }

                &-inform {
                    min-width: 170px;
                }
            }

            &__link:hover {
                background-color: rgb(255, 255, 255);
                color: rgb(182, 47, 47);
                text-decoration: none;
            }
        }
    }

    .none {
        
        @media(min-width: 1024px) {
            display: none !important;
        }
    }
</style>