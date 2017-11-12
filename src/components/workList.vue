<template>
  <div class="workList">
    <div v-for="item in workList" :key="item.id" class="workBox">
      <a target="_blank" :href="item.workLink">
        <img :src="item.cover" alt="" class="workCover" />
        <div class="workAbstract">
          <p class="workTitle">{{ item.title }}</p>
          <p>
            <router-link class="workAuthor" :to="{ path: '/personal', query: {id: item.author.id} }">
              {{ item.author.nickname }}
            </router-link>
            <span class="workTime">{{ item.publishTime }}</span>
          </p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {};
    },
    props: ['workList']
  };
</script>
<style lang="scss" scoped>
  .workList {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin: 0.1rem;

    .workBox{
      position: relative;
      display: block;
      width: 2rem;
      height: 2rem;
      margin: 0.1rem;
      overflow: hidden;
      // flex-grow: 1;

      .workCover{
        width: 100%;
        height: 100%;
        border-radius: 0.05rem;
      }

      .workAbstract{
        position: absolute;
        left: 0;
        top: 1.1rem;
        min-width: 1.5rem;
        padding: 0.1rem 0.12rem 0.1rem 0.05rem;
        overflow: hidden;
        background-color: #444;
        opacity: 0.7;
        color: #fff;

        p{
          margin: 0.03rem 0;
        }

        .workTitle{
          font-size: 0.2rem;
        }

        .workAuthor{
          font-size: 0.16rem;
          padding-right: 0.05rem;
          text-decoration: none;
          color: #fff;
        }
        .workAuthor:hover{
          text-decoration: underline;
        }

        .workTime{
          font-size: 0.16rem;
          padding-right: 0.05rem;
        }
      }
    }
  }
</style>
