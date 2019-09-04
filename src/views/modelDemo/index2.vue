<template>
  <div class="about">
    <h1>{{o}}</h1>
    <button @click="click">打印</button>
    <input type="text" v-model="val" @input="setA">
  </div>
</template>
<script>
  import obj, {setA} from './testModel'
export default {
  data() {
    return {
      o: obj,
      val: ''
    }
  },
  methods: {
    setA() {
      setA(this.val)
    },
    click() {
      console.log(obj)
    }
  },
}
</script>
