export const baseUsageCode = `
  <template>
    <x-tooltip>
      <template #title>prompt text</template>
        Tooltip will show when mouse enter.
    </x-tooltip>
  </template>
`

export const positionCode = `
  <template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, whiteSpace: 'nowrap' }">
      <a-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>TL</a-button>
      </a-tooltip>
      <a-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Top</a-button>
      </a-tooltip>
      <a-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>TR</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, float: 'left' }">
      <a-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>LT</a-button>
      </a-tooltip>
      <a-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Left</a-button>
      </a-tooltip>
      <a-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>LB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ width: \`\${buttonWidth}px\`, marginLeft: \`\${buttonWidth * 4 + 24}px\` }">
      <a-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>RT</a-button>
      </a-tooltip>
      <a-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Right</a-button>
      </a-tooltip>
      <a-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>RB</a-button>
      </a-tooltip>
    </div>
    <div :style="{ marginLeft: \`\${buttonWidth}px\`, clear: 'both', whiteSpace: 'nowrap' }">
      <a-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>BL</a-button>
      </a-tooltip>
      <a-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>Bottom</a-button>
      </a-tooltip>
      <a-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <a-button>BR</a-button>
      </a-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
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
`

export const arrowPoint = `
<template>
  <a-space>
    <x-tooltip placement="topLeft" title="Prompt Text">
      <x-button>Align edge / 边缘对齐</x-button>
    </x-tooltip>
    <x-tooltip placement="top" title="Prompt Text" arrow-point-at-center>
      <x-button>Arrow points to center / 箭头指向中心</x-button>
    </x-tooltip>
  </a-space>
</template>
`

export const colors = `
<template>
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
export default {
  name: 'Colors',
  components: { XButton, XTooltip },
  setup() {
    const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9']
    return {
      customColors
    }
  }
}
</script>
`

export const autoAdjust = `
<template>
  <x-card>
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
  </x-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import XCard from '../../SmartUI/XCard.vue'
import XTooltip from '../../SmartUI/XTooltip.vue'
import XButton from '../../SmartUI/XButton.vue'
const wrapStyles: Record<string, string> = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
}
export default defineComponent({
  name: 'AutoAdjust',
  components: { XButton, XTooltip, XCard },
  setup() {
    const getPopupContainer = (trigger: HTMLElement) => {
      return trigger.parentElement
    }

    return {
      wrapStyles,
      getPopupContainer,
    }
  },
})
</script>
`