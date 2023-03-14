<template>
    <form class="order-container__form" validate @submit.prevent>
        <p class="order-container__form__text">
            {{ textOrder.withPerson }}
            <br />
            {{ textOrder.outCity }}
            <br class="br" />
            {{ textOrder.onPlace }}
            <br />
            {{ textOrder.urgentCall }}
            <br class="br" />
            {{ textOrder.night }}
            <br />
            {{ textOrder.buysToHome }}
            <br />
            {{ textOrder.yourPets }}
        </p>

            <input 
                type="text" 
                class="order-container__form__input"
                placeholder="Имя *" 
                v-model="inputName"
            />

            <input 
                type="tel" 
                class="order-container__form__input"
                v-mask="{mask: phoneMask, greedy: false }"
                @input="maskCheck"
                placeholder="Номер телефона *" 
                v-model="inputPhone"
            />

            <button class="order-container__form__button" @click="sendMessage()">{{ textOrder.firstRequest }}</button>
    </form>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                inputName: '',
                phoneMask: "375-99-999-99-99",
                inputPhone: null,
            }
        },
        props: ['textOrder'],
        methods: {
            ...mapActions({
                sendMessage: 'sendMessage',
                getName: 'getName',
                getPhone: 'getPhone',
            }),
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
        },
        computed: {
            ...mapState({
                firstRequest: state => state.firstRequest,
                success: state => state.success,
            }),
        },
    }
</script>