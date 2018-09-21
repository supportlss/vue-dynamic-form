<template>
  <div>
    <el-form-item :label="label">
      <el-input placeholder="请输入内容" v-model="value">
        <el-button slot="append" @click="openPopup"> <i class="fa fa-external-link-square"></i></el-button>
      </el-input>
    </el-form-item>
    <slot name="modal"></slot>
  </div>
</template>

<script>
  //import formMixins from '../../../mixins/form-model'
  export default {
    name: "PopupSelect",
    props: ['label','name','value'],
    //mixins: [formMixins],
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      openPopup () {
        this.$emit('openPopup')
      }
    }
  }
</script>

<style scoped>
  .el-input-group__append {
    cursor: pointer;
  }
</style>
