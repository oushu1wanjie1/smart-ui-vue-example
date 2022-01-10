import {createApp, h} from 'vue'
import App from './App.vue'
import { Form, FormItem, Spin } from 'ant-design-vue'
// @ts-ignore
import DefaultSpin from './SmartUI/helper/DefaultSpin.vue'
Spin.setDefaultIndicator({
  indicator: DefaultSpin
})
createApp(App).use(Form).use(Spin).mount('#app')
