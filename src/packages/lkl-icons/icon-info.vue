<template>
  <div class="lkl-icon-info"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LklArrow extends Vue {
}
</script>

<style lang="less">
@import "../utils/style.less";

.lkl-icon-info {
  .auto-bg-image('resources/icon-info-htk');
  width: 15px;
  height: 15px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
}
</style>
