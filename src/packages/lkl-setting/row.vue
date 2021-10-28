<template>
  <div class="lkl-setting-row">
    <div class="lkl-setting-row-title">
      <span v-if="required" class="lkl-setting-row-title-require">*</span>
      {{ title }}
      <slot name="title" />
    </div>
    <div class="lkl-setting-row-flex-space"></div>
    <div class="lkl-setting-row-content">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSettingRow extends Vue {
  @Prop({ default: '' }) title!: string;
  @Prop({ default: false }) required!: boolean;
}
</script>

<style lang="less">
.lkl-setting-row {
  position: relative;
  display: flex;
  padding: var(--marginTB) var(--marginLR) var(--marginTB) var(--marginLR);
  align-items: center;
  // background-color: var(--clrBody);
  &-title {
    color: var(--clrT1);
    font-size: var(--font16);
    display: flex;
    align-items: center;
    padding-top: var(--marginTB);
    padding-bottom: var(--marginTB);
    &-require {
      color: var(--clrRequire);
      margin-right: var(--marginS);
    }
  }
  &-flex-space {
    flex: 1;
  }
  &-content {
    color: var(--clrT2);
    font-size: var(--font16);
    font-weight: bold;
  }
}
</style>
