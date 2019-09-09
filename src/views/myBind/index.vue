<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import './myBind'
  function test() {
    console.log(this.a)
  }
  {
    console.warn('myBind---------------------------------')
    let o = {a: 4, b: 5}
    let testB = test.myBind(o)
    testB()
    let nb = new testB
    console.log(nb)
    console.log('constructor' ,nb.constructor)
    console.log('__proto__' ,nb.__proto__)
  }

  {
    console.warn('bind---------------------------------')
    let o = {a: 4, b: 5}
    let testB = test.bind(o)
    testB()
    let nb = new testB
    console.log(nb)
    console.log('constructor' ,nb.constructor)
    console.log('__proto__' ,nb.__proto__)
  }

  {
    console.warn('class---------------------------------')
    class TestC{
      constructor() {
        this.a = 9
      }
    }
    let cb = new TestC()
    console.log(cb)
    console.log('constructor' ,cb.constructor)
    console.log('__proto__' ,cb.__proto__)
  }

  export default {
    mounted() {

    }
  }
</script>
