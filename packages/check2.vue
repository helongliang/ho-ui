<template>
  <!-- 方案一 -->
  <!--
  <input
    type="checkbox"
    :checked="checked"
    @change="$emit('change', $event.target.checked)"
  />-->
  <!-- 方案二 -->
  <input type="checkbox" v-model="calChecked" />
</template>

<script>
export default {
  name: 'HoCheck2',
  // 方案一
  // model: {
  //   prop: 'checked',
  //   event: 'change'
  // },
  props: {
    checked: Boolean
  },
  computed: {
    // 方案二
    calChecked: {
      get () {
        return this.checked
      },
      set (value) {
        // 使用 change 必须设置 model
        // this.$emit('change', value)
        this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
