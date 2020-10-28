<template>
  <div class="tags-view-container">
    <router-link
      v-for="(tag, index) in tagsViewList"
      :key="index"
      tag="span"
      :to="{ path: tag.fullPath }"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      @click.native="changeIndex(tag)"
      @contextmenu.prevent.native="openRight(tag, index)"
      >{{ tag.name }}
      <span
        class="iconfont icon-close"
        v-show="tag.index != '1'"
        @click.stop="closeTag(tag, index)"
      ></span>
      <ul class="contextmenu" v-if="index == isShowContext">
        <li @click.stop="refresh">刷新</li>
        <li @click.stop="closeCurrent" v-if="selectIndex != '0'">关闭</li>
        <li @click.stop="closeOthers">关闭其他</li>
        <li @click.stop="closeAll">全部关闭</li>
      </ul>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "tags-view",
  props: {
    tagsViewList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isShowContext: null,
      selectTag: {},
      selectIndex: "",
    };
  },
  methods: {
    isActive(route) {
      return route.fullPath === this.$route.path;
    },
    changeIndex(meta) {
      this.$emit("tagsIndex", meta);
      this.isShowContext = null;
    },
    closeTag(tag, subIdex) {
      this.$emit("deleteTag", tag, subIdex);
    },
    openRight(tag, index) {
      this.isShowContext = true;
      this.selectTag = tag;
      this.selectIndex = index;
      this.isShowContext = index
    },
    refresh() {
      this.$router.push(this.selectTag.fullPath);
      this.isShowContext = null;
    },
    closeOthers() {
      this.$emit("deletOthersTagViews", this.selectTag);
      this.isShowContext = null;
    },
    closeAll() {
      this.$emit("deletAllTagViews");
      this.isShowContext = null;
    },
    closeCurrent() {
      this.$emit("deleteTag", this.selectTag, this.selectIndex);
      this.isShowContext = null;
    },
  },
};
</script>
<style lang="less" scoped>
.tags-view-container {
  box-sizing: border-box;
  height: 36px;
  width: 100%;
  font-size: 12px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  margin-bottom: 15px;
  padding: 0 20px;
  .tags-view-item {
    height: 100%;
    margin-right: 7px;
    border: 1px solid #a0a8af;
    line-height: 36px;
    border-radius: 3px;
    padding: 4px 6px;
    position: relative;
    &:hover {
      color: #409eff;
      border: 1px solid #409eff;
      cursor: pointer;
    }
    .icon-close {
      font-size: 10px;
      margin-left: 2px;
      &::before {
        transform: scale(0.7);
        display: inline-block;
      }
      &:hover {
        color: #409eff;
        border-radius: 50%;
        background: #bfdcf5;
      }
    }
  }
  .contextmenu {
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    top: 3px;
    left: 30px;
    width: 90px;
    padding: 5px 0;
    border-radius: 4px;
    line-height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    -webkit-box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      padding: 5px 20px;
      &:hover {
        background: rgb(235, 235, 235);
      }
    }
  }
}
.active {
  background: #409eff;
  border: 1px solid #409eff !important;
  color: #ffffff;
  &:hover {
    color: #ffffff !important;
  }
  &::before {
    content: "";
    background: #ffff;
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: relative;
    margin-right: 5px;
  }
  .icon-close {
    &:hover {
      border-radius: 50%;
      color: #ffffff !important;
      background: #6ba5db !important;
    }
  }
}
</style>