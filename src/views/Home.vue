<template>
    <div id="app" data-server-rendered="true">
        <Attention />

        <Request v-if="!firstRequest || help || callMe || intercity"/>

        <Confirm v-if="success" />

        <Input v-if="notInput" />

        <Header />

        <main class="main">
            <Nav />

            <Order />

            <Information />

            <Questions />

            <Partners />
        </main>

        <Footer />

        <OrderModal />
    </div> 
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import Header from "../components/Header-section/Header.vue"
    import Order from "../components/Order-section/Order.vue"
    import Nav from "../components/Nav-section/Nav.vue"
    import Information from "../components/Information-section/Information.vue"
    import Questions from "../components/Question-section/Questions.vue"
    import Partners from "../components/Partner-section/Partners.vue"
    import Footer from "../components/Footer-section/Footer.vue"
    import OrderModal from "../components/Order-modal/OrderModal.vue"
    import Attention from "../components/Attention-modal/Attention.vue"
    
    export default {
        components: {
            Header,
            Order,
            Nav,
            Information,
            Questions,
            Partners,
            Footer,
            Attention,
            OrderModal,
            Request: () => import(/* webpackChunkName: "Modal" */ "../components/Form/Request.vue"),
            Confirm: () => import(/* webpackChunkName: "Modal" */ "../components/Confirm/Confirm.vue"),
            Input: () => import(/* webpackChunkName: "Modal" */ "../components/Confirm/Input.vue"),
        },
        methods: {
            ...mapActions({
                getWindowWidth: 'getWindowWidth',
                getViberLink: 'getViberLink',
                getText: 'getText',
                getNotActiveMenu: 'getNotActiveMenu',
            }),
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
        },
        computed: {
            ...mapState({
                firstRequest: state => state.firstRequest,
                help: state => state.help,
                callMe: state => state.callMe,
                success: state => state.success,
                notInput: state => state.notInput,
                intercity: state => state.intercity,
            }),
        },
        mounted() {
            this.getWindowWidth(window.innerWidth);
            this.checkDevice();
            window.scrollTo(0, 0);

            window.onresize = () => {
                this.getWindowWidth(window.innerWidth);
            }
            this.getNotActiveMenu();
        },
    }
</script>
