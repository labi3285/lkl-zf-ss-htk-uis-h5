<template>
  <div class="lkl-scroll">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklScroll extends Vue {
}
</script>

<style lang="less">
.lkl-scroll {
  overflow: scroll;
}
</style>
