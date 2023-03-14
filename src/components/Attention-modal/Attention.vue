<template>
    <div class="opacity" @click="close" v-show="textAttention.visible">
        <div class="attention">
            <picture class="img-close">
                <img src="https://zootaxi.by/images/close.svg" alt="close img" />
            </picture>
            <div class="attention__text" v-html="textAttention.text"></div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                getFirstRequest: 'getFirstRequest',
            }),
            close() {
                this.textAttention.visible = false;
            },
        },
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textAttention() {
                if (this.text) {
                    let text = this.text.attention;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss" scoped>
    .opacity {
        background-color: rgba(255, 255, 255, 0.9);
        width: 90%;
        max-width: 1024px;
        padding: 75px 50px;
        position: fixed;
        z-index: 5;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -70%);

        @media (max-width: 1700px) {
            max-width: 840px;
        }

        @media (max-width: 968px) {
            max-width: 690px;
        }

        @media (max-width: 768px) {
            max-width: 450px;
        }

        @media (max-width: 500px) {
            padding: 50px 25px;
            max-width: 300px;
        }
    }

    .attention {

        .img-close {
            position: absolute;
            top: 20px;
            right: 20px;
            width: 20px;
            cursor: pointer;
        }

        &__text {
            color: red;
            font-size: 25px;
            font-weight: bold;

            @media (max-width: 1700px) {
                font-size: 20px;
            }

            @media (max-width: 968px) {
                font-size: 16px;
            }

            @media (max-width: 768px) {
                font-size: 14px;
            }

            @media (max-width: 500px) {
                font-size: 12px;
            }
        }
    }

    
</style>