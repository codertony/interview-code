<template>
  <div class="about">
    <input type="text" v-model="input">
    <button @click="add">添加</button>
    <h2 v-for="(n,i) in list" :key="i">
      {{n}} : {{getVal(n)}}
    </h2>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import modelStore from './store'
  export default {
    data() {
      return {
        i: 0,
        list: ['$1', '$2' , '$3', '$4', '$5'],
        input: ''
      }
    },
    methods: {
      add() {
        this.list.push(this.input)
      }
    },
    computed: {
      getVal: function () {
        return (key) => this.getData(key).val
      },
      ...mapGetters({
        getData: 'GetterTest/getData'
      })
    },
    beforeCreate() {
      this.$store.registerModule('GetterTest', modelStore)
    }
  }
</script>
