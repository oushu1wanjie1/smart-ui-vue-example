<template>
  <x-table :data-source="data">
    <a-table-column-group>
      <template #title><span style="color: #1890ff">Name</span></template>
      <a-table-column key="firstName" data-index="firstName">
        <template #title
          ><span style="color: #1890ff">First Name</span></template
        >
      </a-table-column>
      <a-table-column key="lastName" title="Last Name" data-index="lastName" />
    </a-table-column-group>
    <a-table-column key="age" title="Age" data-index="age" divider />
    <a-table-column key="address" title="Address" data-index="address" />
    <a-table-column key="tags" title="Tags" data-index="tags">
      <template #default="{ text: tags }">
        <div class="td-with-divider">
          <span>
            <a-tag v-for="tag in tags" :key="tag" color="blue">{{ tag }}</a-tag>
          </span>
        </div>
      </template>
    </a-table-column>
    <a-table-column key="action" title="Action">
      <template #default="{ record }">
        <span>
          <a>Action 一 {{ record.firstName }}</a>
          <a-divider type="vertical" />
          <a>Delete</a>
        </span>
      </template>
    </a-table-column>
  </x-table>
</template>
<script>
import { defineComponent } from 'vue'
import XTable from './smart-ui-vue/XTable.vue'
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]
export default defineComponent({
  components: { XTable },
  setup() {
    return {
      data,
    }
  },
})
</script>
