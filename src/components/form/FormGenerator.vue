<template>
  <div>
    <el-form :inline="true" ref="form" :model="formData" class="demo-form-inline">
      <el-col :span="field.cols" v-for="(field, index) in config.fieldsConfig" v-bind:key="index">
        <component :key="index"
                    :is="field.fieldType"
                    :label="field.label"
                    :value="formData[field.name]"
                    :multiple="field.multiple"
                    @input="updateForm"
                    v-bind="field"
                    :options="field.options"
                    :ref="field.name"
        >
        </component>
      </el-col>
      <slot name="buttons">
        <el-button type="primary" @click="submit" size="small">{{onSubmitText}}</el-button>
        <el-button type="default" @click="reset" size="small">{{onResetText}}</el-button>
      </slot>
    </el-form>
  </div>
</template>
<script>
  import SelectList from './basicComponent/SelectList'
  import TextInput from './basicComponent/TextInput'
  import TimeSelector from './basicComponent/TimeSelector'
  import SelectTree from './basicComponent/SelectTree'
  import StaffSelectPopedit from './businessComponent/StaffSelectPopedit'
  export default {
    name: "FormGenerator",
    components: { SelectList, TextInput, TimeSelector, SelectTree, StaffSelectPopedit},
    props: ["config", "value"],
    data() {
      return {
        formData: this.value,
        onSubmitText: this.config.buttons.onSubmitText || '提交',
        onResetText: this.config.buttons.onResetText || '重置'
      }
    },
    methods: {
      updateForm(fieldName, value) {
        this.formData[fieldName] = value;
      },
      submit() {
        this.$emit("submit");
      },
      reset() {
        for(var name in this.formData) {
          if(typeof this.formData === "String") {
            this.formData[name] = "";
          } else {
            this.formData[name] = null;
          }
        }
      }
    }
  }
</script>
