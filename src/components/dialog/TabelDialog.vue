<template>
  <el-dialog title="访客信息" :visible.sync="tableVisible" @close="handleClose">
    <el-table :data="gridData">
      <el-table-column
        v-for="(item, index) in tableColumnData"
        :key="index"
        :property="item.property"
        :label="item.label"
      ></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
export default {
  name: "TabelDialog",
  props: {
    tableColumnData: {
      type: Array,
      default: () => [],
    },
    gridData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tableVisible: true,
    };
  },
  methods: {
    handleClose() {
      this.$emit("closeTableDialog", this.tableVisible);
    },
  },
};
</script>