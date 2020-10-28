<template>
  <div>
    <template v-if="hasOneShowingChild(menu.children)">
      <router-link :to="{ path: menu.meta.fullPath }">
        <el-menu-item :index="menu.meta.index" @click="toMenuRoute(menu.meta)">
          <sidebar-item :iconName="menu.meta.icon" :title="menu.meta.name"></sidebar-item>
        </el-menu-item>
      </router-link>
    </template>

    <el-submenu v-else :index="menu.meta.index">
      <template slot="title">
          <sidebar-item :iconName="menu.meta.icon" :title="menu.meta.name"></sidebar-item>
      </template>
      <side-bar
        v-for="(tag, ind) in menu.children"
        :key="ind + '1'"
        :menu="tag"
        @addTags="visitedViews"
      ></side-bar>
    </el-submenu>
  </div>
</template>
<script>
import SidebarItem from "../sidebarItem";
export default {
  name: "side-bar",
  props: {
    menu: {
      type: Object,
      required: true,
    },
    tagsViewList: {
      type: Array,
      // required: true,
    },
  },
  components: {
    SidebarItem,
  },
  data() {
    return {};
  },
  methods: {
    hasOneShowingChild(children = []) {
      let showingChildList = children.filter((item) => item.meta);
      if (showingChildList.length <= 0) {
        return true;
      } else {
        return false;
      }
    },
    visitedViews(meta) {
      this.$emit("addTags", meta);
    },
    toMenuRoute(menu) {
      this.$emit("addTags", menu);
      this.$emit("menuIndex", menu);
    },
  },
};
</script>
<style lang="less" scoped>
.iconfont {
  margin-right: 5px;
}
</style>