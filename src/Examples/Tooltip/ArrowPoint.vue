<template>
  <x-card title="箭头指向">
    <a-space>
      <x-tooltip placement="topLeft" title="Prompt Text">
        <x-button>Align edge / 边缘对齐</x-button>
      </x-tooltip>
      <x-tooltip placement="top" title="Prompt Text" arrow-point-at-center >
        <x-button>Arrow points to center / 箭头指向中心</x-button>
      </x-tooltip>
    </a-space>
    <x-divider />
    <p>设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。</p>
    <a-alert
      message="Warning"
      description="建议只用top,left,bottom,right四个方向，其他方向对不准中心，且由于antd限制暂时无法修复"
      type="warning"
      show-icon
    />
    <a-collapse>
      <a-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </a-collapse-panel>
    </a-collapse>
  </x-card>
</template>

<script>
import { arrowPoint } from './code'
import XCard from '../../smart-ui-vue/XCard.vue'
import XTooltip from '../../smart-ui-vue/XTooltip.vue'
import XDivider from '../../smart-ui-vue/XDivider.vue'
import XButton from '../../smart-ui-vue/XButton.vue'

export default {
  name: 'ArrowPoint',
  components: { XButton, XDivider, XTooltip, XCard },
  setup() {
    return {
      code: arrowPoint
    }
  }
}
</script>

<style scoped>

</style>
