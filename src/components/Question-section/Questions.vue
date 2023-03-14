<template>
    <article class="questions">
        <p class="questions__text">
            {{ textQuestion.text1 }}
            <br />
            <br />
            {{ textQuestion.text2 }}
            <br />
            <br />
            {{ textQuestion.text3 }}
            <br />
            <br />
            {{ textQuestion.text4 }}
            <br />
            <br />
            {{ textQuestion.text5 }}
        </p>

        
        <a name="reviews" class="anchor"></a>
        <h1 class="questions__header">{{ textQuestion.anyQuestions }}</h1>
    </article>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        computed: {
            ...mapState({
                text: state => state.text,
            }),
            textQuestion() {
                if (this.text) { 
                    let text = this.text.question;

                    return text;
                }

                return {}
            }
        },
    }
</script>

<style lang="scss">
    .questions {
        padding: 10px 50px;

        @media(max-width: 500px) {
            padding: 10px 15px;
        }

        @media(max-width: 400px) {
            padding: 10px 25px;
        }

        &__text {
            opacity: 0.65;
            max-width: 1100px;
            margin: 0 auto;
        }

        &__header {
            text-align: center;
            color: rgb(157, 10, 15);
            margin-top: 25px;
            font-size: 30px;

            @media(max-width: 768px) {
                font-size: 28px;
            }

            @media(max-width: 500px) {
                font-size: 24px;
            }

            @media(max-width: 400px) {
                font-size: 20px;
            }
        }
    }
</style>