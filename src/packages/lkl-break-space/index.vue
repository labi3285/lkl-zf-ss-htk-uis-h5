<template>
  <div class="lkl-break-space" :style="{ width, height }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklBreakSpace extends Vue {
  @Prop({ default: '100%' }) width!: string;
  @Prop({ default: 'var(--marginM)' }) height!: string;
}
</script>

<style lang="less">
.lkl-break-space {
  background-color: var(--clrBackGray);
}
</style>
