<template>
  <svg t="1632465798880" :fill="color" class="lkl-icon-close" viewBox="0 0 1045 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2606" width="200" height="200"><path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z" p-id="2607"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklClose extends Vue {
  @Prop({ default: 'var(--clrT1)' }) color!: string;
}
</script>

<style lang="less">
.lkl-icon-close {
  width: 20px;
  height: 20px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
