<template>
  <div class="anchor-test">
    <x-anchor style="top: 500px">
      <x-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
      <x-anchor-link href="#components-anchor-demo-static" title="Static demo" />
      <x-anchor-link href="#API" title="API">
        <x-anchor-link href="#Anchor-Props" title="Anchor Props" :depth="1" />
        <x-anchor-link href="#Link-Props" title="Link Props" :depth="1"/>
      </x-anchor-link>
    </x-anchor>
    <div id="components-anchor-demo-basic">components-anchor-demo-basic</div>
    <div id="components-anchor-demo-static">components-anchor-demo-static</div>
    <div id="API">
      API
      <div id="Anchor-Props">Anchor-Props</div>
      <div id="Link-Props">Link-Props</div>
    </div>
  </div>
</template>

<script>
import XAnchor from './SmartUI/XAnchor.vue'
import XAnchorLink from './SmartUI/XAnchorLink.vue'
export default {
  components: { XAnchor, XAnchorLink },
  setup() {
  },
}
</script>
<style lang="scss">
.anchor-test {
  padding-left: 300px;
}
.anchor-test .ant-affix {
  left: 10px;
}
#components-anchor-demo-basic {
  width:100%;
  height: 800px;
  background: red;
}
#components-anchor-demo-static {
  width:100%;
  height: 800px;
  background: yellow;
}
#API {
  width:100%;
  background: blue;
}
#Anchor-Props {
  width:100%;
  height: 800px;
  background: greenyellow;
}
#Link-Props {
  width:100%;
  height: 1200px;
  background: cyan;
}
</style>