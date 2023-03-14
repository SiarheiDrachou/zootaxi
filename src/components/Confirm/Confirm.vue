<template>
    <div class="confirm">
        <div class="confirm-container">
            <picture class="confirm-container__img confirm-container__img--success" v-if="confirm">
                <img src="https://zootaxi.by/images/ok.png" alt="ok img" />
            </picture>

            <picture class="confirm-container__img" v-else>
                <img src="https://zootaxi.by/images/neok.png" alt="error img" />
            </picture>

            <h2 class="confirm-container__header">
                {{ textConfirm.thanks }}
                <br>
                {{ textConfirm.yourApplicationHasBeenSent }}
                <br>
                {{ textConfirm.inTheNearFuture }}
                <br />
                {{ textConfirm.weWillContactYou }}
            </h2>

            <button @click="getSuccess" class="confirm-container__button">{{ textConfirm.ok }}</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                getSuccess: 'getSuccess'
            }),
        },
        computed: {
            ...mapState({
                confirm: state => state.confirm,
                text: state => state.text,
            }),
            textConfirm() {
                if (this.text) { 
                    let text = this.text.confirm;

                    return text;
                }

                return {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .confirm {
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 5;
        

        &-container {
            width: 400px;
            background-color: rgb(255, 255, 255);
            border-radius: 10px;
            position: fixed;
            top: 100px;
            left: 50%;
            transform: translate(-50%);

            @media(max-width: 400px) {
                width: 280px;
            }

            &__img {
                margin: 15px auto;
                display: block;
                max-width: 100px;
            }

            &__header {
                text-align: center;

                @media(max-width: 400px) {
                    font-size: 18px;
                }
            }

            &__button {
                display: block;
                background-color: #aedef4;
                color: #fff;
                border: none;
                box-shadow: none;
                font-size: 17px;
                font-weight: 500;
                border-radius: 5px;
                padding: 10px 32px;
                margin: 26px auto 15px;
                cursor: pointer;
            }
        }
    }
</style>