<template>
    <PopupSelect @openPopup="openPopup" :value="selectValue" :label="label" :name="name">
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
</template>
<script>
  import PopupSelect from '../basicComponent/PopouSelect'
  import Modal from '../../Modal'

  export default {
    name: "StaffSelectPopedit",
    components: { PopupSelect, Modal },
    props: ['label', 'name', 'value'],
    data() {
      return {
        selectValue: this.value,
        isShowPopup: false,
        tableData: [{
          date: '2016-05-02',
          name: '王小虎1',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎2',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎3',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎4',
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
        this.$emit('input', this.name, this.selectValue);
      },
      handleCancel () {
        this.isShowPopup = false;
      },
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(object) {
        this.currentRow = object;
      },
      reset() {
        this.selectValue = "";
      }
    },
    watch: {
      value(val) {
        this.selectValue = val;
      }
    }
  }
</script>
