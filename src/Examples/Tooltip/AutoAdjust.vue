<template>
  <x-card title="自动调整位置">
    <div :style="wrapStyles">
      <x-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
        <x-button>Adjust automatically / 自动调整</x-button>
      </x-tooltip>
      <br />
      <x-tooltip
        placement="left"
        title="Prompt Text"
        :get-popup-container="getPopupContainer"
        :auto-adjust-overflow="false"
      >
        <x-button style="margin-top: 10px">Ingore / 不处理</x-button>
      </x-tooltip>
    </div>
    <x-divider></x-divider>
    <p>气泡框不可见时自动调整位置。</p>
    <a-collapse>
      <a-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </a-collapse-panel>
    </a-collapse>
  </x-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import XCard from '../../smart-ui-vue/XCard.vue'
import XTooltip from '../../smart-ui-vue/XTooltip.vue'
import XButton from '../../smart-ui-vue/XButton.vue'
import { autoAdjust } from './code'
import XDivider from '../../smart-ui-vue/XDivider.vue'
const wrapStyles: Record<string, string> = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
}
export default defineComponent({
  name: 'AutoAdjust',
  components: { XDivider, XButton, XTooltip, XCard },
  setup() {
    const getPopupContainer = (trigger: HTMLElement) => {
      return trigger.parentElement
    }

    return {
      wrapStyles,
      getPopupContainer,
      code: autoAdjust
    }
  }
})
</script>


<style scoped>

</style>
