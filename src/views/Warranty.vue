<template>
    <div id="app" data-server-rendered="true">
        <Attention />

        <Request v-if="!firstRequest || help || callMe || intercity"/>

        <Confirm v-if="success" />

        <Input v-if="notInput" />

        <Header />

        <main class="main">
            <Nav />

            <Advantages />
            
            <Warranty />

            <Satisfied />
        </main>

        <Footer :isSvg="false" />

        <OrderModal />
    </div> 
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    import Header from "../components/Header-section/Header.vue"
    import Advantages from "../components/Advantages-section/Advantages.vue"
    import Nav from "../components/Nav-section/Nav.vue"
    import Warranty from "../components/Warranty-section/Warranty.vue"
    import Satisfied from "../components/Satisfied-section/Satisfied.vue"
    import Footer from "../components/Footer-section/Footer.vue"
    import OrderModal from "../components/Order-modal/OrderModal.vue"
    import Attention from "../components/Attention-modal/Attention.vue"

    export default {
        components: {
            Header,
            Advantages,
            Nav,
            Warranty,
            Satisfied,
            Footer,
            OrderModal,
            Attention,
            Request: () => import(/* webpackChunkName: "WarrantyModal" */ "../components/Form/Request.vue"),
            Confirm: () => import(/* webpackChunkName: "WarrantyModal" */ "../components/Confirm/Confirm.vue"),
            Input: () => import(/* webpackChunkName: "WarrantyModal" */ "../components/Confirm/Input.vue"),
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
