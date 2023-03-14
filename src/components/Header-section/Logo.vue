<template>
    <div class="header-logo">
        <picture class="header-logo__img">
            <img 
                src="https://zootaxi.by/images/image_2021-01-25_15-15-30.png"
                alt="dog logo"
            />
        </picture>
        <picture class="header-logo__img-site">
            <img src="https://zootaxi.by/images/siteName.png" alt="site name" />
        </picture>
        <picture class="header__menu" @click="getActiveMenu" v-if="!activeMenu">
            <img src="https://zootaxi.by/images/menu.png" alt="gamburger menu" />
        </picture>
        <picture class="header__close" @click="getActiveMenu" v-else >
            <img src="https://zootaxi.by/images/close.svg" alt="close menu" />
        </picture>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        props: ['textHeader'],
        computed: {
            ...mapState({
                activeMenu: state => state.activeMenu,
            }),
        },
        methods: {
            ...mapActions({
                getActiveMenu: 'getActiveMenu'
            })
        },
    }
</script>