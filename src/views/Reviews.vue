<template>
    <div id="app" data-server-rendered="true">
        <Attention />

        <Request v-if="!firstRequest || help || callMe || intercity"/>

        <Confirm v-if="success" />

        <Input v-if="notInput" />

        <Header />

        <main class="main">
            <Nav />

            <Reviews />
        </main>

        <Footer :isSvg="false" />

        <OrderModal />
    </div> 
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        components: {
            Header: () => import(/* webpackChunkName: "Reviews" */ "../components/Header-section/Header.vue"),
            Nav: () => import(/* webpackChunkName: "Reviews" */ "../components/Nav-section/Nav.vue"),
            Reviews: () => import(/* webpackChunkName: "Reviews" */ "../components/Review-section/Reviews.vue"),
            Footer: () => import(/* webpackChunkName: "Reviews" */ "../components/Footer-section/Footer.vue"),
            Request: () => import(/* webpackChunkName: "Reviews" */ "../components/Form/Request.vue"),
            OrderModal: () => import(/* webpackChunkName: "Reviews" */ "../components/Order-modal/OrderModal.vue"),
            Confirm: () => import(/* webpackChunkName: "Reviews" */ "../components/Confirm/Confirm.vue"),
            Input: () => import(/* webpackChunkName: "Reviews" */ "../components/Confirm/Input.vue"),
            Attention: () => import (/* webpackChunkName: "Reviews" */ "../components/Attention-modal/Attention.vue")
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
