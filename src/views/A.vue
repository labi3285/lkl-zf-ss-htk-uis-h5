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
  name: 'aa'
})
export default class A extends Vue {
  private msg = 'a'

  private mounted () {
    console.warn('mounted ' + this.msg)
  }

  private onClick () {
    console.warn('click ' + this.msg)
    this.msg = 'aclicked'
  }

  private onPush () {
    this.$router.push({ path: 'bb' })
  }
}
</script>

<style lang="less">
.page {
  background-color: yellow;
}

</style>
