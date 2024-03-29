<template>
  <a-tooltip v-if="tooltipContent" :title="tooltipContent">
    <svg :image="image" class="icon" :class="iconExtraClass" :style="iconExtraStyle">
      <use :xlink:href="`#${namespace}${namespace ? '/': ''}${name}`"></use>
    </svg>
  </a-tooltip>
  <svg v-else :image="image" class="icon" :class="iconExtraClass" :style="iconExtraStyle">
    <use :xlink:href="`#${namespace}${namespace ? '/': ''}${name}`"></use>
  </svg>
</template>

<script lang="ts">
/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
import { PropType, reactive, toRefs } from 'vue'

export type ColorType = 'primary' | 'warn' | 'danger' | string
const COLOR_TYPE_LIST = ['primary', 'warn', 'danger']
export default {
  name: 'Icon',
  props: {
    tooltipContent: {
      type: String,
      default: '',
    },
    // image模式，在这个模式下无法改变图标颜色，用于处理复杂图形的显示bug
    image: {
      type: Boolean,
      default: false,
    },
    // svg 名称
    name: String,
    // (可选) 自定义sprite命名空间
    // 防止多个sprite数据源svg名称冲突
    namespace: {
      type: String,
      default: '',
    },
    color: {
      type: String as PropType<ColorType>,
      default: 'primary',
    },
    iconStyle: {
      type: Object as PropType<{
        [value: string]: string
      }>,
      default: () => {
        return {}
      },
    },
    iconClass: {
      type: Object as PropType<{
        [value: string]: boolean
      }>,
      default: () => {
        return {}
      },
    },
  },
  setup(props: any) {
    // 设置图标默认颜色 start
    const colorRefs = reactive<{
      iconExtraClass: {
        [value: string]: boolean
      },
      iconExtraStyle: {
        [value: string]: string
      },
    }>({
      iconExtraClass: {
        ...(props.iconClass || {})
      },
      iconExtraStyle: {
        ...(props.iconStyle || {})
      },
    })
    const color = `${props.color}`
    if (COLOR_TYPE_LIST.includes(color)) {
      colorRefs.iconExtraClass[`icon-${color}-color`] = true
    } else {
      colorRefs.iconExtraStyle.color = `${color}`
      colorRefs.iconExtraStyle.stroke = `${color}`
    }
    // 设置图标默认颜色 end
    return {
      ...toRefs(colorRefs),
    }
  },
}
</script>

<style lang="scss">
.icon {
  width: 18px;
  height: 18px;
  overflow: hidden;
  vertical-align: -4px;
  transition: all .35s;
  fill: currentColor;
  stroke: currentColor;
  // 避免某些情况下浏览器的自动样式
  outline: none;

  &[image="true"] {
    fill: none !important;
    stroke: none !important;
  }
}

.icon.icon-primary-color {
  color: $color-primary-blue;
  stroke: $color-primary-blue;
}

.icon.icon-danger-color {
  color: $color-danger;
  stroke: $color-danger;
}

.icon.icon-warning-color {
  color: $color-warn;
  stroke: $color-warn;
}
</style>
