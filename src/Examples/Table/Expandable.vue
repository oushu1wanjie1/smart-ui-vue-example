<script setup lang="ts">
import XDivider from '../../smart-ui-vue/XDivider.vue'
import XTable from '../../smart-ui-vue/XTable.vue'
import XTableNext from '../../smart-ui-vue/XTableNext.vue'
import { ref } from 'vue'
import XCard from '../../smart-ui-vue/XCard.vue'

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', fixed: true },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  { title: 'Action', key: 'action' },
]

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
]
const expanded = ref([])
</script>

<template>
  <x-card title="可展开">
    <p>当表格内容较多不能一次性完全展示时。</p>
    <x-divider></x-divider>
    <x-table-next :columns="columns" :data-source="data">
      <template #bodyCell="{ column }">
        <template v-if="column.key === 'action'">
          <a>Delete</a>
        </template>
      </template>
      <template #expandedRowRender="{ record }">
        <p style="margin: 0">
          {{ record.description }}
        </p>
      </template>
    </x-table-next>
  </x-card>
</template>

<style scoped lang="scss">

</style>

