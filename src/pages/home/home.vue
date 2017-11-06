<template>
  <div class="home">
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
