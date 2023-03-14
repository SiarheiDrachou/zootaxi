<template>
    <div id="app" data-server-rendered="true">
        <Attention />

        <Request v-if="!firstRequest || help || callMe || intercity"/>

        <Confirm v-if="success" />

        <Input v-if="notInput" />

        <Header />

        <main class="main">
            <Advantages />

            <Order />

            <Nav />

            <Services />

            <Warranty />

            <Price v-show="lazyPrice" />

            <Information v-show="lazyInformation" />

            <Taxi v-show="lazyTaxi" />

            <Special v-show="lazySpecial" />

            <Promotion v-show="lazyPromotion" />

            <Satisfied v-show="lazySatisfied" />

            <Questions v-show="lazyQuestions" />

            <Reviews v-show="lazyReviews" :lazyReviews="lazyReviews" />

            <Partners v-show="lazyPartners" />
        </main>

        <Footer />

        <OrderModal />
    </div> 
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Header: () => import(/* webpackChunkName: "Header" */ "../components/header-section/Header.vue"),
            Advantages: () => import(/* webpackChunkName: "Advantages" */ "../components/advantages-section/Advantages.vue"),
            Order: () => import(/* webpackChunkName: "Order" */ "../components/order-section/Order.vue"),
            Services: () => import(/* webpackChunkName: "Services" */ "../components/services-section/Services.vue"),
            Nav: () => import(/* webpackChunkName: "Nav" */ "../components/Nav-section/Nav.vue"),
            Warranty: () => import(/* webpackChunkName: "Warranty" */ "../components/Warranty-section/Warranty.vue"),
            Price: () => import(/* webpackChunkName: "Price" */ "../components/price-section/Price.vue"),
            Information: () => import(/* webpackChunkName: "Information" */ "../components/information-section/Information.vue"),
            Taxi: () => import(/* webpackChunkName: "Taxi" */ "../components/taxi-section/Taxi.vue"),
            Special: () => import(/* webpackChunkName: "Special" */ "../components/Special-section/Special.vue"),
            Promotion: () => import(/* webpackChunkName: "Promotion" */ "../components/Promotion-section/Promotion.vue"),
            Satisfied: () => import(/* webpackChunkName: "Satisfied" */ "../components/satisfied-section/Satisfied.vue"),
            Questions: () => import(/* webpackChunkName: "Questions" */ "../components/Question-section/Questions.vue"),
            Reviews: () => import(/* webpackChunkName: "Reviews" */ "../components/review-section/Reviews.vue"),
            Partners: () => import(/* webpackChunkName: "Partners" */ "../components/Partner-section/Partners.vue"),
            Footer: () => import(/* webpackChunkName: "Footer" */ "../components/footer-section/Footer.vue"),
            Request: () => import(/* webpackChunkName: "Modal" */ "../components/form/Request.vue"),
            OrderModal: () => import(/* webpackChunkName: "Modal" */ "../components/order-modal/OrderModal.vue"),
            Confirm: () => import(/* webpackChunkName: "Modal" */ "../components/Confirm/Confirm.vue"),
            Input: () => import(/* webpackChunkName: "Modal" */ "../components/Confirm/Input.vue"),
            Attention: () => import (/* webpackChunkName: "Modal" */ "../components/attention-modal/Attention.vue")
        },
        methods: {
            ...mapActions({
                getWindowWidth: 'getWindowWidth',
                getViberLink: 'getViberLink',
                getLazyComponent: 'getLazyComponent',
                getText: 'getText',
            }),
            lazyScroll() {
                const warranty = document.querySelector('.warranty');
                const price = document.querySelector('.price');
                const information = document.querySelector('.information');
                const taxi = document.querySelector('.taxi');
                const special = document.querySelector('.special');
                const promotion = document.querySelector('.promotion');
                const satisfied = document.querySelector('.satisfied');
                const questions = document.querySelector('.questions');
                const reviews = document.querySelector('.reviews');
                const partners = document.querySelector('.partners');

                if (warranty && warranty.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyPrice');
                }
                if (price && price.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyInformation');
                }
                if (information && information.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyTaxi');
                }
                if (taxi && taxi.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazySpecial');
                }
                if (special && special.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyPromotion');
                }
                if (promotion && promotion.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazySatisfied');
                }
                if (satisfied && satisfied.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyQuestions');
                }
                if (questions && questions.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyReviews');
                }
                if (partners && partners.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyPartners');
                }
                if (reviews && reviews.offsetTop < window.innerHeight + window.scrollY) {
                    this.getLazyComponent('lazyPartners');
                }
            },
            checkDevice() {
                let MobileUserAgent = navigator.userAgent || navigator.vendor || window.opera;

                let isTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(MobileUserAgent.toLowerCase());
                
                if (MobileUserAgent.match(/iPhone/i) || MobileUserAgent.match(/iPod/i) && !isTablet) {
                   this.getViberLink('iOS');
                } else if (MobileUserAgent.match(/Android/i) && !isTablet) {
                    this.getViberLink('Android');
                } else {
                    this.getViberLink('Desktop');
                }
            },
        },
        created () {
            this.getText();

            window.addEventListener('scroll', this.lazyScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.lazyScroll);
        },
        computed: {
            ...mapState({
                firstRequest: state => state.firstRequest,
                help: state => state.help,
                callMe: state => state.callMe,
                success: state => state.success,
                notInput: state => state.notInput,
                intercity: state => state.intercity,
                lazyPrice: state => state.lazyPrice,
                lazyInformation: state => state.lazyInformation,
                lazyTaxi: state => state.lazyTaxi,
                lazySpecial: state => state.lazySpecial,
                lazyPromotion: state => state.lazyPromotion,
                lazySatisfied: state => state.lazySatisfied,
                lazyQuestions: state => state.lazyQuestions,
                lazyReviews: state => state.lazyReviews,
                lazyPartners: state => state.lazyPartners,
            }),
        },
        mounted() {
            this.getWindowWidth(window.innerWidth);
            this.checkDevice();

            window.onresize = () => {
                this.getWindowWidth(window.innerWidth);
            }
        },
    }
</script>
