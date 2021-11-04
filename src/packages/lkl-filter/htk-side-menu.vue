<template>
  <lkl-popup ref="popup" class="lkl-side-menu" popupClass="lkl-side-menu-popup" :popupStartRect="popupStartRect" :popupRect="popupRect" @close="onPopupClose">
    <div class="lkl-side-menu-popup-nav" :style="{ paddingTop: statusBarHeight + 'px' }">
      <div class="lkl-side-menu-popup-nav-content">
        <lkl-icon-back color="var(--clrTint)" class="lkl-side-menu-popup-nav-content-back" @click.native.stop="close" />
        <div class="lkl-side-menu-popup-nav-content-title">{{ title }}</div>
      </div>
    </div>
    <div class="lkl-side-menu-popup-content">
      <slot />
      <div style="height: 30px"></div>
    </div>
    <div class="lkl-side-menu-popup-bottom">
      <div class="lkl-side-menu-popup-bottom-reset" @click="onReset">重置</div>
      <div class="lkl-side-menu-popup-bottom-confirm" @click="onConfirm">确定</div>
    </div>
  </lkl-popup>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LklPopup, { LklPopupRect } from '../lkl-popup/index.vue'
import LklIconBack from '../lkl-icons/icon-back.vue'
import { getQueryString } from '../utils/query'

@Component({
  components: {
    LklIconBack,
    LklPopup
  }
})
export default class LklSideMenu extends Vue {
  @Prop({ default: '更多筛选' }) title!: string;

  public show (): void {
    (this.$refs.popup as LklPopup).show()
  }

  public close (): void {
    (this.$refs.popup as LklPopup).close()
  }

  public onReset (): void {
    this.$emit('reset')
  }

  public onConfirm (): void {
    this.close()
  }

  private onPopupClose () {
    this.$emit('confirm')
  }

  private get statusBarHeight () {
    return parseInt(getQueryString('statusBarHeight')) || 0
  }

  private popupStartRect (maskRect: DOMRect): LklPopupRect {
    return { x: maskRect.width, y: 0, w: maskRect.width - 47, h: maskRect.height }
  }

  private popupRect (maskRect: DOMRect): LklPopupRect {
    return { x: 47, y: 0, w: maskRect.width - 47, h: maskRect.height }
  }
}
</script>

<style lang="less">
.lkl-side-menu {
  &-popup {
    background-color: var(--clrBody);
    display: flex;
    flex-direction: column;
    &-nav {
      width: 100%;
      &-content {
        display: flex;
        align-items: center;
        height: 50px;
        &-back {
          margin-left: 10px;
        }
        &-title {
          margin-left: 10px;
          font-size: 18px;
          color: var(--clrT1);
          font-weight: bold;
        }
      }
    }
    &-content {
      flex: 1;
      height: 300px;
      overflow: scroll;
    }
    &-bottom {
      width: 100%;
      height: 60px;
      position: relative;
      display: flex;
      &-reset {
        flex: 1;
        height: 49px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: var(--clrTint);
        font-weight: bold;
        border-top-style: solid;
        border-top-width: 1px;
        border-top-color: var(--clrLine);
        // border-bottom-style: solid;
        // border-bottom-width: 1px;
        // border-bottom-color: var(--clrLine);
      }
      &-confirm {
        flex: 1;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        color: #ffffff;
        font-weight: bold;
        background-color: var(--clrTint);
        padding-bottom: 10px;
      }
    }
  }
}
</style>
