<template>
    <div class="price-info" @click="close($event)">
        <div class="price-info-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>

            <h4 class="price-info-container__header" v-html="item.header"></h4>

            <hr />

            <p class="price-info-container__text" v-html="item.text"></p>

            <p class="price-info-container__attention" v-html="item.attention" v-if="item.attention"></p>

            <button class="price-info-container__button" @click="getFirstRequest" ref="button">{{ textPriceInformation.submitRequest }}</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        props: ['item'],
        methods: {
            ...mapActions({
                getFirstRequest: 'getFirstRequest',
                getClosePriceInformation: 'getClosePriceInformation'
            }),
            close(event) {
                if(event.target !== this.$refs.button) {
                    this.getClosePriceInformation(false);
                }
            }
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textPriceInformation() {
                if (this.text) { 
                    let text = this.text.priceInformation;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss" scoped>
    .price-info {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        padding-top: 70px;
        z-index: 2;
        background-color: rgba(255, 255, 255, 0.5);

        &-container {
            max-width: 600px;
            margin: 0 auto;
            position: relative;
            background-color: #fff;
            border: 1px solid #999;
            border: 1px solid rgba(0,0,0,.2);
            border-radius: 6px;
            box-shadow: 0 3px 9px rgba(0,0,0,.5);

            @media(max-width: 768px) {
                width: 90%;
            }

            &__header {
                padding: 15px 20px;
                text-align: center;
                font-size: 19px;
            }

            &__text {
                font-size: 20px;
                color: #333333;
                padding: 20px;

                @media(max-width: 600px) {
                    font-size: 17px;
                }
                
                @media(max-width: 400px) {
                    font-size: 12px;
                    padding: 20px 20px 10px 20px;
                }
            }

            &__attention {
                font-size: 16px;
                color: rgba(51, 51, 51, 0.8);
                padding: 20px;

                @media(max-width: 400px) {
                    font-size: 12px;
                    padding: 10px 20px;
                }
            }

            &__button {
                display: block;
                background-color: rgb(209, 75, 65);
                border-radius: 25px;
                border: 1px solid rgb(176, 52, 43);
                padding: 8px 24px;
                font-size: 17px;
                color: rgb(255, 255, 255);
                margin: 0 auto;
                margin-bottom: 25px;

                @media(max-width: 400px) {
                    margin-bottom: 10px;
                }
            }

            svg {
                position: absolute;
                top: 15px;
                right: 5px;
            }
        }
    }
</style>