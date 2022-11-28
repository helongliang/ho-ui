<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HoRadioGroup',
  props: {
    // HoRadioGroup 接收到 value
    // 还需要触发当前组件的 input 事件
    value: [String, Number, Boolean]
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
