<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <foot :ft_main="ft_main"></foot>
  </div>
</template>

<script>
import foot from '@/components/footer';
export default {
  data () {
    return {
      msg: 'This is home page',
      isLogin: false,
      ft_main: true
    };
  },
  components: {
    foot
  }
};
</script>
