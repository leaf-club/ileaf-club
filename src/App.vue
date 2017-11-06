<template>
  <div id="app">
    <head-top v-bind:isLogin='true'></head-top>
    <article>
      <router-view></router-view>
    </article>
    <footer></footer>
  </div>
</template>

<script>
import headTop from './components/header.vue';
export default {
  name: 'app',
  components: {
    headTop
  }
};
</script>

<style>
@import "/static/css/normalize.css";
@media screen and (min-width: 1400px) {
  html {
    font-size: 110px;
  }
}
html,
body {
  margin: 0;
  padding: 0;
  background-color: #ebeef5;
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  font-size: 100px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app>article {
  margin: 0.7rem auto 0;
  padding: 0.10rem;
  max-width: 9.6rem;
  background-color: #fff;
  font-size: 0.16rem;
}
</style>
