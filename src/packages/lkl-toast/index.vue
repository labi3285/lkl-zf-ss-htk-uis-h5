<template>
<!-- @mousemove.prevent="onNoop" -->
  <div class="lkl-toast" :class="'lkl-toast-position-' + position" @mousewheel.prevent="() => {}" @touchmove.prevent="() => {}" @click.stop="onClickBackground($event)">
    <div :class="'lkl-toast-position-' + position + '-space-top'"></div>
    <div class="lkl-toast-message-box" @click.stop.prevent>
      <svg v-if="type === 'loading'" class="lkl-toast-message-box-icon-loading" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50" xml:space="preserve">
        <path fill="#ffffff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(275.098 25 25)">
          <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
        </path>
      </svg>
      <div v-if="type !== 'default' && type !== 'loading'" class="lkl-toast-message-box-icon" :class="'lkl-toast-message-box-icon-' + type"></div>
      <div v-if="type !== 'default'" class="lkl-toast-message-box-space"></div>
      <div v-if="message.length > 0" class="lkl-toast-message-box-message">{{ message }}</div>
    </div>
    <div :class="'lkl-toast-position-' + position + '-space-bottom'"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { LklToast as LklToastVM, LklToastType, LklToastOptions } from './index'

@Component
export default class LklToast extends Vue {
  @Prop({ required: true }) vm!: LklToastVM;
  @Prop({ default: undefined }) options!: LklToastOptions;
  @Prop({ required: true }) cleanHandler!: () => void;

  private get position (): string {
    return this.options?.position || 'auto'
  }

  private message = ''
  private type: LklToastType = 'default'

  private mounted () {
    this.type = this.vm.type
    this.message = this.vm.message || ''
    this.vm.__updater = (msg?: string) => {
      this.message = msg || ''
    }
  }

  private onClickBackground () {
    if (this.type !== 'loading') {
      this.cleanHandler()
    }
  }
}
</script>

<style lang="less">
.lkl-toast {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  &-message-box {
    min-width: 70px;
    border-radius: 5px;
    background-color: var(--clrToast);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 15px 15px;
    margin: 15px;
    &-loading {
      width: 30px;
      height: 30px;
    }
    &-icon {
      width: 30px;
      height: 30px;
      &-success {
        background-image: url('./success.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
      &-warning {
        background-image: url('./warning.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
      &-error {
        background-image: url('./error.png');
        background-size: cover;
        background-repeat: no-repeat;
      }
    }
    &-space {
      height: 5px;
    }
    &-message {
      font-size: 16px;
      color: #ffffff;
      word-break: break-all;
    }
  }
}
.lkl-toast-position-auto {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-space-top {
    width: 100%;
    flex: 2;
  }
  &-space-bottom {
    width: 100%;
    flex: 3;
  }
}
.lkl-toast-position-center {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-space-top {
    flex: 1;
  }
  &-space-bottom {
    flex: 1;
  }
}
.lkl-toast-position-top {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-space-top {
    height: 30px;
  }
  &-space-bottom {
    flex: 1;
  }
}
.lkl-toast-position-bottom {
  display: flex;
  align-items: center;
  flex-direction: column;
  &-space-top {
    flex: 1;
  }
  &-space-bottom {
    height: 30px;
  }
}
</style>
