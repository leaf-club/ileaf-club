<template>
  <div class="leafer-list">
    <div  v-for="leafer in leaferList" :key="leafer.name" class="leafer">
      <div class="leafer-avator" :style="'background-image: url('+leafer.avatar+');background-size:cover;'"></div>
      <p class="leafer-info"><span class="name">{{leafer.name}}</span><span class="area">{{leafer.area}}</span></p>
      <p class="leafer-detail">{{leafer.detail}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {};
  },
  props: {
    leaferList: {
      type: Array,
      require: true
    }
  }
};
</script>
<style lang="scss" scoped>
  .leafer-list {
    display: flex;
    flex-wrap: wrap;
    .leafer {
      padding: .5rem;
      width: 2.6rem;
      height: 3rem;
      .leafer-avator {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: .75rem;
        margin: 0 auto;
        background-color: #000;
      }
      .leafer-info {
        text-align: center;
        .name {
          margin-right: .16rem;
        }
      }
      .leafer-detail {
        color: #666;
        font-size: .14rem;
      }
    }
  }
  
</style>


