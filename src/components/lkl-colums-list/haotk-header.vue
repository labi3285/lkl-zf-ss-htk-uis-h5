<template>
  <div class="lkl-colums-header">
    <div v-for="(e, i) in items" :key="i" class="lkl-colums-header-item" :style="columWidth(i)" >
      <slot :name="'left' + i" />
      <slot :name="'item' + i">{{ e }}</slot>
      <slot :name="'right' + i" />
    </div>
    <v-arrow v-if="rightArrowed" class="lkl-colums-header-right-arrow" />
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
}
</script>

<style lang="less">
.lkl-colums-header {
  padding: 15px 0 15px 0;
  background-image: linear-gradient(#FFBE2D, #FFD337);
  margin: 0 8px 0 8px;
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
    word-wrap:break-word;
  }
  &-right-arrow {
    opacity: 0;
  }
}
</style>
