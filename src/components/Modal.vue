<template>
  <div class="modal" v-show="visible">
    <button @click="close" class="modal-close-btn"><span class="modal-close-x">X</span></button>
    <div class="modal-header">
      <h3 class="modal-title">{{title}}</h3>
    </div>
    <div class="modal-body">
      <slot name="body">
        这是modal弹框的主体
      </slot>
    </div>

    <div class="modal-footer">
      <slot name="footer">
        <el-button type="primary" @click="confirm" size="small">{{onClickText}}</el-button>
        <el-button @click="close" size="small">{{onCancelText}}</el-button>
      </slot>
    </div>
    <div v-show="hasMask" class="modal-background"></div>
  </div>
</template>

<script>
  export default {
    name: 'Modal',
    props: ['hasMask', 'visible', "title", "onClickText", "onCancelText"],
    data () {
      return {
      }
    },
    methods: {
      confirm: function () {
        this.$emit('onOk')
      },
      close: function () {
       this.$emit('onCancel')
      }
    }
  }
</script>

<style scoped>
  .modal-background {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
  }
  .modal {
    min-width: 380px;
    position: absolute;
    top: 100px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
    background: #fff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  .modal-header {
    padding: 16px 24px;
    border-radius: 4px 4px 0 0;
    background: #fff;
    color: rgba(0, 0, 0, 0.65);
    border-bottom: 1px solid #e8e8e8;
    text-align: left;
  }
  .modal-title {
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
  }
  .modal-close-btn {
    position: absolute;
    top: 0;
    right: 0;
    border: 0;
    outline: 0;
    -webkit-transition: color .3s;
    -moz-transition: color .3s;
    -ms-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s;
    color: rgba(0,0,0,.3);
    background: transparent;
    cursor: pointer;
  }
  .modal-close-btn:hover {
    color: #333;
  }
  .modal-close-x {
    display: block;
    width: 56px;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    text-align: center;
  }
  .modal-body {
    padding: 24px;
    font-size: 14px;
    line-height: 1.5;
    word-wrap: break-word;
  }
  .modal-footer {
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    border-radius: 0 0 4px 4px;
  }

</style>
