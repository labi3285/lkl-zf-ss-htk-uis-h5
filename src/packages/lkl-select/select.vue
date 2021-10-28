<template>
  <div class="lkl-select" @click.stop="onClick" >
    <svg v-if="isSelect" t="1632376524026" fill='var(--clrTheme)' class="lkl-select-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12355" width="200" height="200"><path d="M512 64C264.576 64 64 264.576 64 512s200.576 448 448 448 448-200.576 448-448S759.424 64 512 64zM717.952 438.592l-256.448 256.256c-8 8.064-19.328 10.752-29.632 8.576-10.496 2.816-22.016 0.192-30.272-8.064L264.96 558.72C252.672 546.496 253.312 526.08 265.344 513.92c12.544-12.48 32.384-12.864 44.864-0.448l121.088 121.152 241.344-241.344c12.416-12.544 33.152-12.16 45.312 0C730.432 405.76 730.496 425.92 717.952 438.592z" p-id="12356"></path></svg>
    <svg v-else t="1632376927166" fill='var(--clrTheme)' class="lkl-select-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5675" width="200" height="200"><path d="M512 992C248 992 32 776 32 512S248 32 512 32s480 216 480 480-216 480-480 480z m0-896C283.2 96 96 283.2 96 512s187.2 416 416 416 416-187.2 416-416S740.8 96 512 96z" p-id="5676"></path></svg>
    <div v-if="label !== undefined" class="lkl-check-label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSelect extends Vue {
  @Prop({ required: true }) isSelect!: boolean;
  @Prop({ default: undefined }) label!: string;

  private onClick () {
    this.$emit('update:isSelect', !this.isSelect)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }
}
</script>

<style lang="less">
.lkl-select {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  &-icon {
    width: 20px;
    height: 20px;
  }
  &-label {
    margin-left: var(--marginS);
    color: var(--clrT1);
  }
}
</style>
