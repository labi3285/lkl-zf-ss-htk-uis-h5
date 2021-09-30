<template>
  <svg t="1632855297879" :fill="color" class="lkl-icon-fold" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11408" width="200" height="200"><path d="M534.72 649.92l230.4-230.4A32 32 0 0 0 742.4 364.8H281.6a32 32 0 0 0-22.72 54.72l230.4 230.4a32 32 0 0 0 45.44 0z" p-id="11409"></path></svg>
  <!-- <svg t="1632855150599" :fill="color" class="lkl-icon-fold" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3113" width="200" height="200"><path d="M294.668137 433.53473c-9.031974 1.693495-9.596472 12.418964-4.515987 17.499449l208.29989 251.201764c3.951488 6.77398 16.93495 7.902977 20.886439 0l215.07387-251.766262c4.515987-3.38699 5.080485-16.93495-8.467475-16.93495L294.668137 433.53473z" p-id="3114"></path></svg> -->
  <!-- <svg t="1632732550449" :fill="color" class="lkl-icon-fold" :transform="rotate" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2459" width="200" height="200"><path d="M231.424 346.208a32 32 0 0 0-46.848 43.584l297.696 320a32 32 0 0 0 46.4 0.48l310.304-320a32 32 0 1 0-45.952-44.544l-286.848 295.808-274.752-295.36z" p-id="2460"></path></svg> -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklIconFold extends Vue {
  @Prop({ default: 'bottom' }) private direction!: string;
  @Prop({ default: 'var(--clrT2)' }) private color!: string;

  private get rotate (): string {
    switch (this.direction) {
      case 'left':
        return 'rotate(-90)'
      case 'right':
        return 'rotate(90)'
      case 'down':
        return 'rotate(180)'
      default:
        return ''
    }
  }
}
</script>

<style lang="less">
.lkl-icon-fold {
  width: 13px;
  height: 13px;
  // 保证在flex布局中不被压缩
  flex-shrink: 0;
  // background-color: red;
}
</style>
