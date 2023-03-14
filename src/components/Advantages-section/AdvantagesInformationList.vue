<template>
    <ul class="advantages-information-1__list">
        <li class="advantages-information-1__list__item">
            {{ textAdvantages.comfortableSpecialTransport }}
        </li>

        <li class="advantages-information-1__list__item">
            {{ textAdvantages.premiumEquipment }}
        </li>

        <li class="advantages-information-1__list__item">
            {{ textAdvantages.dogTrainedPersonnel }}
        </li>

        <li class="advantages-information-1__list__item advantages-information-1__list__item--color">
            {{ textAdvantages.cleaningAndDisinfection }}
        </li>

        <li class="advantages-information-1__list__item">
            {{ textAdvantages.fixPrice }}
        </li>

        <li class="advantages-information-1__list__item">
            {{ textAdvantages.bonusesAndGoodMood }}
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['textAdvantages']
    }
</script>