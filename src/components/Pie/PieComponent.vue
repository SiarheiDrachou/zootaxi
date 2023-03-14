<script>
import {Pie} from 'vue-chartjs'

export default {
    name: 'App',
    extends: Pie,
    props: ['data'],
    watch: {
        data: function(data) {
            this.data = data;

            this.renderChart(
                data,
            );
        }
    },
    mounted() {
        this.renderChart(
            this.data,
        );
    }
}
</script>

<style lang="scss" scoped>
    #pie-chart {
        max-width: 800px;
        margin: 0 auto;
        max-height: 95vh;
    }
</style>