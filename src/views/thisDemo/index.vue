<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
  import React from 'react'
  import ReactDom from 'react-dom'
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
      }
    },
    mounted() {
      console.log(this)
      this.test()
      this.testArrow()
    }
  }
  vueMap.data()
  vueMap.methods.test()
  vueMap.methods.testArrow()
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
      }
    },
    mounted() {
      console.log(this)
      this.test()
    }
  }

  vueMap2.data()
  vueMap2.methods.test()
  vueMap2.methods.testArrow()

  console.log('------------以上是普通对象---------------------')
  class ClassMap{
    constructor() {
      console.log(this)
      this.a = '1'
    }
    test() {
      console.log(this)
    }
    testArrow = () => {
      console.log(this)
    }
  }

  let bb = new ClassMap()
  console.log(bb.a)
  bb.test()
  bb.testArrow()
  let aa = {
    test: bb.test,
    testArrow: bb.testArrow
  }
  aa.test()
  aa.testArrow()
  console.log('-------------以上是class实例--------------------')

   class ReactTest extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        a: '1'
      }
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
       console.log('-------------以上是react实例--------------------')
     }
   }
   let domContainer = document.createElement('div', {id: 'react-test'})
  console.log(domContainer)
  document.body.appendChild(domContainer)
  ReactDom.render(React.createElement(ReactTest), domContainer);
  export default vueMap
</script>
