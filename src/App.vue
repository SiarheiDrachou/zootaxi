<template>
    <router-view />
</template>

<style lang="scss">
    @import url('./assets/animations.scss');

    * {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    @font-face {
        font-family: 'Roboto';
        src: 
            url('./assets/font/Roboto-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: 
            url('./assets/font/Roboto-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: 
            url('./assets/font/Roboto-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway Medium';
        src: 
            url('./assets/font/Raleway-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    body,
    html {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    a,
    ul,
    ol,
    hr,
    label,
    div {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
    }

    a,
    button,
    select,
    input,
    svg {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }

    picture {

        img,
        source {
            width: 100%;
            max-width: 100%;
        }
    }

    #app {
        width: 100%;
        min-width: 320px;
    }

    .anchor {
        display: block;
        position: absolute;
        top: -160px;
        visibility: hidden;

        @media (max-width: 1024px) {
            top: -80px;
        }
    }
</style>