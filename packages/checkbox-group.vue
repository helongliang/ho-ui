<template>
  <div class="ho-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HoCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
