<template>
  <div class="lkl-haotk-card">
    <slot />
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklHaotkCard extends Vue {
}
</script>

<style lang="less">
.lkl-haotk-card {
  position: relative;
  margin-left: var(--marginLR);
  margin-right: var(--marginLR);
  background-color: var(--clrBody);
  border-radius: var(--radiusM);
  -webkit-box-shadow: var(--clrShadow) 0px 0px 3px;
  -moz-box-shadow: var(--clrShadow) 0px 0px 3px;
  box-shadow: var(--clrShadow) 0px 0px 3px;
}
</style>
