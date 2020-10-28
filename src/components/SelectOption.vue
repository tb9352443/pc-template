<template>
  <el-select v-model="value" multiple placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "SelectOption",
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data(){
      return {
          value:''
      }
  },
  methods: {
    optionValue(value) {
      console.log(value);
    },
  },
};
</script>