<template>
  <div>
    <i class="iconfont" :class="iconName"></i>
    <span slot="title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="less" scoped>
.iconfont{
  margin-right: 12px;
}
</style>