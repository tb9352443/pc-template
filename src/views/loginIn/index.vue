<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="80px">
      <h3 class="login-name">{{ form.title }}</h3>
      <el-form-item>
        <el-input v-model="form.name">
          <i slot="prefix" class="iconfont icon-heads"></i>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form.password" :type="type"
          ><i slot="prefix" class="iconfont icon-password"></i
          ><i
            slot="suffix"
            class="iconfont"
            :class="icon"
            @click="changeState"
          ></i
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="commitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "loginIn",
  data() {
    return {
      form: {
        name: "",
        password: "",
        title: "",
      },
      type: "password",
      icon: "icon-eye",
      // title: "用户登录",
    };
  },
  methods: {
    changeState() {
      if (this.type == "password") {
        this.type = "text";
        this.icon = "icon-eye1";
      } else {
        this.type = "password";
        this.icon = "icon-eye";
      }
    },
    commitForm() {
      this.$router.push("/pageone");
    },
  },
  created() {
    this.form = this.$route.params;
    // console.log(this.$route.params)
  },
};
</script>
<style lang="less" scoped>
.login {
  text-align: center;
  .login-name {
    color: #509fc8;
  }
  width: 520px;
  // height: 300px;
  // background: coral;
  margin: 0 auto;
  max-width: 100%;
  padding-top: 15%;
  /deep/.el-input__inner {
    width: 100%;
    padding-left: 49px;
  }
  /deep/.el-input__suffix {
    right: 15px;
  }
  /deep/.el-input__prefix {
    left: 15px;
  }
  /deep/.el-form-item__content {
    margin-left: 0 !important;
  }
  .el-button {
    width: 100%;
  }
}
</style>