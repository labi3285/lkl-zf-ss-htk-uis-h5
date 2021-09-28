<template>
  <div class="lkl-confirm" @click.stop="onClickBackground($event)">
    <div class="lkl-confirm-space-top"></div>
    <div class="lkl-confirm-confirm-box" @click.stop.prevent>
      <div v-if="title.length > 0" class="lkl-confirm-confirm-box-title">{{ title }}</div>
      <div v-if="message.length > 0" class="lkl-confirm-confirm-box-message">{{ message }}</div>
      <div v-if="buttonActions.length > 0" class="lkl-confirm-confirm-box-button-box">
        <div v-for="(e, i) in buttonActions" :key="i" :disabled="e.disabled" :class="'lkl-confirm-confirm-box-button-box-button lkl-confirm-confirm-box-button-box-button-' + e.type" @click="onButtonClick($event, e)">{{ e.title }}</div>
      </div>
    </div>
    <div class="lkl-confirm-space-bottom"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LklConfirm as LklConfirmVM, Options, ButtonAction } from './index'

@Component
export default class LklConfirm extends Vue {
  @Prop({ required: true }) private vm!: LklConfirmVM;
  @Prop({ default: undefined }) private options!: Options;
  @Prop({ required: true }) private closeHandler!: () => void;

  private title = ''
  private message = ''
  private buttonActions: ButtonAction[] = []

  private mounted () {
    this.title = this.vm.title || ''
    this.message = this.vm.message || ''
    this.buttonActions = this.vm.buttonActions || []
    this.vm.__updater = (msg?: string) => {
      this.message = msg || ''
    }
  }

  private onClickBackground () {
    if (this.options?.isCloseOnTapBankground === true) {
      this.closeHandler()
    }
  }

  onButtonClick (event: Event, buttonAction: ButtonAction): void {
    if (buttonAction.disabled !== true) {
      if (buttonAction.todo !== undefined && buttonAction.todo !== null) {
        if (buttonAction.isAutoClose === true) {
          this.closeHandler()
        }
        buttonAction.todo()
      } else {
        if (buttonAction.type === 'cancel') {
          this.closeHandler()
        }
      }
    }
  }
}
</script>

<style lang="less">
.lkl-confirm {
  z-index: 98;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  flex-direction: column;
  background-color: var(--clrMask);
  animation: animate-mask-show 1s;
  @keyframes animate-mask-show {
    from { background-color:transparent;}
    to { background-color: var(--clrMask); }
  }
  &-space-top {
    flex: 2;
  }
  &-space-bottom {
    flex: 3;
  }
  &-confirm-box {
    min-width: 240px;
    border-radius: 5px;
    background-color: var(--clrBody);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 0;
    overflow: hidden;
    &-title {
      margin: 15px 15px 0 15px;
      font-size: 20px;
      font-weight: bold;
      color: var(--clrT1);
    }
    &-message {
      margin: 8px 15px 15px 15px;
      font-size: 16px;
      color: var(--clrT2);
    }
    &-button-box {
      width: 100%;
      border-top: 1px solid var(--clrLine);
      display: flex;
      &-button {
        height: 44px;
        flex: 1;
        border: none;
        outline: none;
        padding: 5px 0 5px 0;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        &:not(:last-child) {
          border-right: 1px solid var(--clrLine);
        }
        &-default {
          font-size: 16px;
          color: var(--clrT1);
        }
        &-cancel {
          font-size: 16px;
          color: var(--clrCancel);
        }
        &-warning {
          font-size: 16px;
          color: var(--clrWarning);
        }
        &-danger {
          font-size: 16px;
          color: var(--clrDanger);
          font-weight: bold;
        }
      }
    }
  }
}
</style>
