<template>
  <div>
    <form-generator :config="config"
                      @submit="getFormData"
                      v-model="formData"
    >
    </form-generator>
  </div>
</template>
<script>
  import FormGenerator from '../components/form/FormGenerator'
  export default {
    name: "FormGeneratorDemo",
    components: { FormGenerator },
    created () {
      this.queryOrderType();
      this.queryAreaTree();
    },
    data() {
      return {
        formData: {
          orderCode: "",
          orderType: "",
          beginTime: "",
          endTime: "",
          area: [],
          staff:""
        },
        config: {
          fieldsConfig: [
            {
              name: 'orderCode',
              label: '定单编码',
              fieldType: 'TextInput',
              cols: 8
            },
            {
              name: 'orderType',
              label: '定单类型',
              fieldType: 'SelectList',
              options: [],
              cols: 8
            },
            {
              name: 'beginTime',
              label: '开始时间',
              fieldType: 'TimeSelector',
              cols: 8
            },
            {
              name: 'endTime',
              label: '结束时间',
              fieldType: 'TimeSelector',
              cols: 8
            },
            {
              name: 'area',
              label: '区域',
              fieldType: 'selectTree',
              options: [],
              multiple: true,
              cols: 8
            },
            {
              name: 'staff',
              label: '人员选择',
              fieldType: 'StaffSelectPopedit',
              cols: 8
            }
          ],
          buttons: {
            onSubmitText: '提交',
            onResetText: '重置'
          }
        }
      }
    },
    methods: {
      getFormData() {
        console.log(this.formData);
      },
      queryOrderType() {
        setTimeout(() => {
          this.config.fieldsConfig[1].options = [
            { label: 'select1', value: 'key1'},
            { label: 'select2', value: 'key2'},
            { label: 'select3', value: 'key3'}
          ];
         }, 100)
      },
      queryAreaTree() {
        this.config.fieldsConfig[4].options = [
          {
            id: 'a',
            label: 'a',
            children: [{
              id: 'aa',
              label: 'AA',
            }, {
              id: 'ab',
              label: 'AB',
            }],
          }, {
            id: 'b',
            label: 'B',
          }, {
            id: 'c',
            label: 'C',
          }
        ]
      }
    }
  }
</script>
