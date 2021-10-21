<template>
  <div v-if="items" class="lkl-colums-item" :style="backgroundColor" >
    <div v-for="(e, i) in items" :key="i" class="lkl-colums-item-item" :style="columWidth(i)" >
      <slot :name="'left' + i" />
      <slot :name="'item' + i">{{ e }}</slot>
      <slot :name="'right' + i" />
    </div>
    <lkl-icon-arrow  v-if="rightArrowed" class="lkl-colums-item-right-arrow" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LklIconArrow from '../lkl-icons/icon-arrow.vue'

@Component({
  components: {
    LklIconArrow
  }
})
export default class LklColumsListItem extends Vue {
  @Prop({ default: 0 }) private index!: number;
  @Prop({ default: undefined }) private items!: string[];
  @Prop({ default: undefined }) private columWidths!: string[];
  @Prop({ default: false }) private rightArrowed!: boolean;

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
  margin: 0 var(--marginLR) 0 var(--marginLR);
  padding: var(--paddingTB) 0 var(--paddingTB) 0;
  width: calc(100% - var(--marginLR) * 2);
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-size: var(--font14);
    font-weight: bold;
    word-break: break-all;
    word-wrap: break-word;
    text-align: center;
  }
  &-right-arrow {
  }
}
</style>
