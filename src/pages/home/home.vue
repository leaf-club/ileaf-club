<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <foot :ftMain="ftMain"></foot>
  </div>
</template>

<script>
import foot from '@/components/footer';
export default {
  data () {
    return {
      msg: 'This is home page',
      isLogin: false,
      ftMain: true
    };
  },
  components: {
    foot
  }
};
</script>
