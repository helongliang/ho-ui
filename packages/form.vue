<template>
  <div class="ho-form">
    <slot>form</slot>
  </div>
</template>

<script>
export default {
  name: 'HoForm',
  props: {
    model: {
      type: Object,
      required: true,
      default: () => ({})
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
