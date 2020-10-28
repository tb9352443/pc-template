<template>
  <el-dialog title="修改访客信息" :visible.sync="dialogFormVisible" @close="comfirm">
    <el-form :model="tabelForm">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="tabelForm.name" autocomplete="on"></el-input>
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="tabelForm.phone" autocomplete="on"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="comfirm">取 消</el-button>
      <el-button type="primary" @click="comfirm">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: "FormDialog",
  data() {
    return {
      dialogFormVisible: true,
      tabelForm: {
        name: "",
        phone: "",
      },
      formLabelWidth: "150px",
    };
  },
  methods: {
    comfirm() {
      this.dialogFormVisible = false
      this.$emit("closeFormDialog", this.dialogFormVisible);
      // this.tabelForm = {};
    },
  },
};
</script>