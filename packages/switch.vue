<template>
  <label :class="['ho-switch', { 'is-checked': value }]" @click="handleToggle">
    <span class="ho-switch_core" ref="core">
      <span class="ho-switch_button"></span>
    </span>
    <input class="ho-switch_input" :name="name" type="checkbox" />
  </label>
</template>

<script>
export default {
  name: 'HoSwitch',
  props: {
    name: String,
    value: Boolean,
    activeColor: String,
    inactiveColor: String
  },
  // 方案二：修改开关颜色
  // watch: {
  //   value () {
  //     this.handleSetColor()
  //   }
  // },
  mounted () {
    // 修改开关颜色
    this.handleSetColor()
  },
  methods: {
    handleToggle () {
      this.$emit('input', !this.value)
      // 方案一：修改开关颜色
      this.handleSetColor()
    },
    handleSetColor () {
      this.$nextTick(() => {
        if (this.activeColor || this.inactiveColor) {
          const color = this.value ? this.activeColor : this.inactiveColor
          this.$refs.core.style.borderColor = color
          this.$refs.core.style.backgroundColor = color
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.ho-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;

  .ho-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    .ho-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

// 选中样式
.is-checked {
  .ho-switch_core {
    border-color: #409eff;
    background-color: #409eff;

    .ho-switch_button {
      transform: translateX(20px);
    }
  }
}

// 隐藏input标签
.ho-switch_input {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  color: transparent;
  border-color: transparent;
  background-color: transparent;
  font-size: 0;
  opacity: 0;
  cursor: pointer;
}
</style>
