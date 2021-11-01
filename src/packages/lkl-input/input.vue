<template>
  <div class="lkl-input">
    <div class="lkl-input-input">
      <input class="lkl-input-input-input" required ref="input" :style="{ fontSize, color }" v-model="inputText" type="text" :pattern="pattern" @keyup.enter="onEnter" @blur="onBlur" @input="onInput" />
      <div v-show="inputText.length === 0 && !triggleInput" :style="{ fontSize: fontSize, color: placeholderColor }" class="lkl-input-input-placeholder">{{ placeholder }}</div>
    </div>
    <div v-if="clean" v-show="inputText.length > 0" class="lkl-input-clear" @touchStart="onClean" @mousedown.prevent="onClean">
      <svg v-if="cleanStyle === 'round'" t="1634712459678" :fill="placeholderColor" class="lkl-input-clear-icon-round" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2417" width="200" height="200"><path d="M512 56.889344c251.35104 0 455.110656 203.759616 455.110656 455.110656S763.35104 967.110656 512 967.110656 56.889344 763.35104 56.889344 512 260.64896 56.889344 512 56.889344z m180.675584 274.316288c-11.108352-11.108352-29.118464-11.108352-40.226816 0L511.65696 471.998464 370.864128 331.205632c-11.108352-11.108352-29.118464-11.108352-40.226816 0-11.108352 11.108352-11.108352 29.118464 0 40.226816L471.42912 512.22528 330.637312 653.018112c-11.108352 11.108352-11.108352 29.118464 0 40.226816 11.108352 11.108352 29.118464 11.108352 40.226816 0l140.792832-140.792832 140.791808 140.792832c11.108352 11.108352 29.118464 11.108352 40.226816 0 11.108352-11.108352 11.108352-29.118464 0-40.226816L551.882752 512.22528l140.792832-140.792832c11.108352-11.108352 11.108352-29.118464 0-40.226816z" p-id="2418"></path></svg>
      <svg v-if="cleanStyle === 'cross'" t="1634722134622" :fill="placeholderColor" class="lkl-input-clear-icon-cross" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3280" width="200" height="200"><path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" p-id="3281"></path></svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
@Component
export default class LklInput extends Vue {
  @Prop({ required: true }) text!: string;

  @Prop({ default: '' }) public pattern!: string;
  @Prop({ default: '请输入' }) public placeholder!: string;

  @Prop({ default: 'var(--font16)' }) public fontSize!: string;
  @Prop({ default: 'var(--clrT1)' }) public color!: string;
  @Prop({ default: 'var(--clrT3)' }) public placeholderColor!: string;

  @Prop({ default: false }) public clean!: boolean;
  // round, cross
  @Prop({ default: 'round' }) public cleanStyle!: string;

  private inputText = ''
  private triggleInput = false

  @Watch('inputText')
  private onChange () {
    if (this.inputText === '') {
      this.triggleInput = false
    }
    this.$emit('update:text', this.inputText)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }

  private onInput () {
    this.triggleInput = true
  }

  private onEnter () {
    this.$emit('enter')
  }

  private onBlur () {
    this.$emit('blur')
  }

  private onClean () {
    this.inputText = ''
    this.$emit('update:text', '')
    this.$nextTick(() => {
      this.$emit('clean')
    })
  }
}
</script>

<style lang="less">
.lkl-input {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  &-input {
    position: relative;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    &-input {
      height: 100%;
      width: 100%;
      box-sizing: border-box;
    }
    input {
      background-color: transparent;
      outline: none;
      border: 0;
    }
    input::-ms-clear { display: none !important; }
    input::-ms-reveal { display: none !important; }
    &-placeholder {
      position: absolute;
      left: 8px;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      pointer-events: none;
    }
  }
  &-clear {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-icon-round {
      width: 17px;
      height: 17px;
    }
    &-icon-cross {
      width: 15px;
      height: 15px;
    }
  }
}
</style>
