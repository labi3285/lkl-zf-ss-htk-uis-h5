<template>
  <svg t="1632463760238" :fill="color" class="lkl-icon-back" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1776" width="200" height="200"><path d="M701.226667 928a32.64 32.64 0 0 1-22.613334-9.386667l-384-384a32.213333 32.213333 0 0 1 0-45.226666l384-384a32 32 0 1 1 45.44 45.226666L362.666667 512l361.386666 361.386667a32.213333 32.213333 0 0 1 0 45.226666 32.64 32.64 0 0 1-22.826666 9.386667z" p-id="1777"></path></svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklBack extends Vue {
  @Prop({ default: 'var(--clrT1)' }) color!: string;
}
</script>

<style lang="less">
.lkl-icon-back {
  width: 15px;
  height: 15px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
