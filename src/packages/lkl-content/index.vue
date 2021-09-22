<template>
  <div class="lkl-content">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class LklContent extends Vue {
}
</script>

<style lang="less">
.lkl-content {
  width: 100%;
  background-color: var(--clrBody);
}
</style>
