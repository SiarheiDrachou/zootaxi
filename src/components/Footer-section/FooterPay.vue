<template>
    <section class="footer-pay">
        <picture class="footer-pay__img">
            <img src="https://zootaxi.by/images/bank.png" alt="bank" />
        </picture>

        <p class="footer-pay__text-copyright">
            {{ textFooter.usingResource }} <a href="./rules.php" target="_blank">{{ textFooter.carriageRegulations }}</a> {{ textFooter.petsFrom }}
            <br />
            © 2019 - {{currentYear}} {{ textFooter.zootaxi }} 
        </p>
    </section>
</template>

<script>
    export default {
        props: ['textFooter'],
        computed: {
            currentYear() {
                let year = new Date();
                
                return year.getFullYear();
            }
        },
    }
</script>