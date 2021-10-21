<template>
  <div class="lkl-htk-head-search-button">
    {{ placeholder }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SearchButton extends Vue {
  @Prop({ default: '请输入内容' }) public placeholder!: string;
}
</script>

<style lang="less" scoped>
  .lkl-htk-head-search-button {
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    border-radius: 16px;
    background-color: var(--clrThemeCard);
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
  }
</style>
