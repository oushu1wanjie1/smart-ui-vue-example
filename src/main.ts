import { createApp, h } from 'vue'
import App from './App.vue'
import { Form, FormItem, Spin } from 'ant-design-vue'
import router from './routes'

import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/styles/stackoverflow-light.css'

hljs.registerLanguage('html', xml)

// @ts-ignore
import DefaultSpin from './SmartUI/helper/DefaultSpin.vue'
Spin.setDefaultIndicator({
  indicator: DefaultSpin
})


createApp(App).use(Form).use(Spin).use(router).use(hljsVuePlugin).mount('#app')
