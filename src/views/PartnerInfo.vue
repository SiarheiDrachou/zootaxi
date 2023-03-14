<template>
    <PieComponent :data="partnerStatistic" />
</template>

<script>
    import { mapState } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        components: {
            PieComponent: () => import(/* webpackChunkName: "PartnerInfo" */ "../components/Pie/PieComponent.vue"),
        },
        methods: {
            ...mapActions({
                getPartnerStatistic: 'getPartnerStatistic',
            }),
        },
        computed: {
            ...mapState({
                partnerStatistic: state => state.partnerStatistic,
            }),
        },
        created() {
            this.getPartnerStatistic();
        },
    }
</script>