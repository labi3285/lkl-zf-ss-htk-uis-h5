<template>
  <div class="lkl-check" @click.stop="onClick" >
    <svg v-if="isSelect" t="1632376182701" fill='var(--clrTheme)' class="lkl-check-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8655" width="200" height="200"><path d="M924 64H100c-19.9 0-36 16.1-36 36v824c0 19.9 16.1 36 36 36h824c19.9 0 36-16.1 36-36V100c0-19.9-16.1-36-36-36zM753.8 403.1L485.1 671.8c-7 7-16.2 10.5-25.5 10.5s-18.4-3.5-25.5-10.5l-164-164c-14.1-14.1-14.1-36.9 0-50.9 14.1-14.1 36.9-14.1 50.9 0l138.6 138.6 243.2-243.2c14.1-14.1 36.9-14.1 50.9 0 14.2 14 14.2 36.7 0.1 50.8z" p-id="8656"></path></svg>
    <svg v-else t="1632376162062" fill='var(--clrTheme)' class="lkl-check-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8521" width="200" height="200"><path d="M924 960H100c-19.9 0-36-16.1-36-36V100c0-19.9 16.1-36 36-36h824c19.9 0 36 16.1 36 36v824c0 19.9-16.1 36-36 36z m-788-72h752V136H136v752z" p-id="8522"></path></svg>
    <div v-if="label !== undefined" class="lkl-check-label">{{ label }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class LklCheck extends Vue {
  @Prop({ required: true }) isSelect!: boolean;
  @Prop({ default: undefined }) label!: string;

  private onClick () {
    this.$emit('update:isSelect', !this.isSelect)
    this.$nextTick(() => {
      this.$emit('change')
    })
  }
}
</script>

<style lang="less">
.lkl-check {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  &-icon {
    width: 20px;
    height: 20px;
  }
  &-label {
    margin-left: var(--marginS);
    color: var(--clrT1);
  }
}
</style>
