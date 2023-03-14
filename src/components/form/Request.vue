<template>
    <div class="opacity" @click="close($event)">
        <form class="form" validate @submit.prevent>
            <h3 class="form__header" :class="{'form__header--center': help || callMe}">
                <span v-if="!firstRequest">{{ textRequest.request }}</span>

                <span v-if="help">{{ textRequest.intercityRequest }}</span>

                <span v-if="intercity">{{ textRequest.intercityRequestDiscont }}</span>

                <span v-if="callMe">{{ textRequest.callbackRequest }}</span>

                <picture class="form__img-close">
                    <img src="https://zootaxi.by/images/close.svg" alt="close img" />
                </picture>
            </h3>

            <div class="form-container">
                <label class="form-container__label">{{ textRequest.name }} <span style="color: red;">*</span></label>

                <input 
                    type="text" 
                    class="form-container__input"
                    v-model="inputName"
                    ref="inputNames"
                />

                <label class="form-container__label">{{ textRequest.phoneNumber }} <span style="color: red;">*</span></label>

                <input 
                    type="tel" 
                    class="form-container__input"
                    v-model="inputPhone"
                    v-mask="{mask: phoneMask, greedy: false }"
                    @input="maskCheck"
                    ref="inputPhones"
                />

                <button class="form-container__button" @click="sendMessage()" ref="button">
                    <span v-if="!callMe && !help && !intercity">{{ textRequest.sendrequest }}</span>

                    <span v-if="callMe">{{ textRequest.callMe }}</span>

                    <span v-if="intercity">{{ textRequest.requestDiscont }}</span>

                    <span v-if="help">{{ textRequest.consultMe }}</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                inputName: '',
                inputPhone: null,
                phoneMask: "375-99-999-99-99",
            }
        },
        methods: {
            ...mapActions({
                getFirstRequest: 'getFirstRequest',
                sendMessage: 'sendMessage',
                getHelp: 'getHelp',
                getResetRequest: 'getResetRequest',
                getName: 'getName',
                getPhone: 'getPhone',
            }),
            close(event) {
                if(
                    event.target == this.$refs.button 
                    || event.target == this.$refs.inputNames 
                    || event.target == this.$refs.inputPhones
                ) {
                    return ;
                }
                else {
                    this.getResetRequest();
                }
            },
            maskCheck: function(field) {
                if (field.target.inputmask.isValid(this.inputPhone)) {
                    if (
                        this.inputPhone.split('-')[1] == '25' ||
                        this.inputPhone.split('-')[1] == '29' ||
                        this.inputPhone.split('-')[1] == '44' ||
                        this.inputPhone.split('-')[1] == '33'

                    ) {
                        this.getPhone(this.inputPhone);
                    } else {
                        this.getPhone(null);
                    }
                }
            }
        },
        computed: {
            ...mapState({
                firstRequest: state => state.firstRequest,
                help: state => state.help,
                callMe: state => state.callMe,
                success: state => state.success,
                intercity: state => state.intercity,
                text: state => state.text,
            }),
            textRequest() {
                if (this.text) {
                    let text = this.text.request;

                    return text;
                }

                return {}
            }
        },
        watch: {
            inputName: function(inputName) {
                this.getName(inputName);
            },
            success: function(success) {
                if(success) {
                    this.inputName = '';
                    this.inputPhone = null;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    .opacity {
        background-color: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 4;
    }

    .form {
        width: 400px;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translate(-50%);

        @media(max-width: 500px) {
            width: 90%;
        }

        &__header {
            padding: 10px;
            font-weight: 700;
            position: relative;

            &--center {
                text-align: center;
            }
        }

        &__img-close {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 10px;
            cursor: pointer;
        }

        &-container {
            padding: 0 15px;

            &__input {
                display: block;
                width: 100%;
                height: 34px;
                padding: 0 12px;
                font-size: 14px;
                line-height: 1.42857143;
                color: #555;
                background-color: #fff;
                border: 1px solid #ccc;
                border-radius: 4px;
                -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
            }

            &__label {
                margin: 15px 0 10px;
                display: block;
            }

            &__button {
                background-color: rgb(209, 75, 65);
                border-radius: 5px;
                border-style: solid;
                border-top-width: 1px;
                border-bottom-width: 3px;
                border-left-width: 1px;
                border-right-width: 1px;
                border-color: rgb(176, 52, 43);
                padding: 8px 16px;
                font-size: 18px;
                color: rgb(255, 255, 255);
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
                margin-top: 15px;
                width: 100%;
                margin-bottom: 15px;

                @media(max-width: 400px) {
                    font-size: 14px;
                }
            }
        }

        
    }
</style>