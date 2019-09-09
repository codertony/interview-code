<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  export default {
    methods: {
      promiseTest() {
        console.log('script start')
        let promise1 = new Promise(function (resolve) {
          let obj = {}
          obj.text = 'promise 1 start'
          console.log(obj.text)
          resolve(obj)
          obj.text = 'promise 1 end'
          console.log(obj.text)
        })
        promise1.then(function (o) {
          console.log('then start')
          console.log(o.text)
          o.text = 'then end'
          console.log(o.text)
          return o
        })
        setTimeout(function(){
          console.log('settimeout')
        })
        console.log('script end')
    
        promise1.then(function(o){
          console.log('then2 start')
          console.log(o)
          console.log('then2 end')
        })
      },
      asyncTest() {
        async function async1(){
          console.log('async1 start');
          await async2();
          console.log('async1 end')
        }
        async function async2(){
          console.log('async2')
        }
  
        console.log('script start');
        async1();
        console.log('script end')
      }
    },
    mounted() {
     // this.asyncTest()
      this.promiseTest()
    }
  }
</script>
