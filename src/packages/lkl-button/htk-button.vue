<template>
  <div class="lkl-button" :class="'lkl-button-' + type + '-' + size + (disabled ? '-disabled' : '')">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklSettingRowButton extends Vue {
  @Prop({ default: 'default' }) type!: string;
  @Prop({ default: 'normal' }) size!: string;
  @Prop({ default: false }) disabled!: boolean;
}
</script>

<style lang="less">
.lkl-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &-default-normal {
    font-weight: bold;
    padding: 10px 16px 10px 16px;
    border-radius: 4px;
    background-color: var(--clrTint);
    font-size: 16px;
    color: #ffffff;
  }
  &-default-normal-disabled {
    font-weight: bold;
    padding: 10px 16px 10px 16px;
    border-radius: 4px;
    background-color: var(--clrDisable);
    font-size: 16px;
    color: #ffffff;
  }
  &-border-normal {
    font-size: var(--font16);
    font-weight: bold;
    padding: 9px 15px 9px 15px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrTint);
    font-size: 16px;
    color: var(--clrTint);
  }
  &-border-normal-disabled {
    font-size: var(--font16);
    font-weight: bold;
    padding: 9px 15px 9px 15px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrDisable);
    font-size: 16px;
    color: var(--clrDisable);
  }
  &-default-small {
    font-weight: bold;
    padding: 6px 8px 6px 8px;
    border-radius: 4px;
    background-color: var(--clrTint);
    font-size: 14px;
    color: #ffffff;
  }
  &-default-small-disabled {
    font-weight: bold;
    padding: 6px 8px 6px 8px;
    border-radius: 4px;
    background-color: var(--clrDisable);
    font-size: 14px;
    color: #ffffff;
  }
  &-border-small {
    font-weight: bold;
    padding: 5px 7px 5px 7px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrTint);
    font-size: 14px;
    color: var(--clrTint);
  }
  &-border-small-disabled {
    font-weight: bold;
    padding: 5px 7px 5px 7px;
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    border-color: var(--clrDisable);
    font-size: 14px;
    color: var(--clrDisable);
  }
}
</style>
