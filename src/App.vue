<template>
  <div style="margin-top: 40px">
    <x-button @click="validate">test1</x-button>
    <x-button @click="reset">test2</x-button>
    <x-a href="http://www.baidu.com">连接测试</x-a>
<!--    <div style="height: 100px; position: relative;" >-->
     <fixed-table />
     <common-table :loading="true"/>
<!--     <anchor-test />-->
<!--     <my-table />-->
      <x-input
        v-model:value="value"
        ref="input1"
        :disabled="true"
        :rules="[
          { required: true, message: 'Please input Activity name' },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
          },
        ]"
      />
    <x-spin style="width: 200px; height: 200px;" :tip="a ? '111111' : '222222'"></x-spin>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import AnchorTest from './AnchorTest.vue'
import CommonTable from './CommonTable.vue'
import FixedTable from './FixedTable.vue'
import MyTable from './MyTable.vue'
import XInput from './SmartUI/XInput.vue'
import XButton from './SmartUI/XButton.vue'
import XCheckbox from "./SmartUI/XCheckbox.vue";
import XA from "./SmartUI/XA.vue";
import XSpin from "./SmartUI/XSpin.vue";
export default {
  components: {XSpin, XA, XCheckbox, FixedTable, CommonTable, MyTable, XInput, AnchorTest, XButton },
  setup() {
    const input1 = ref(null)
    const a = ref(0)
    onMounted(() => {
      // DOM 元素将在初始渲染后分配给 ref
      console.log(input1.value) // <div>This is a root element</div>
      setTimeout(() => {
        a.value++
      }, 2000)
    })
    return {
      value: ref(''),
      input1,
      a,
      reset: () => input1.value.clearValidate(),
      validate: () => input1.value.validate()
    }
  },
}
</script>