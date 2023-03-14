<template>
    <div class="contacts">
        <a href="tel:+375447144111" class="contacts__link">
            + 
            <span class="contacts__link--code">375</span> 
            <span class="contacts__link--mask">(44)</span>
            <span class="contacts__link--first">7</span>
            <span class="contacts__link--second">144</span>
            <span class="contacts__link--third a1">111</span>
        </a>
        <a href="tel:+375257144111" class="contacts__link">
            + 
            <span class="contacts__link--code">375</span> 
            <span class="contacts__link--mask">(25)</span>
            <span class="contacts__link--first">7</span>
            <span class="contacts__link--second">144</span>
            <span class="contacts__link--third life">111</span>
        </a>

        <button class="contacts__button" @click="getCallMe">
            <span class="contacts__button__text">
                <img class="contacts__button__text__svg" src="https://zootaxi.by/images/call.svg" alt="phone img">

                {{ textContacts.callBack }}
            </span>
        </button>

        <p class="contacts__text">
            {{ textContacts.petServicse }}
        </p>

        <Messangers />
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        components: {
            Messangers: () => import(/* webpackChunkName: "Messangers" */ "../messangers/Messangers"),
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textContacts() {
                if (this.text) { 
                    let text = this.text.contacts;

                    return text;
                }

                return {}
            }
        },
        methods: {
            ...mapActions({
                getCallMe: 'getCallMe'
            }),
        },
    }
</script>

<style lang="scss" scoped>
    .contacts {
        min-width: 340px;
        max-width: 340px;

        @media(max-width: 1280px) {
            min-width: 300px;
        }

        @media (max-width: 1024px) {
            min-width: auto;
            max-width: none;
            background-color: rgba(255,255,255,0.58);
        }

        &__link {
            font-size: 25px;
            font-weight: 900;
            color: rgb(100, 14, 13);
            font-family: Roboto,sans-serif;
            position: relative;
            letter-spacing: 1px;
            display: block;
            margin-left: 10px;

            @media (max-width: 1024px) {
                padding: 10px 20px;
                width: fit-content;
                background-color: rgb(39, 45, 64);
                color: #FFF;
                border-radius: 22px;
                text-align: center;
                margin: 0 auto;
            }

            @media (max-width: 768px) {
                padding: 15px;
                font-size: 22px;
            }

            @media (max-width: 400px) {
                font-size: 18px;
                margin: 0 auto 0 30px;
                padding: 5px 20px;
            }

            &--code,
            &--mask,
            &--first,
            &--second,
            &--third {
                position: relative;
                margin-left: 5px;
            }
        }

        &__link:nth-child(2) {
            margin-top: 10px;
        }

        &__button {
            position: relative;
            background-color: rgb(182, 47, 47);
            border-radius: 10px;
            border: 1px solid rgb(146, 38, 38);
            padding: 8px 24px 8px 40px;
            box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
            width: 90%;
            margin: 0 auto;
            margin-top: 10px;
            display: block;
            text-transform: uppercase;

            @media (max-width: 1024px) {
                display: block;
                width: fit-content;
                margin: 15px auto;
            }

            @media (max-width: 400px) {
                width: 90%;
            }

            &__text {
                font-size: 18px;
                color: rgb(255, 255, 255);

                &__svg {
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    animation-name: pulse;
                    animation-duration: 1s;
                    animation-iteration-count: infinite;
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
            color: black;
            font-size: 20px;
            text-align: center;
            padding-top: 15px;

            @media (max-width: 1024px) {
                display: none;
            }
        }

        .a1::after {
            content: ' ';
            position: absolute;
            top: 2px;
            right: -40px;
            width: 25px;
            height: 25px;
            background-image: url('https://zootaxi.by/images/a1.png');
            background-size: contain;
            background-repeat: no-repeat;

            @media (max-width: 1024px) {
                right: -60px;
                top: -4px;
            }
        }

        .life::after {
            content: ' ';
            position: absolute;
            top: 4px;
            right: -55px;
            width: 41px;
            height: 35px;
            background-image: url('https://zootaxi.by/images/life.png');
            background-size: contain;
            background-repeat: no-repeat;

            @media (max-width: 1024px) {
                right: -75px;
            }
        }
    }
</style>