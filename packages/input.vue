<template>
  <div :class="{
    'ho-input': true,
    'ho-input_suffix' : showSuffix
  }">
    <input
      class="ho-input_inner"
      :class="{ 'is-disabled': disabled }"
      :value="value"
      :type="computedType"
      :name="name"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="showSuffix" class="ho-input-suffix">
      <i
        v-if="clearable && value"
        class="ho-icon-delete"
        @click="clear">
      </i>
      <i
        v-if="showPassword"
        :class="{
          'ho-icon-home': true,
          'ho-icon-home-active': passwordVisible
        }"
        @click="handlePassword">
      </i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'HoInput',
  props: {
    value: String,
    placeholder: String,
    name: String,
    disabled: Boolean,
    clearable: Boolean,
    showPassword: Boolean,
    type: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      // 用于控制是否显示密码框
      passwordVisible: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    },
    computedType () {
      return this.showPassword
        ? this.passwordVisible
          ? 'password'
          : 'text'
        : this.type
    }
  },
  methods: {
    clear () {
      this.$emit('input', '')
    },
    handlePassword () {
      // 方案一：inputCfg2.sync 必须默认转入 type
      this.type === 'text' ? this.$emit('update:type', 'password') : this.$emit('update:type', 'text')
      // 方案二：
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>

.ho-input {
  width: 20%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .ho-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645, 045, .355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }

    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}

// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.ho-input_suffix {
  .ho-input_inner {
    padding-right: 30px;
  }

  .ho-input-suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645, .045, .355, 1);
    }

    .ho-icon-home-active {
      color: red;
    }
  }
}

</style>
