<template>
  <div id="app">
    <head-top></head-top>
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
@import "/static/normalize.css";
html,
body {
  margin: 0;
  padding: 0;
  background-color: #ebeef5;
  font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
article {
  margin: 60px auto 0;
  max-width: 800px;
  background-color: #fff;
}
</style>
