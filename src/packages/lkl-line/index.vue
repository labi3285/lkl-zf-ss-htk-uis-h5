<template>
  <div class="lkl-line" :style="{ width, height }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLine extends Vue {
  @Prop({ default: '1px' }) width!: string;
  @Prop({ default: '1px' }) height!: string;
}
</script>

<style lang="less">
.lkl-line {
  background-color: var(--clrLine);
}
</style>
