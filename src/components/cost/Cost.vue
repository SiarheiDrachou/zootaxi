<template>
    <div class="cost" @click="views">
        <div class="cost-svg">
            <svg v-show="!view" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" fill="white" />
            </svg>

            <svg v-show="view" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" fill="white" />
            </svg>
        </div>

        
        <p class="cost__text">
            {{header}}
        </p>

        <transition-group name="slide-fade" v-show="view" tag="div">
            <span class="cost__text--bolder" :key="1">{{distance}}</span>

            <p class="cost__text--border" :key="2">{{costKm}}</p>

            <span class="cost__text--bolder" :key="3">{{minsk}}</span>

            <p class="cost__text--border mb-30" :key="4">
                {{cost}}
                <br>
                <span class="cost__text--border--smaller">{{everyCost}}</span>
            </p>
        </transition-group>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                view: false
            }
        },
        props: [
            'header',
            'distance',
            'minsk',
            'costKm',
            'cost',
            'everyCost'
        ],
        methods: {
            views() {
                this.view = !this.view;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cost {
        position: relative;
        display: none;

        @media(max-width: 768px) {
            display: block;
            background-color: #fff;
            border: 2px solid rgb(230, 230, 230);
            padding-left: 25px;
            width: 90%;
            margin-top: 10px;
            margin-left: 20px;
            transition-duration:  5.4s;
        }

        &__text {
            padding: 15px 5px;
            text-transform: uppercase;
            font-weight: bold;            
            transition-duration:  5.4s;

            &--bolder {
                color: rgb(0, 0, 0);
                font-weight: 700;
            }

            &--border {
                background-color: rgb(255, 255, 255);
                color: rgb(157, 10, 15);
                border-radius: 5px;
                border-width: 1px;
                border-style: solid;
                border-color: rgb(217, 217, 217);
                box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
                padding: 5px;
                text-align: center;
                font-weight: 700;
                margin: 5px 0;
                width: 95%;
            }
        }

        &-svg {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 10px;
            left: -17px;
            width: 32px;
            height: 32px;
            border-radius: 100%;
            cursor: pointer;
            background-color: rgb(22, 102, 241);
            color: rgb(255, 255, 255);
            font-size: 16px;
            border: 2px solid rgb(255, 255, 255);
            transition: transform 0.4s;

            .bi {
                width: 100%;
            }
        }
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 1s ease;
    }

    .mb-30 {
        margin-bottom: 30px;
    }
</style>