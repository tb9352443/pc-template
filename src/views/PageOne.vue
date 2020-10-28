<template>
  <div>
    <div class="PageOne" @click="dialogVisible = true">导航一</div>
    <multiple-choice
      :multipleList="multipleList"
      @addSelectOption="addSelectOption"
    ></multiple-choice>
    <select-option :options="options"></select-option>
    <dropdown-menu :dropdownMenuList="dropdownMenuList"></dropdown-menu>
    <comfirm-dialog
      :dialogVisible="dialogVisible"
      :title="title"
      :content="content"
      @closeComfirmDialog="closeComfirmDialog"
    ></comfirm-dialog>
    <el-button type="text" @click="dialogTableVisible = true"
      >打开表格的 Dialog</el-button
    >
    <tabel-dialog
      v-if="dialogTableVisible"
      :tableColumnData="tableColumnData"
      :gridData="gridData"
      @closeTableDialog="closeTableDialog"
    ></tabel-dialog>

    <el-button type="text" @click="dialogFormVisible = true"
      >打开表单的 Dialog</el-button
    >
    <form-dialog
      v-if="dialogFormVisible"
      @closeFormDialog="closeFormDialog"
    ></form-dialog>
  </div>
</template>
<script>
import MultipleChoice from "@/components/MultipleChoice";
import SelectOption from "@/components/SelectOption";
import DropdownMenu from "@/components/DropdownMenu";
import ComfirmDialog from "@/components/dialog/ComfirmDialog";
import TabelDialog from "@/components/dialog/TabelDialog";
import FormDialog from "@/components/dialog/FormDialog";
export default {
  name: "PageOne",
  components: {
    MultipleChoice,
    SelectOption,
    DropdownMenu,
    ComfirmDialog,
    TabelDialog,
    FormDialog,
  },
  data() {
    return {
      multipleList: ["选项A", "选项B", "选项C", "选项D"],
      checkList: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      dropdownMenuList: ["菜单一", "菜单二", "菜单三", "菜单四"],
      dialogVisible: false,
      dialogTableVisible: false,
      content: "确认要退出页面吗？",
      title: "温馨提示",
      tableColumnData: [
        { property: "name", label: "姓名" },
        { property: "phone", label: "手机号码" },
        { property: "date", label: "访问时间" },
        { property: "things", label: "事由" },
      ],
      gridData: [
        {
          name: "张三",
          phone: "18596548563",
          date: "2020-03-02",
          things: "上山打老虎",
        },
        {
          name: "李四",
          phone: "12365897456",
          date: "2020-09-30",
          things: "拜访大佬",
        },
        {
          name: "熊二",
          phone: "18986545694",
          date: "2020-08-08",
          things: "找熊大",
        },
      ],
      dialogFormVisible: false,
    };
  },
  methods: {
    addSelectOption(val) {
      console.log(val);
      this.checkList = val;
    },
    closeComfirmDialog(val) {
      this.dialogVisible = val;
    },
    closeTableDialog(val) {
      this.dialogTableVisible = val;
    },
    closeFormDialog(val) {
      this.dialogFormVisible = val;
    },
  },
};
</script>
<style lang="less" scoped>
.PageOne {
  // background: chartreuse;
  width: 100%;
  height: 100%;
}
</style>