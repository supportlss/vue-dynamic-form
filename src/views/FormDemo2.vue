<template>
  <div>
    <PopupSelect @openPopup="openPopup" :value="selectValue">
      <Modal slot="modal"
             :visible="isShowPopup"
             :hasMask="false"
             title="选择弹出框"
             onClickText="确定"
             onCancelText="取消"
             @onOk="handleOk"
             @onCancel="handleCancel"
      >
        <div slot="body">
          <el-table ref="singleTable" :data="tableData" highlight-current-row
                     @current-change="handleCurrentChange" style="width: 100%">
            <el-table-column type="index" width="50"></el-table-column>
            <el-table-column property="date" label="日期" width="120"></el-table-column>
            <el-table-column property="name" label="姓名" width="120"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </Modal>
    </PopupSelect>
  </div>
</template>
<script>
  import PopupSelect from '../components/form/basicComponent/PopouSelect'
  import Modal from '../components/Modal'

  export default {
    name: "FormDemo2",
    components: { PopupSelect, Modal },
    data() {
      return {
        selectValue: "",
        isShowPopup: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: null
      }
    },
    methods: {
      openPopup() {
        this.isShowPopup = true;
      },
      handleOk () {
        this.selectValue = this.currentRow.name;
        this.isShowPopup = false;
      },
      handleCancel () {
        this.isShowPopup = false;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(object) {
        this.currentRow = object;
      }
    },
    reset() {
      this.selectValue = "";
    }
  }
</script>
