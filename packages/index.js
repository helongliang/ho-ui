// 整个包的入口
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

import './fonts/iconfont.css'
import Button from './button'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Dialog from './dialog'
import Form from './form'
import FormItem from './form-item'
import Input from './input'
import Radio from './radio'
import RadioGroup from './radio-group'
import Switch from './switch'

const components = [
  Button,
  Checkbox,
  CheckboxGroup,
  Dialog,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Switch
]
const install = function (Vue) {
  components.map(item => Vue.component(item.name, item))
}

// 判断是否直接引入文件，如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
