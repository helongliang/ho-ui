<template>
  <div class="ho-form-item">
    <label class="ho-form-item_label" :style="{ width: Form.labelWidth }">{{ label }}</label>
    <div class="ho-form-item_content">
      <slot>form-item</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoFormItem',
  props: {
    label: String
  },
  // inject: {
  //   Form: {
  //     default: null
  //   }
  // }
  inject: ['Form']
}
</script>

<style lang="scss" scoped>
.ho-form-item{
  margin-bottom: 25px;
  .ho-form-item_label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .ho-form-item_content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
