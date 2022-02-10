<template>
  <x-card title="基本用法">
    <x-tooltip placement="topLeft">
      <template #title>prompt text</template>
      Tooltip will show when mouse enter.
    </x-tooltip>
    <x-divider />
    <p>最简单的用法。</p>
    <a-collapse>
      <a-collapse-panel key="1" header="代码">
        <highlightjs language="html" :code="code"></highlightjs>
      </a-collapse-panel>
    </a-collapse>
  </x-card>
</template>

<script lang="ts">
import XTooltip from '../../SmartUI/XTooltip.vue'
import XDivider from '../../SmartUI/XDivider.vue'
import XCard from '../../SmartUI/XCard.vue'
import { baseUsageCode } from './code'
// eslint-disable-next-line @typescript-eslint/no-var-requires
export default {
  name: 'BaseUsage',
  components: { XCard, XDivider, XTooltip },
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
