<template>
  <div class="lkl-empty">
    <div class="lkl-empty-message">
      <slot>暂无内容</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LklEmpty extends Vue {
}
</script>

<style lang="less">
.lkl-empty {
  width: 100%;
  background-color: var(--clrBody);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  &-message {
    font-size: 14px;
    color: var(--clrT3);
  }
}
</style>
