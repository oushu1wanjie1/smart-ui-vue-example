<template>
  <x-card title="位置">
    <div id="components-a-tooltip-demo-placement" style="margin-left: 30%;">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <x-tooltip placement="topLeft">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>TL</x-button>
        </x-tooltip>
        <x-tooltip placement="top">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>Top</x-button>
        </x-tooltip>
        <x-tooltip placement="topRight">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>TR</x-button>
        </x-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <x-tooltip placement="leftTop">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>LT</x-button>
        </x-tooltip>
        <x-tooltip placement="left">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>Left</x-button>
        </x-tooltip>
        <x-tooltip placement="leftBottom">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>LB</x-button>
        </x-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
        <x-tooltip placement="rightTop">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>RT</x-button>
        </x-tooltip>
        <x-tooltip placement="right">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>Right</x-button>
        </x-tooltip>
        <x-tooltip placement="rightBottom">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>RB</x-button>
        </x-tooltip>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <x-tooltip placement="bottomLeft">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>BL</x-button>
        </x-tooltip>
        <x-tooltip placement="bottom">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>Bottom</x-button>
        </x-tooltip>
        <x-tooltip placement="bottomRight">
          <template #title>
            <span>prompt text</span>
          </template>
          <x-button>BR</x-button>
        </x-tooltip>
      </div>
    </div>
    <x-divider />
    <p>位置有 12 个方向。</p>
    <a-collapse>
      <a-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </a-collapse-panel>
    </a-collapse>
  </x-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import XTooltip from '../../SmartUI/XTooltip.vue'
import XButton from '../../SmartUI/XButton.vue'
import XDivider from '../../SmartUI/XDivider.vue'
import XCard from '../../SmartUI/XCard.vue'
import { positionCode } from './code'
export default defineComponent({
  components: { XCard, XDivider, XButton, XTooltip },
  setup() {
    return {
      buttonWidth: 70,
      code: positionCode
    }
  },
})
</script>
<style scoped>
#components-a-tooltip-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
