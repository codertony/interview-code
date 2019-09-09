<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import React from 'react'
  import ReactDom from 'react-dom'
  function gTest() {
    
    console.log('gTest', this)
    void (() => console.log('insertArrow', this))();
  }
  let gTestArrow = new function() {
    this.a = 1
    return () => {
      console.log('gTestArrow', this)
    }
  };
  gTest()
  gTestArrow()
  console.log('----------全局函数调用-----------')
  let vueMap = {
    data() {
      console.log(this)
      return {
        a: '1'
      }
    },
    methods: {
      test() {
        console.log(this)
      },
      testArrow: () => {
        console.log(this)
      },
      gTest,
      gTestArrow
    },
    mounted() {
      console.log(this)
      this.test()
      this.testArrow()
      this.gTest()
      this.gTestArrow()
    }
  }
  vueMap.data()
  vueMap.methods.test()
  vueMap.methods.testArrow()
  vueMap.methods.gTest()
  vueMap.methods.gTestArrow()
  console.log('------------以上是未实例化vue对象---------------------')
  let vueMap2 = {
    data() {
      console.log(this)
      return {
        a: '1'
      }
    },
    methods: {
      test() {
        console.log(this)
      },
      testArrow: () => {
        console.log(this)
      },
      gTest,
      gTestArrow
    },
    mounted() {
      console.log(this)
      this.test()
      this.testArrow()
    }
  }

  vueMap2.data()
  vueMap2.methods.test()
  vueMap2.methods.testArrow()
  vueMap.methods.gTest()
  vueMap.methods.gTestArrow()
  console.log('------------以上是普通对象---------------------')
  class ClassMap{
    constructor() {
      console.log(this)
      this.a = '1'
      this.gTest = gTest
      this.gTestArrow = gTestArrow
    }
    test() {
      console.log(this)
    }
    testArrow = () => {
      console.log(this)
    }
  }

  let bb = new ClassMap()
  bb.test()
  bb.testArrow()
  bb.gTest()
  bb.gTestArrow()
  console.log('-------------以上是class实例--------------------')
  let aa = {
    test: bb.test,
    testArrow: bb.testArrow,
    gTest: bb.gTest,
    gTestArrow: bb.gTestArrow
  }
  aa.test()
  aa.testArrow()
  aa.gTest()
  aa.gTestArrow()
  console.log('-------------以上是class实例方法赋值普通对象--------------------')
  
   class ReactTest extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        a: '1'
      }
      this.gTest = gTest
      this.gTestArrow = gTestArrow
    }
    test() {
      console.log(this)
    }
    testArrows = () => {
      console.log(this)
    }
     render() {
      return React.createElement('button',
              {
                onClick: this.test
              },
              '测试'
      )
     }
     componentDidMount() {
       this.test()
       this.testArrows()
       this.gTest()
       this.gTestArrow()
       
       console.log('-------------以上是react实例--------------------')
     }
   }
   let domContainer = document.createElement('div', {id: 'react-test'})
  console.log(domContainer)
  document.body.appendChild(domContainer)
  ReactDom.render(React.createElement(ReactTest), domContainer);
  export default vueMap
</script>
