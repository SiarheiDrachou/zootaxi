<template>
    <div class="order-modal" v-if="view">
        <div class="order-modal-cont">
            <p class="order-modal__text">
                {{ textOrderModal.todayDiscount }}
                <br class="mobile" /> 
                <b><span class="order-modal__text--large">-10%</span> {{ textOrderModal.firstOrder }}</b> 
                <br class="tablet" /> 
                {{ textOrderModal.intercityTransportation }}
                <br class="mobile" /> 
                {{ textOrderModal.fromSite }}
            </p>

            <button class="order-modal__button" @click="getIntercity(true)">{{ textOrderModal.tap }}</button>

            <picture class="order-modal__img-close" @click="view = false">
                <img src="https://zootaxi.by/images/close.svg" alt="close img" />
            </picture>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                view: true,
            }
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textOrderModal() {
                if (this.text) { 
                    let text = this.text.orderModal;

                    return text;
                }

                return {}
            }
        },
        methods: {
            ...mapActions({
                getIntercity: 'getIntercity',
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .order-modal {
        position: fixed;
        bottom: 0;
        z-index: 3;
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.9);

        &-cont {
            width: 100%;
            max-width: 1900px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;

             @media(max-width: 400px) {
                padding: 20px 10px;
            }
        }

        &__text {
            font-size: 14px;
            color: rgba(255, 0, 0, 0.9);
            text-align: center;
            min-width: 170px;

            @media(max-width: 400px) {
                max-width: 200px;
                font-size: 12px;
            }

            &--large {
                font-size: 18px;
            }
        }

        &__button {
            width: 30%;
            max-width: 500px;
            margin-left: 25px;
            background-color: orange;
            border: none;
            border-radius: 20px;
            padding: 12px 16px;
            color: rgba(255, 255, 255, 0.8);
            font-size: 20px;

            @media(max-width: 768px) {
                font-size: 16px;
            }

            @media(max-width: 500px) {
                font-size: 16px;
            }

            @media(max-width: 400px) {
                min-width: 120px;
                margin-left: 0px
            }
        }

        &__img-close {
            position: absolute;
            top: 8px;
            right: 8px;
            height: 12px;
            width: 12px;
        }
    }

    .tablet {
        display: none;
        
        @media(max-width: 1000px) {
            display: block;
        }
    }
    .mobile {
        display: none;

        @media(max-width: 600px) {
            display: block;
        }
    }

</style>