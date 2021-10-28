<template>
  <div v-if="items" class="lkl-colums-header">
    <div v-for="(e, i) in items" :key="i" class="lkl-colums-header-item" :style="columWidth(i)" >
      <slot :name="'left' + i" />
      <slot :name="'item' + i">{{ e }}</slot>
      <slot :name="'right' + i" />
    </div>
    <lkl-icon-arrow  v-if="rightArrowed" class="lkl-colums-header-right-arrow" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import vIconArrow from '../lkl-icons/icon-arrow.vue'

@Component({
  components: {
    vIconArrow
  }
})
export default class LklColumsList extends Vue {
  @Prop({ default: undefined }) items!: string[];
  @Prop({ default: undefined }) columWidths!: string[];
  @Prop({ default: false }) rightArrowed!: boolean;

  private columWidth (i: number) {
    if (this.columWidths && this.columWidths.length > i) {
      const e = this.columWidths[i]
      if (e.indexOf('px') !== -1) {
        return `width: ${e};`
      } else {
        return `flex: ${e};`
      }
    }
    return 'flex: 1;'
  }
}
</script>

<style lang="less">
.lkl-colums-header {
  padding: var(--paddingTB) 0 var(--paddingTB) 0;
  background-color: var(--clrListHead);
  width: calc(100% - var(--marginLR) * 2);
  width: 100%;
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--clrT2);
    font-size: var(--font14);
    word-break: break-all;
    word-wrap:break-word;
    text-align: center;
  }
  &-right-arrow {
    opacity: 0;
    padding-right: 5px;
  }
}
</style>
