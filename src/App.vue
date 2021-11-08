<template>
  <x-input
    class="raw"
    :rules="[{ required: true, message: '请输入主计算集群名称' }]"
    v-model:value="test"
  ></x-input>
  <x-dropdown>
    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
      Hover me
    </a>
    <template #overlay>
      <x-menu>
        <x-menu-item>
          <a href="javascript:;">1st menu item</a>
        </x-menu-item>
        <x-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </x-menu-item>
        <x-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </x-menu-item>
      </x-menu>
    </template>
  </x-dropdown>
</template>

<script lang="ts">
import { ref } from 'vue'
import XInput from './SmartUI/XInput.vue'
import XDropdown from './SmartUI/XDropdown.vue'
import XMenu from './SmartUI/XMenu.vue'
import XMenuItem from './SmartUI/XMenuItem.vue'
export default {
  components: {
    XInput,
    XDropdown,
    XMenu,
    XMenuItem,
  },
  setup() {
    return {
      test: ref('')
    }
  }
}
</script>

<style>
#app {
  padding: 100px 20px;
}
</style>
