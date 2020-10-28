<template>
  <el-checkbox-group v-model="checkList" @change="selectItem">
    <el-checkbox
      v-for="(item, index) in multipleList"
      :key="index"
      :label="item"
    ></el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: "MultipleChoice",
  props: {
    multipleList: {
      type: Array,
      default: () => [],
    },
    // checkList: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  data() {
    return {
      checkList: [],
    };
  },
  methods: {
    selectItem(value) {
      this.$emit("addSelectOption", value);
      console.log(value);
    },
  },
};
</script>