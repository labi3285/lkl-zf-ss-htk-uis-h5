
<template>
  <div class="lkl-side-menu-section">
    <div class="lkl-side-menu-section-header">
      <div class="lkl-side-menu-section-header-title">{{ title }}：</div>
      <div class="lkl-side-menu-section-header-flex-space" />
      <div class="lkl-side-menu-section-header-right">
        <div @click.stop="onFoldClick" class="lkl-side-menu-section-header-right-text" :style="{ color: selectTextColor }">
          {{ showSelectText }}
          <lkl-icon-fold-arrow :direction="foldDirection" />
        </div>
      </div>
    </div>
    <div v-if="!isFold" class="lkl-side-menu-section-content">
      <slot>
        <div class="lkl-side-menu-section-content-default">暂无内容</div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LklIconFoldArrow from '../lkl-icons/icon-fold-arrow.vue'

@Component({
  components: {
    LklIconFoldArrow
  }
})
export default class LklSideMenuSection extends Vue {
  @Prop({ default: '标题' }) title!: string;
  @Prop({ default: undefined }) selectText!: string;
  @Prop({ default: false }) ignore!: boolean;

  private isFold = false

  private get showSelectText () {
    return this.selectText || (this.isFold ? '展开' : '折叠')
  }

  private get selectTextColor () {
    return this.selectText !== undefined ? (this.ignore ? 'var(--clrT2)' : 'var(--clrTint)') : 'var(--clrT1)'
  }

  private get foldDirection () {
    return this.isFold ? 'down' : 'up'
  }

  private onFoldClick () {
    this.isFold = !this.isFold
  }
}
</script>

<style lang="less">
.lkl-side-menu-section {
  &-header {
    display: flex;
    align-items: center;
    height: 50px;
    &-title {
      margin-left: 16px;
      margin-right: 16px;
      font-size: 16px;
      color: var(--clrT1);
      font-weight: bold;
      flex-shrink: 0;
    }
    &-flex-space {
      flex: 1;
    }
    &-right {
      margin-right: 5px;
      &-text {
        font-size: 12px;
      }
    }
  }
  &-content {
    padding-bottom: 10px;
    &-default {
      font-size: 14px;
      color: var(--clrT3);
      display: flex;
      align-items: center;
      justify-content: center;
      height: 40px;
    }
  }
}
</style>
