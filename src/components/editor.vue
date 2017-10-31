<template>
  <div id="editor">
    <div class="top-box">
      <div class="box left">
        <input v-model="title" type="text" class="title" placeholder="请输入标题">
      </div>
      <div class="box right">
        <ul class="menu">
          <li class="item exchange">
            <a href="#" @click="toggleEditorSelector" class="btn btn-exchange">
              <i class="fa fa-exchange"></i>&nbsp;切换
            </a>
            <ul v-if="showES" class="select-box">
              <li class="box-item">
                <a href="#" class="btn-tool">Markdown编辑器</a>
              </li>
              <li class="box-item">
                <a href="#" class="btn-tool">富文本编辑器</a>
              </li>
              <li class="box-item">
                <a href="#" class="btn-tool">balala编辑器</a>
              </li>
            </ul>
          </li>
          <li class="item save">
            <a href="#" @click="saveDraft" class="btn btn-save">
              <i class="fa fa-save"></i>&nbsp;保存
            </a>
          </li>
          <li class="item publish">
            <a href="#" @click="togglePublishPanel" class="btn btn-publish">
              <i class="fa fa-share-square"></i>&nbsp;发布
              <!-- <i class="fa fa-caret-down"></i> -->
            </a>
            <div v-show="showPP" class="panel-publish">
              <h3>发布文章</h3>
              <h4>选择分类</h4>
              <div class="type-box">
                <span v-for="type in articleType" :key="type.id" class="type-item">{{ type.name }}</span>
              </div>
              <h4>标签</h4>
              <div class="tag-box">
                <input type="text" class="input-tag" placeholder="输入标签（可不填）">
              </div>
              <div class="btn-box">
                <button @click="publish" class="btn-sure-publish">确定并发布</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <mavon-editor :ishljs="true" :toolbars="toolbars" class="m-editor" ref="meditor"></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
export default {
  name: 'editor',
  data () {
    return {
      title: '',
      showES: false,
      showPP: false,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        // save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    };
  },
  props: ['articleType'],
  components: {
    mavonEditor
  },
  methods: {
    toggleEditorSelector () {
      this.showES = !this.showES;
      this.showPP = false;
    },
    togglePublishPanel () {
      this.showES = false;
      this.showPP = !this.showPP;
    },
    saveDraft () {
      this.showES = false;
      this.showPP = false;
      let meditor = this.$refs.meditor;
      this.$emit('saveDraft', this.title, meditor.d_value, meditor.d_render);
    },
    publish () {
      this.showPP = false;
      let meditor = this.$refs.meditor;
      this.$emit('publish', this.title, meditor.d_value, meditor.d_render);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/css/mixin';
$panelBg: #f0f0f0;
$borderColor: #aaa;
#editor {
  height: 100%;
  min-height: 3.6rem;
  .top-box {
    height: 0.6rem;
    background-color: #fff;
    display: flex;
    .box {
      width: 50%;
      box-sizing: border-box;
      border: 1px solid #e5e5e5;
    }
    .left {
      padding: 0.1rem;
      border-right: 6px solid #e5e5e5;
      .title {
        border: none;
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.24rem;
        font-weight: bold;
        &:focus {
          outline: none;
        }
      }
    }
    .right {
      .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        .item {
          width: 1rem;
          height: 100%;
          display: flex;
          align-items: center;
          .btn {
            text-decoration: none;
            font-size: 0.24rem;
            color: $mainFontColor;
            &:hover {
              color: $mainColor;
            }
          }
        }
        .exchange {
          position: relative;
          .select-box {
            position: absolute;
            top: 100%;
            left: -0.3rem;
            list-style: none;
            padding: 0;
            z-index: 2000;
            .box-item {
              width: 1.6rem;
              height: 0.4rem;
              line-height: 0.4rem;
              text-align: center;
              background-color: $panelBg;
              box-shadow: 0 2px 2px $panelBg;
              .btn-tool {
                text-decoration: none;
                color: $mainFontColor;
                &:hover {
                  color: $mainColor;
                }
              }
            }
            &::before {
              content: '';
              position: absolute;
              top: -0.08rem;
              left: 50%;
              width: 0.16rem;
              height: 0.16rem;
              background-color: $panelBg;
              border: 1px solid $panelBg;
              border-right: none;
              border-bottom: none;
              transform: rotate(45deg);
            }
          }
        }
        .publish {
          position: relative;
          .panel-publish {
            position: absolute;
            top: 100%;
            width: 3.5rem;
            right: 0.1rem;
            color: $mainFontColor;
            background-color: $panelBg;
            padding: 0.1rem;
            z-index: 2000;
            h3 {
              margin: 0.14rem 0;
            }
            h4 {
              margin: 0.12rem 0;
            }
            .type-box {
              display: flex;
              flex-wrap: wrap;
              .type-item {
                margin: 0 0.1rem 0.1rem 0;
                padding: 0.02rem;
                min-width: 0.6rem;
                height: 1.5em;
                text-align: center;
                line-height: 1.5em;
                border: 1px solid $borderColor;
                border-radius: 2px;
                cursor: pointer;
                &.selected {
                  color: #fff;
                  border: 1px solid $mainColor;
                  background-color: $mainColor;
                }
                &:hover {
                  color: #fff;
                  border: 1px solid $mainColor;
                  background-color: $mainColor;
                }
              }
            }
            .tag-box {
              display: flex;
              margin-bottom: 0.12rem;
              .input-tag {
                width: 100%;
                height: 1.5em;
                line-height: 1.5em;
                border: none;
                border-bottom: 1px solid $borderColor;
                color: $mainFontColor;
                background-color: $panelBg;
                &:focus {
                  outline: none;
                }
              }
            }
            .btn-box {
              margin-bottom: 0.12rem;
              display: flex;
              justify-content: center;
              .btn-sure-publish {
                cursor: pointer;
                padding: 0 0.15rem;
                height: 2.5em;
                border: none;
                border-radius: 2px;
                color: #fff;
                background-color: $mainColor;
              }
            }
            &::before {
              content: '';
              position: absolute;
              top: -0.08rem;
              right: 0.4rem;
              width: 0.16rem;
              height: 0.16rem;
              background-color: $panelBg;
              border: 1px solid $panelBg;
              border-right: none;
              border-bottom: none;
              transform: rotate(45deg);
            }
          }
        }
      }
    }
  }
  .m-editor {
    height: calc(100% - 0.6rem);
  }
}
</style>
