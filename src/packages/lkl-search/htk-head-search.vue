<template>
  <div class="lkl-htk-head-search">
    <lkl-input class="lkl-htk-head-search-input" color="#ffffff" :clean="true" cleanStyle="cross" placeholderColor="rgba(255, 255, 255, 0.8)" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import LklInput from '../lkl-input/input.vue'

@Component({
  components: {
    LklInput
  }
})
export default class SearchButton extends Vue {
  @Prop({ default: '请输入内容' }) public placeholder!: string;
}
</script>

<style lang="less" scoped>
  .lkl-htk-head-search {
    padding-left: 20px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;
    border-radius: 16px;
    background-color: var(--clrThemeCard);
    font-size: 14px;
    color: rgba(255, 255, 255, 0.8);
    &-input {
      width: 100%;
      height: 100%;
    }
  }
</style>
