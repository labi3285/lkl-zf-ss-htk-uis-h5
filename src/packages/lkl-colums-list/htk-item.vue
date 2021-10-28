<template>
  <div v-if="items" class="lkl-colums-item" :style="backgroundColor" >
    <div v-for="(e, i) in items" :key="i" class="lkl-colums-item-item" :style="columWidth(i)" >
      <slot :name="'left' + i" />
      <slot :name="'item' + i">{{ e }}</slot>
      <slot :name="'right' + i" />
    </div>
    <lkl-icon-arrow  v-if="rightArrowed" color="var(--clrTint)" class="lkl-colums-item-right-arrow" />
    <div class="lkl-colums-item-line" />
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
export default class LklColumsListItem extends Vue {
  @Prop({ default: 0 }) index!: number;
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

  private get backgroundColor () {
    return this.index % 2 === 1 ? 'background-color: var(--clrListDiv);' : ''
  }
}
</script>

<style lang="less">
.lkl-colums-item {
  // margin: 0 var(--marginLR) 0 var(--marginLR);
  padding: var(--paddingTB) 0 var(--paddingTB) 0;
  // width: calc(100% - var(--marginLR) * 2);
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--clrT2);
    font-size: var(--font14);
    font-weight: bold;
    word-break: break-all;
    word-wrap: break-word;
    text-align: center;
  }
  &-right-arrow {
    padding-right: 5px;
  }
  &-line {
    position: absolute;
    right: var(--marginLR);
    left: var(--marginLR);
    bottom: 0;
    height: 1px;
    background-color: var(--clrLine);
  }
}
</style>
