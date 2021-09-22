<template>
  <div class="lkl-space" :style="{ width, height }" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSpace extends Vue {
  @Prop({ default: '8px' }) private width!: string;
  @Prop({ default: '8px' }) private height!: string;
}
</script>

<style lang="less">
.lkl-space {
}
</style>
