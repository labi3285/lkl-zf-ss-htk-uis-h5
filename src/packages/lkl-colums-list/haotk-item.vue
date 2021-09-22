<template>
  <div class="lkl-colums-item" :style="backgroundColor" >
    <div v-for="(e, i) in items" :key="i" class="lkl-colums-item-item" :style="columWidth(i)" >
      <slot :name="'left' + i" />
      <slot :name="'item' + i">{{ e }}</slot>
      <slot :name="'right' + i" />
    </div>
    <v-arrow v-if="rightArrowed" class="lkl-colums-item-right-arrow" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import vArrow from '../lkl-arrow/index.vue'

@Component({
  components: {
    vArrow
  }
})
export default class LklColumsList extends Vue {
  @Prop({ default: 0 }) private index!: number;
  @Prop({ default: [] }) private items!: string[];
  @Prop({ default: [] }) private columWidths!: string[];
  @Prop({ default: false }) private rightArrowed!: boolean;

  private columWidth (i: number) {
    if (this.columWidths.length > i) {
      const e = this.columWidths[i]
      if (e.indexOf('px') !== -1) {
        return `width: ${e};`
      } else {
        return `flex: ${e};`
      }
    }
    return ''
  }

  private get backgroundColor () {
    return this.index % 2 === 1 ? 'background-color: var(--clrListDiv);' : ''
  }
}
</script>

<style lang="less">
.lkl-colums-item {
  margin: 0 8px 0 8px;
  padding: 15px 0 15px 0;
  width: calc(100% - 8px * 2);
  display: flex;
  align-items: center;
  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333333;
    font-size: 14px;
    font-weight: bold;
    word-break: break-all;
    word-wrap: break-word;
  }
  &-right-arrow {
  }
}
</style>
