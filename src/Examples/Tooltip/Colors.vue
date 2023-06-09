<template>
  <x-card title="多彩文字提示">
    <a-space>
      <x-tooltip v-for="color in customColors" :key="color" title="prompt text" :color="color">
        <x-button>{{ color }}</x-button>
      </x-tooltip>
    </a-space>
    <x-divider />
    <p>通过配置color属性可以修改提示文字的颜色，代替了原生antd的背景颜色</p>
    <a-collapse>
      <a-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </a-collapse-panel>
    </a-collapse>
  </x-card>
</template>

<script>
import XTooltip from '../../smart-ui-vue/XTooltip.vue'
import XButton from '../../smart-ui-vue/XButton.vue'
import XCard from '../../smart-ui-vue/XCard.vue'
import { colors } from './code'
import XDivider from '../../smart-ui-vue/XDivider.vue'
export default {
  name: 'Colors',
  components: { XDivider, XCard, XButton, XTooltip },
  setup() {
    const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
    return {
      customColors,
      code: colors
    }
  }
}
</script>

<style scoped>

</style>
