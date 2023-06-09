<template>
  <x-card title="基本用法">
    <x-tooltip placement="topLeft">
      <template #title>prompt text</template>
      Tooltip will show when mouse enter.
    </x-tooltip>
    <x-divider />
    <p>最简单的用法。</p>
    <x-collapse>
      <x-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </x-collapse-panel>
    </x-collapse>
  </x-card>
</template>

<script lang="ts">
import XTooltip from '../../smart-ui-vue/XTooltip.vue'
import XDivider from '../../smart-ui-vue/XDivider.vue'
import XCard from '../../smart-ui-vue/XCard.vue'
import { baseUsageCode } from './code'
import XCollapse from '../../smart-ui-vue/XCollapse.vue'
import XCollapsePanel from '../../smart-ui-vue/XCollapsePanel.vue'
// eslint-disable-next-line @typescript-eslint/no-var-requires
export default {
  name: 'BaseUsage',
  components: { XCollapsePanel, XCollapse, XCard, XDivider, XTooltip },
  setup() {
    return {
      code: baseUsageCode,
      test: () => {
        console.log('test')
      }
    }
  }

}
</script>
