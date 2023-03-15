<template>
    <section class="footer-contact">
        <picture :class="{'footer-contact__img--fly': scroll}" class="footer-contact__img">
            <img
                src="https://zootaxi.by/images/LOGO-footer.png"
                alt="dog logo"
            />
        </picture>

        <div class="footer-contact-social">
            <h2 class="footer-contact-social__header">{{ textFooter.transportHome }} <br /> {{ textFooter.pets }}</h2>

            <p class="footer-contact-social__text">
                {{ textFooter.withComfort }}
                <br />
                {{ textFooter.minskAndBelarus }}
            </p>

            <Social />

            <div class="footer-contact-social-support">
                <a class="footer-contact-social-support__link" href="mailto:Zootaxi.by@gmail.com" target="_blank">{{ textFooter.cooperation }}</a>

                <a class="footer-contact-social-support__link" href="https://t.me/zootaxiby_support" target="_blank">{{ textFooter.technicalSupport }}</a>
            </div>
        </div>

        <div class="footer-contact-call">
            <a href="tel:+375447144111" class="footer-contact-call__link">
                + 
                <span class="footer-contact-call__link--code">375</span> 
                <span class="footer-contact-call__link--mask">(44)</span>
                <span class="footer-contact-call__link--first">7</span>
                <span class="footer-contact-call__link--second">144</span>
                <span class="footer-contact-call__link--third a1">111</span>
            </a>
            <a href="tel:+375257144111" class="footer-contact-call__link">
                + 
                <span class="footer-contact-call__link--code">375</span> 
                <span class="footer-contact-call__link--mask">(25)</span>
                <span class="footer-contact-call__link--first">7</span>
                <span class="footer-contact-call__link--second">144</span>
                <span class="footer-contact-call__link--third life">111</span>
            </a>

            <button class="footer-contact-call__button" @click="getCallMe">
                <span class="footer-contact-call__button__text">
                    <img src="https://zootaxi.by/images//call.svg" alt="phone img">

                    {{ textFooter.callBack }}
                </span>
            </button>

            <p class="footer-contact-call__text">
                {{ textFooter.petServicse }}
            </p>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex'
    import Social from '../Social-networks/Social.vue'

    export default {
        props: ['textFooter', 'scroll'],
        components: {
            Social,
        },
        methods: {
            ...mapActions({
                getCallMe: 'getCallMe',
            }),
        },
    }
</script>