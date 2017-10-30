<template>
  <div>
    <mavon-editor :ishljs="true" style="height: 100%"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
  name: 'editor',
  data () {
    return {};
  },
  components: {
    mavonEditor
  }
};
</script>

<style scoped>

</style>
