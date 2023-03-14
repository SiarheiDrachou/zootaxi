<template>
    <div class="input">
        <div class="input-container">
            <picture class="input-container__img">
                <img src="https://zootaxi.by/images/neok.png" alt="error img" />
            </picture>

            <h2 class="input-container__header">
                {{ textInput.fieldsIncorrectly }}
            </h2>

            <p v-if="notPhone" class="input-container__text">{{ textInput.phoneRequired }}</p>

            <p v-else class="input-container__text">{{ textInput.nameRequired }}</p>

            <button @click="getNotInput" class="input-container__button">{{ textInput.ok }}</button>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                getNotInput: 'getNotInput'
            }),
        },
        computed: {
            ...mapState({
                notName: state => state.notName,
                notPhone: state => state.notPhone,
                text: state => state.text,
            }),
            textInput() {
                if (this.text) { 
                    let text = this.text.input;

                    return text;
                }

                return {}
            }
        }
    }
</script>

<style lang="scss" scoped>
    .input {
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
                width: 300px;
            }

            &__img {
                margin: 15px auto;
                display: block;
                max-width: 100px;
            }

            &__header {
                text-align: center;
            }

            &__text {
                margin-top: 20px;
                text-align: center;
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