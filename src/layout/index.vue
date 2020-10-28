<template>
  <div id="layout">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="header-name">后台管理系统</div>
        <div class="header-avatar">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <el-dropdown @command="handCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="d">
                <i class="iconfont icon-password2"></i>
                <span>重置密码</span>
              </el-dropdown-item>
              <el-dropdown-item command="e">
                <i class="iconfont icon-output"></i>
                <span>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-container>
        <!-- 左边菜单导航 -->
        <el-aside width="200px">
          <el-menu
            :default-active="selectIndex"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            background-color="#393D49"
            text-color="#fff"
          >
            <side-bar
              v-for="(menu, index) in menuList"
              :key="index"
              :menu="menu"
              :tagsViewList="tagsViewList"
              @menuIndex="showMenu"
              @addTags="toRoute"
            ></side-bar>
          </el-menu>
        </el-aside>
        <!-- 内容区 -->
        <el-main>
          <tags-view
            :tagsViewList="tagsViewList"
            @tagsIndex="showMenu"
            @deleteTag="deletTagViews"
            @deletOthersTagViews="deletOthersTagViews"
            @deletAllTagViews="deletAllTagViews"
            :tagIndex="selectIndex"
          ></tags-view>
          <div class="route-container">
            <transition name="fade-transform">
              <router-view></router-view>
            </transition>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { routerMenu } from "../router/index";
import SideBar from "./components/side-bar";
import TagsView from "./components/tags-view";
export default {
  name: "layout",
  components: {
    SideBar,
    TagsView,
  },
  data() {
    return {
      isCollapse: false,
      tagsViewList: [],
      pathRouter: "",
      selectIndex: "1",
    };
  },
  computed: {
    menuList() {
      return routerMenu.filter((item) => item.meta);
    },
  },
  beforeRouteEnter: (to, from, next) => {
    next((vm) => {
      let storage = window.sessionStorage;
      let str = storage.getItem("tagList");
      if (str) {
        vm.tagsViewList = JSON.parse(str);
      } else {
        vm.tagsViewList = [
          {
            index: "1",
            name: "导航一",
            fullPath: "/pageone",
          },
        ];
      }
    });
  },
  methods: {
    handCommand(command) {
      if (command == "e") {
        this.$confirm("确定要退出登陆吗?", "温馨提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }).then(() => {
          this.$router.push({
            name: "loginIn",
            params: { name: "", password: "", title: "用户登录" },
          });
        });
      }
      if (command == "d") {
        this.$router.push({
          name: "loginIn",
          params: { name: "张三", password: "hjhjhj", title: "重置密码" },
        });
      }
    },
    toRoute(meta) {
      this.selectIndex = meta.index;
      let isReapeat = this.tagsViewList.every((item) => {
        return item.index != meta.index;
      });
      if (isReapeat) {
        this.tagsViewList.push(meta);
      }
      this.saveData();
    },
    deletTagViews(meta, subIndex) {
      if (this.tagsViewList.length > 1) {
        this.tagsViewList = this.tagsViewList.filter(
          (item) => item.index != meta.index
        );
      }
      this.saveData();
      if (meta.index == this.selectIndex) {
        let currentTag = this.tagsViewList[subIndex - 1];
        this.showMenu(currentTag);
      }
    },
    deletOthersTagViews(meta) {
      if (this.tagsViewList.length > 1) {
        this.tagsViewList = this.tagsViewList.filter(
          (item) => item.index == meta.index || item.index == "1"
        );
        this.saveData();
        let currentTag = this.tagsViewList.find(
          (item) => item.index == meta.index
        );
        this.showMenu(currentTag);
      }
    },
    deletAllTagViews() {
      if (this.tagsViewList.length > 1) {
        this.tagsViewList = this.tagsViewList.filter(
          (item) => item.index == "1"
        );
      }
      this.saveData();
      let currentTag = this.tagsViewList[0];
      this.showMenu(currentTag);
    },
    showMenu(tag) {
      this.selectIndex = tag.index;
      this.$router.push(tag.fullPath);
    },
    saveData() {
      let storage = window.sessionStorage;
      storage.setItem("tagList", JSON.stringify(this.tagsViewList));
    },
  },
};
</script>
<style lang="less">
.el-popper .popper__arrow,
.el-popper .popper__arrow::after {
  border-style: none;
}
</style>
<style lang="less" scoped>
#layout {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      justify-content: space-between;
      align-items: center;
      background: #242730;
      display: flex;
      color: #ffffff;
    }
    .el-aside {
      background: #3e424e;
      color: #ffffff;
      .el-menu {
        border: none;
      }
    }
    .el-main {
      padding: 0;
    }

    .route-container {
      margin: 0 20px;
    }
  }
}
</style>