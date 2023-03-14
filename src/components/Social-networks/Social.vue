<template>
    <div class="networks">
        <a href="https://vk.com/zootaxiby" target="_blank" class="networks__link">
            <picture class="messangers__link__img">
                <img src="https://zootaxi.by/images/vk.png" alt="vk logo" />
            </picture>
        </a>

        <a href="https://facebook.com/zootaxi.by" target="_blank" class="networks__link">
            <picture class="messangers__link__img">
                <img src="https://zootaxi.by/images/facebook.png" alt="facebook logo" />
            </picture>
        </a>

        <a href="https://instagram.com/zootaxi.by" target="_blank" class="networks__link">
            <picture class="messangers__link__img">
                <img src="https://zootaxi.by/images/instagram.png" alt="instagram logo" />
            </picture>
        </a>

        <a href="https://www.youtube.com/channel/UCD9bb_Po7PiFd5NqmyGMkGQ" target="_blank" class="networks__link">
            <picture class="messangers__link__img">
                <img src="https://zootaxi.by/images/youtube.png" alt="youtube logo" />
            </picture>
        </a>
    </div>
</template>

<style lang="scss" scoped>
    .networks {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;

        &__link {
            margin: 0 5px;
            background: rgb(71, 84, 118);
            padding: 10px;
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &__link:hover {
            background: rgb(57, 67, 94);
        }
    }
</style>