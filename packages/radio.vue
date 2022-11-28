<template>
  <label :class="[
    'ho-radio',
     { 'is-checked': label === model }
  ]">
    <span class="ho-radio_input">
      <span class="ho-radio_inner"></span>
    </span>
    <input
      class="ho-radio_original"
      type="radio"
      v-model="model"
      :value="label"
      :name="name"
    />
    <span class="ho-radio_label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'HoRadio',
  // 方案一
  // model: {
  //   props: 'checked',
  //   event: 'change'
  // },
  props: {
    value: [String, Number, Boolean],
    name: String,
    label: [String, Number, Boolean]
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup
          ? this.RadioGroup.value
          : this.value
      },
      // value 是外部组件（<ho-radio label="值">）上的 label 值
      set (value) {
        // 方案一
        // this.$emit('change', value)
        this.isGroup
          ? this.RadioGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    },
    // 用于判断 radio 是否被 RadioGroup 包裹
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.ho-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  .ho-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .ho-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
  }
  .ho-radio_label {
    font-size: 14px;
    padding-left: 10px;;
  }
}

.ho-radio_original {
  opacity: 0;
  outline: none;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  margin: 0;
}

// 选中的样式
.ho-radio.is-checked {
  .ho-radio_input {
    .ho-radio_inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .ho-radio_label {
    color: #409eff;
  }
}
</style>
