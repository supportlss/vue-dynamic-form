<template>
  <el-form-item :label="label">
    <treeselect v-model="currentValue" @input="onInputEvent" :multiple="multiple" :options="options" />
  </el-form-item>
</template>

<style>
  .vue-treeselect {
    width: 220px;
  }
</style>

<script>
  import formMixins from '../../../mixins/form-model'
  import Treeselect from '@riophae/vue-treeselect'
  import '@riophae/vue-treeselect/dist/vue-treeselect.css'

  export default {
    name: "SelectTree",
    props: ['multiple', 'options', 'name', 'label', 'value'],
    mixins: [formMixins],
    components: { Treeselect },
    data() {
      return {
        currentValue: this.value
      }
    },
    methods: {
      reset() {
        this.currentValue = null;
      }
    }
  }
</script>
