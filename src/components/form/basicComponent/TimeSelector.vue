<template>
  <el-form-item :label="label">
    <el-date-picker
      v-model="currentValue"
      @input="onInputEvent"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  import formMixins from '../../../mixins/form-model'
  export default {
    props: ['label', 'name', 'value'],
    mixins: [formMixins],
    data() {
      return {
        currentValue: this.value
      }
    }
  }
</script>
