<template>
    <div :class="{'mt': type === 'Nav', 'messangers': !type}">
        <a :class="{'navigation__nav__social': type === 'Nav', 'messangers__link': !type}" :href="viberLink" target="_blank">
            <picture :class="{'navigation__nav__social__img': type === 'Nav', 'messangers__link__img': !type}">
                <source
                    srcset="https://zootaxi.by/images/viber.webp"
                    alt="viber logo"
                    type="image/webp"
                />
                <img src="https://zootaxi.by/images/viber.png" alt="viber logo" />
            </picture>
        </a>
        
        <a :class="{'navigation__nav__social': type === 'Nav', 'messangers__link': !type}" href="https://wa.me/375447144111" target="_blank">
            <picture :class="{'navigation__nav__social__img': type === 'Nav', 'messangers__link__img': !type}">
                <source
                    srcset="https://zootaxi.by/images/whatsapp.webp"
                    alt="whatsapp logo"
                    type="image/webp"
                />
                <img src="https://zootaxi.by/images/whatsapp.png" alt="whatsapp logo" />
            </picture>
        </a>
        
        <a :class="{'navigation__nav__social': type === 'Nav', 'messangers__link': !type}" href="https://telegram.im/@zootaxiby" target="_blank">
            <picture :class="{'navigation__nav__social__img': type === 'Nav', 'messangers__link__img': !type}">
                <source
                    srcset="https://zootaxi.by/images/telegram.webp"
                    alt="telegram logo"
                    type="image/webp"
                />
                <img src="https://zootaxi.by/images/telegram.png" alt="telegram logo" />
            </picture>
        </a>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    
    export default {
        props: ['type'],
        computed: {
            ...mapState({
                viberLink: state => state.viberLink,
            })
        },
    }
</script>

<style lang="scss" scoped>
    .messangers {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px 0;

        @media(min-width: 1024px) {
            display: none;
        }

        &__link {
            width: 75px;
            margin: 0 20px;

            @media (max-width: 768px) {
                width: 50px;
            }

            @media (max-width: 500px) {
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

    .mt {
        display: grid;
        grid-gap: 10px;
        grid-auto-flow: column;

        @media(max-width: 1024px) {
            margin-top: 20px;
        }
    }
</style>