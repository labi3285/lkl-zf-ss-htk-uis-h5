<template>
  <div :class="isSelect ? 'lkl-label-select-select' : 'lkl-label-select'" @click="onClick">{{ label }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklLabelSelect extends Vue {
  @Prop({ default: false }) private isSelect!: boolean;
  @Prop({ required: true }) private label!: string;

  private onClick () {
    this.$emit('update:isSelect', !this.isSelect)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }
}
</script>

<style lang="less">
.lkl-label-select {
  flex-shrink: 0;
  color: var(--clrTint);
  border-width: 1px;
  border-style: solid;
  border-color: var(--clrTint);
  border-radius: 2px;
  padding: 3px 5px 3px 5px;
  font-size: var(--font12);
  flex-shrink: 0;
}
.lkl-label-select-select {
  color: #ffffff;
  background-color: var(--clrTint);
  border-width: 1px;
  border-style: solid;
  border-color: var(--clrTint);
  border-radius: 2px;
  padding: 3px 5px 3px 5px;
  font-size: var(--font12);
  flex-shrink: 0;
}
</style>
