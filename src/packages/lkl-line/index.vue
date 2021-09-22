<template>
  <div class="lkl-line" :style="{ width, height, marginLeft, marginRight, marginTop, marginBottom }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSpace extends Vue {
  @Prop({ default: '0' }) private marginLeft!: string;
  @Prop({ default: '0' }) private marginRight!: string;
  @Prop({ default: '0' }) private marginTop!: string;
  @Prop({ default: '0' }) private marginBottom!: string;
  @Prop({ default: '1px' }) private width!: string;
  @Prop({ default: '1px' }) private height!: string;
}
</script>

<style lang="less">
.lkl-line {
  background-color: var(--clrLine);
}
</style>
