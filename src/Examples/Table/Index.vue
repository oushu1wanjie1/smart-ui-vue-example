<script setup lang="ts">
import Expandable from './Expandable.vue'
import BaseUsage from './BaseUsage.vue'
</script>

<template>
  <div id="table">
    <BaseUsage />
    <Expandable />
  </div>
</template>

<style lang="scss">
#table {
  padding: 40px;
  .smartui-card {
    margin-bottom: 40px;
  }
}
</style>
