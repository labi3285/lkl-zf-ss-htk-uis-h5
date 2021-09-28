<template>
  <div class="page">
    {{ msg}}
    <br>
    <button @click="onClick">点击</button>
    <br>
    <button @click="onPush">跳转</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'cc'
})
export default class A extends Vue {
  private msg = 'c'

  private onClick () {
    this.msg = 'cclicked'
  }

  private onPush () {
    this.$router.push({ path: 'aa' })
  }
}
</script>

<style lang="less">
.page {
  background-color: yellow;
}

</style>
