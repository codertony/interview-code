<template>
    <div class="parent" :class="type">
        <div class="title">{{title}}</div>
        <div class="child" v-for="(n, i) in childItems" :key="i">
            {{type}}
            <br />
            {{type}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "BoxItem",
        props: {
            title: {
                default: ''
            },
            type: {
                default: '',
            },
            childLength: {
                default: 1
            }
        },
        computed: {
            childItems() {
                return Array(this.childLength).fill(1)
            }
        }
    }
</script>

<style lang="scss">
.parent {
    position: relative;
    .title {
        line-height: 1;
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>