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
  name: 'bb'
})
export default class B extends Vue {
  private msg = 'b'

  private onClick () {
    this.msg = 'bclicked'
  }

  private onPush () {
    this.$router.push({ path: 'cc' })
  }
}
</script>

<style lang="less">
.page {
  background-color: yellow;
}

</style>
