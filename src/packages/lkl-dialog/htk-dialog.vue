<template>
  <lkl-popup ref="popup" :isHideOnTapBankground="isHideOnTapBankground" class="lkl-dialog" popupClass="lkl-dialog-box" :popupStartRect="popupStartRect" :popupRect="popupRect">
    <div v-if="title && title.length > 0" class="lkl-dialog-box-title">{{ title }}</div>
    <div class="lkl-dialog-box-message">
      <div class="lkl-dialog-box-message-text">
        <slot />
      </div>
    </div>
    <div style="height: 80px"></div>
    <div class="lkl-dialog-box-buttons">
      <div class="lkl-dialog-box-buttons-confirm" @click="onConfirm" >{{ confirmTitle }}</div>
      <div class="lkl-dialog-box-buttons-cancel" @click="onCancel">取消</div>
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
export default class LklDialog extends Vue {
  @Prop({ default: '标题' }) title!: string;
  @Prop({ default: '确定' }) confirmTitle!: string;

  @Prop({ default: undefined }) beforeConfirm!: (done: () => void) => void;
  @Prop({ default: undefined }) beforeCancel!: (done: () => void) => void;

  // fixWidth marginLeftRight 互斥
  @Prop({ default: undefined }) dialogWidth!: number;
  @Prop({ default: undefined }) dialogLeftRightMargin!: number;
  @Prop({ default: 250 }) dialogTop!: number;

  @Prop({ default: false }) isHideOnTapBankground!: boolean;

  public show (): void {
    (this.$refs.popup as LklPopup).show()
  }

  public close (): void {
    (this.$refs.popup as LklPopup).close()
  }

  public onConfirm (): void {
    if (this.beforeConfirm) {
      this.beforeConfirm(() => {
        this.$emit('confirm')
        this.close()
      })
    } else {
      this.$emit('confirm')
      this.close()
    }
  }

  private onCancel () {
    if (this.beforeCancel) {
      this.beforeCancel(() => {
        this.close()
      })
    } else {
      this.close()
    }
  }

  private get statusBarHeight () {
    return parseInt(getQueryString('statusBarHeight')) || 0
  }

  private _popupRect (maskRect: DOMRect): LklPopupRect {
    let w: number
    if (this.dialogLeftRightMargin) {
      w = (maskRect.width - this.dialogLeftRightMargin * 2)
    } else if (this.dialogWidth) {
      w = this.dialogWidth
    } else {
      w = 280
    }
    return { x: (maskRect.width - w) / 2, y: this.dialogTop, w, h: undefined }
  }

  private popupStartRect (maskRect: DOMRect): LklPopupRect {
    const r = this._popupRect(maskRect)
    return { x: r.x, y: maskRect.height, w: r.w, h: r.h }
  }

  private popupRect (maskRect: DOMRect): LklPopupRect {
    return this._popupRect(maskRect)
  }
}
</script>

<style lang="less">
.lkl-dialog {
  &-box {
    border-radius: 10px;
    background-color: var(--clrBody);
    display: flex;
    flex-direction: column;
    &-title {
      padding: 16px 16px 8px 16px;
      color: var(--clrT1);
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    &-message {
      display: flex;
      justify-content: center;
      padding: 8px 16px 8px 16px;
      &-text {
        color: var(--clrT2);
        font-size: 14px;
        line-height: 20px;
      }
    }
    &-buttons {
      position: absolute;
      height: 60px;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 8px;
      padding-bottom: 16px;
      &-confirm {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        padding: 10px 16px 10px 16px;
        border-radius: 4px;
        background-color: var(--clrTint);
        font-size: 16px;
        color: #ffffff;
        margin-left: 8px;
        margin-right: 8px;
        min-width: 60px;
      }
      &-cancel {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: var(--font16);
        font-weight: bold;
        padding: 9px 15px 9px 15px;
        border-radius: 4px;
        border-style: solid;
        border-width: 1px;
        border-color: var(--clrTint);
        font-size: 16px;
        color: var(--clrTint);
        margin-left: 8px;
        margin-right: 8px;
        min-width: 60px;
      }
    }
  }
}
</style>
