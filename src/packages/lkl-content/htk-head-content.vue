<template>
  <div class="lkl-htk-head-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LklHeadContent extends Vue {
}
</script>

<style lang="less">
.lkl-htk-head-content {
  width: 100%;
  background-color: var(--clrTheme);
}
</style>
