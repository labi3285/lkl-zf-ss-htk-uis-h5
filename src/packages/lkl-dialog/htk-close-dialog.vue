<template>
  <lkl-popup ref="popup" :isHideOnTapBankground="isHideOnTapBankground" class="lkl-close-dialog" popupClass="lkl-close-dialog-box" :popupStartRect="popupStartRect" :popupRect="popupRect">
    <div @click="onCancel" class="lkl-close-dialog-box-close">
      <div class="lkl-close-dialog-box-close-icon"></div>
    </div>
    <div class="lkl-close-dialog-box-card">
      <svg t="1635905754069" style="transform: rotate(190deg)" fill="var(--clrBackGray)" class="lkl-close-dialog-box-card-back" viewBox="0 0 1182 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4436" width="200" height="200"><path d="M1131.835077 992.807385 1131.835077 992.807385c-68.135385-12.248615-148.48-57.934769-186.801231-142.611692C1088.393846 763.904 1181.538462 627.121231 1181.538462 472.615385c0-261.001846-264.507077-472.615385-590.769231-472.615385S0 211.613538 0 472.615385s264.507077 472.615385 590.769231 472.615385c43.756308 0 86.291692-4.096 127.291077-11.303385 112.64 77.784615 246.232615 102.754462 409.993846 84.243692 9.767385-0.787692 14.020923-5.828923 14.020923-12.839385C1142.153846 999.069538 1137.703385 993.988923 1131.835077 992.807385zM354.461538 551.384615c-43.480615 0-78.769231-35.249231-78.769231-78.769231 0-43.480615 35.288615-78.769231 78.769231-78.769231s78.769231 35.288615 78.769231 78.769231C433.230769 516.135385 397.942154 551.384615 354.461538 551.384615zM590.769231 551.384615c-43.480615 0-78.769231-35.249231-78.769231-78.769231 0-43.480615 35.288615-78.769231 78.769231-78.769231s78.769231 35.288615 78.769231 78.769231C669.538462 516.135385 634.249846 551.384615 590.769231 551.384615zM827.076923 551.384615c-43.480615 0-78.769231-35.249231-78.769231-78.769231 0-43.480615 35.288615-78.769231 78.769231-78.769231s78.769231 35.288615 78.769231 78.769231C905.846154 516.135385 870.557538 551.384615 827.076923 551.384615z" p-id="4437"></path></svg>
      <div v-if="title && title.length > 0" class="lkl-close-dialog-box-card-title">{{ title }}</div>
      <div class="lkl-close-dialog-box-card-message">
        <div class="lkl-close-dialog-box-card-message-text">
          <slot />
        </div>
      </div>
      <div style="height: 20px"></div>
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
export default class LklCloseDialog extends Vue {
  @Prop({ default: '标题' }) title!: string;
  @Prop({ default: '确定' }) confirmTitle!: string;

  @Prop({ default: undefined }) beforeConfirm!: (done: () => void) => void;
  @Prop({ default: undefined }) beforeCancel!: (done: () => void) => void;

  // fixWidth marginLeftRight 互斥
  @Prop({ default: undefined }) dialogWidth!: number;
  @Prop({ default: undefined }) dialogLeftRightMargin!: number;
  @Prop({ default: 200 }) dialogTop!: number;

  @Prop({ default: false }) isHideOnTapBankground!: boolean;

  public show (): void {
    (this.$refs.popup as LklPopup).show()
  }

  public close (): void {
    (this.$refs.popup as LklPopup).close()
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
@import "../utils/style.less";

.lkl-close-dialog {
  &-box {
    &-close {
      margin-bottom: 10px;
      display: flex;
      justify-content: right;
      &-icon {
        .auto-bg-image('resources/icon-close-htk');
        width: 30px;
        height: 30px;
      }
    }
    &-card {
      border-radius: 16px;
      background-color: var(--clrBody);
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      &-back {
        position: absolute;
        right: -20px;
        top: -50px;
        width: 150px;
        height: 150px;
        z-index: 1;
        // transform: rotate(180deg);
      }
      &-title {
        padding: 16px 16px 8px 16px;
        color: var(--clrT1);
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        z-index: 2;
      }
      &-message {
        z-index: 3;
        display: flex;
        justify-content: center;
        padding: 8px 16px 8px 16px;
        &-text {
          color: var(--clrT2);
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
}
</style>
