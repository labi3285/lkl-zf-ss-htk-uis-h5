<template>
  <div class="lkl-htk-head-infos">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LklHeadInfos extends Vue {
}
</script>

<style lang="less">
.lkl-htk-head-infos {
  margin: 0 var(--marginLR) 0 var(--marginLR);
  padding: 18px 24px 10px 24px;
  border-radius: 8px;
  background-color: var(--clrThemeCard);
}
</style>
