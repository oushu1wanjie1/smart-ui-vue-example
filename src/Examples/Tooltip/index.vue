<template>
  <div id="tooltip">
    <h1>Tooltip</h1>
    <BaseUsage></BaseUsage>
    <Position></Position>
    <ArrowPoint></ArrowPoint>
    <colors></colors>
    <AutoAdjust></AutoAdjust>
  </div>
</template>

<script lang="ts">
import BaseUsage from './BaseUsage.vue'
import XCard from '../../smart-ui-vue/XCard.vue'
import XDivider from '../../smart-ui-vue/XDivider.vue'
import Position from './Position.vue'
import ArrowPoint from './ArrowPoint.vue'
import Colors from './Colors.vue'
import AutoAdjust from './AutoAdjust.vue'
export default {
  name: 'TooltipExample',
  components: { AutoAdjust, Colors, ArrowPoint, Position, BaseUsage },
}
</script>

<style lang="scss">
#tooltip {
  padding: 40px;
  .smartui-card {
    margin-bottom: 40px;
  }
}
</style>
