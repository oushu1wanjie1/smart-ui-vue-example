import { createApp, h } from 'vue'
import App from './App.vue'
import { Form, FormItem, Spin } from 'ant-design-vue'
import router from './routes'
import 'ant-design-vue-3/dist/antd.less'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/stackoverflow-light.css'
import {
  ConfigProvider as ConfigProviderV3,
  Spin as SpinV3,
  message,
} from 'ant-design-vue-3'
import { modifyVars } from './smart-ui-vue/constant'
import DefaultSpin from './smart-ui-vue/helper/DefaultSpin.vue'

hljs.registerLanguage('html', xml)

ConfigProviderV3.config({
  prefixCls: modifyVars['@ant-prefix'],
})

Spin.setDefaultIndicator({
  indicator: DefaultSpin
})


createApp(App).use(Form).use(Spin).use(router).use(hljsVuePlugin).mount('#app')
