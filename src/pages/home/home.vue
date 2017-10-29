<template>
  <div class="home">
    <head-top :is-login="isLogin" :active-id="1"></head-top>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>

import headTop from '@/components/header';

export default {
  data () {
    return {
      msg: 'This is home page',
      isLogin: false
    };
  },
  components: {
    headTop
  }
};
</script>
