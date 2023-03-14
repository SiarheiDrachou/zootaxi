<template>
    <div class="information-container-rules">
        <picture class="information-container-rules__img">
            <source
                srcset="https://zootaxi.by/images/27.webp"
                alt="dog in car"
                type="image/webp"
            />
            <img src="https://zootaxi.by/images/27.jpg" alt="dog in car" />
        </picture>

        <p class="information-container-rules__text" @click="viewDescr()">
            <img src="https://zootaxi.by/images/arrow-down.svg" alt="" :class="{ rotate: view }">

            <span>
                <b>{{ textInformation.termsAndConditions }}</b>
                <br />
                <b>{{ textInformation.yourPets }}</b>
            </span>
        </p>

        <div v-if="view" class="information-container-rules__descr">
            <h3 class="information-container-rules__descr__header">
                {{ textInformation.whatIncludes }}
            </h3>

            <ul class="information-container-rules__descr__list">
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li1 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li2 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li3 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li4 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li5 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li6 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li7 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li8 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li9 }}
                </li>
            </ul>

            <h3 class="information-container-rules__descr__header">
                {{ textInformation.disconts }}
            </h3>

            <ul class="information-container-rules__descr__list">
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li10 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.regularСustomers }} <b>5%</b> {{ textInformation.outCity }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.pensioners }} <b>5%</b> {{ textInformation.outCity }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.discontsNotSum }}
                </li>
            </ul>

            <h3 class="information-container-rules__descr__header">
                {{ textInformation.anyTransportation }}
            </h3>

            <ul class="information-container-rules__descr__list">
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li11 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li12 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li13 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li14 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li15 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li16 }}
                </li>
            </ul>

            <h3 class="information-container-rules__descr__header">
                {{ textInformation.responsibility }}
            </h3>

            <ul class="information-container-rules__descr__list">
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li18 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li19 }}
                </li>
                <li class="information-container-rules__descr__list__item">
                    {{ textInformation.li20 }}
                </li>
            </ul>

            <a class="information-container-rules__descr__button" href="./rules.php" target="_blank">
                {{ textInformation.moreDetails }}
            </a>

            <div class="information-container-rules__descr__attention">
                <b>{{ textInformation.earnestRequest }}</b>

                <br />

                {{ textInformation.treats }}
                <br />
                <br />
                <p class="information-container-rules__descr__attention--right">{{ textInformation.yoursSyabar }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['textInformation'],
        data() {
            return {
                view: false,
            };
        },
        methods: {
            viewDescr() {
                this.view = !this.view;
            },
        },
    }
</script>

<style lang="scss" scoped>
    .rotate {
        transform: rotate(180deg);
        transition-duration: 1s;
    }

    .bi {
        transition-duration: 1s;
    }
</style>