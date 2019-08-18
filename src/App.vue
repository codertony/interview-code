<template>
  <div id="app">
    <div class="nav">
      <div class="router-item" v-for="n in routes" :key="n.name">
        <router-link :to="n.path">{{n.babel}}</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import {routes} from './router'
  export default {
    data() {
      return {
        routes
      }
    }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
.nav {
  flex: 0 0 auto;
  width: 100px;
  padding: 16px;
  text-align: left;
  .router-item{
    padding: 4px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  .content{
    flex: 1 1 auto;
    width: 100%;
  }
</style>
