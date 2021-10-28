<template>
  <div :style="{ flex: rate }" class="lkl-layout-flex-space"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLayoutRowLFlexSpace extends Vue {
  @Prop({ default: '1' }) rate!: string;
}
</script>

<style lang="less">
.lkl-layout-flex-space {
  // xx
}
</style>
