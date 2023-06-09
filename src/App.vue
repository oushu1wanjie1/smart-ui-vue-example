<template>
  <a-config-provider :locale="zhCN" :prefixCls="modifyVars['@ant-prefix']">
    <router-view></router-view>
  </a-config-provider>
</template>
<script setup lang="ts">
import zhCN from 'ant-design-vue-3/es/locale/zh_CN'
import { modifyVars } from './smart-ui-vue/constant'
import { provide } from 'vue'
provide('$moduleName', 'smart-ui')
</script>
