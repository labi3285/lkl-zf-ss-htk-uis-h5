<template>
  <div class="lkl-htk-head-info-item">
    <div class="lkl-htk-head-info-item-icon" :class="iconCls"></div>
    <span class="lkl-htk-head-info-item-title">{{ title }}： </span>
    <span class="lkl-htk-head-info-item-content">
      <slot>{{ content }}</slot>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LklHeadInfoItem extends Vue {
  @Prop({ default: 'number' }) public iconType!: string;
  @Prop({ default: '' }) public title!: string;
  private get iconCls (): string {
    return 'lkl-htk-head-info-item-icon-' + this.iconType
  }
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-htk-head-info-item {
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &-icon {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
  &-icon-name { .auto-bg-image('./resources/icon_info_name'); }
  // &-icon-name1 { .auto-bg-image('./resources/icon_info_name1'); }
  // &-icon-no { .auto-bg-image('./resources/icon_info_no'); }
  // &-icon-err { .auto-bg-image('./resources/icon_info_err'); }
  &-icon-number { .auto-bg-image('./resources/icon_info_number'); }
  // &-icon-count { .auto-bg-image('./resources/icon_info_count'); }
  &-icon-role { .auto-bg-image('./resources/icon_info_role'); }
  &-icon-branch { .auto-bg-image('./resources/icon_branch_company'); }
  &-title {
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
  }
  &-content {
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
  }
}
</style>
