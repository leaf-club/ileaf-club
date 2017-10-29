<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
/* @import "../assets/css/normalize.css"; */
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
</style>
