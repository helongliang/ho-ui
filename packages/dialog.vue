<template>
  <transition name="dialog-fade">
    <div
      v-show="visible"
      class="ho-dialog_wrapper"
      @click.self="close">
      <div class="ho-dialog" :style="{ width, marginTop: top }">
        <div class="ho-dialog_header">
          <slot name="title">
            <span class="ho-dialog_title">{{ title }}</span>
          </slot>
          <button
            class="ho-dialog_headerbtn"
            @click="close">
            <i class="ho-icon-close"></i>
          </button>
        </div>
        <div class="ho-dialog_body">
          <slot>
            <span>这是一段信息</span>
          </slot>
        </div>
        <div v-if="$slots.footer" class="ho-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'HoDialog',
  props: {
    visible: Boolean,
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    }
  },
  methods: {
    close: function () {
      this.$emit('update:visible', false)
      this.$emit('close')
    },
    handleEsc: function () {
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.ho-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .ho-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .ho-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ho-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .ho-icon-close{
          color: #909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ho-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
