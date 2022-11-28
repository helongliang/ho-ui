<template>
  <label :class="['ho-checkbox', { 'is-checked': isChecked }]">
    <span class="ho-checkbox_input">
      <span class="ho-checkbox_inner"></span>
      <input
        type="checkbox"
        class="ho-checkbox_original"
        v-model="calChecked"
        :value="label"
      />
    </span>
    <span v-if="!!label" class="ho-checkbox_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HoCheckbox',
  props: {
    label: [String, Number, Boolean],
    value: [String, Number, Boolean],
    name: String
  },
  inject: {
    CheckboxGroup: {
      default: null
    }
  },
  computed: {
    calChecked: {
      get () {
        return this.isGroup
          ? this.CheckboxGroup.value
          : this.value
      },
      set (value) {
        this.isGroup
          ? this.CheckboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      // 如果被 group 包裹，判断 label 是否存在于 calChecked 中
      // 如果没有被 group 包裹，直接使用 calChecked
      return this.isGroup
        ? this.calChecked.includes(this.label)
        : this.calChecked
    }
  }
}
</script>

<style lang="scss" scoped>
.ho-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .ho-checkbox_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .ho-checkbox_inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s, cubic-bezier(.71, -.46, .29, 1.46);

      &:after {
        box-sizing: content-box;
        content: '';
        border: 2px solid #ffffff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(1);
        width: 3px;
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }

    .ho-checkbox_original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }

  .ho-checkbox_label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

// 选中的样式
.ho-checkbox.is-checked {
  .ho-checkbox_input {
    .ho-checkbox_inner {
      background-color: #0075ff;
      border-color: #0075ff;
    }

    &:after {
      transform: rotate(45deg) scaleY(1);
    }
  }

  .ho-checkbox_label {
    color: #409eff;
  }
}
</style>
