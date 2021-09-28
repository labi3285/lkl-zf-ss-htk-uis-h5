<template>
  <div class="lkl-nav" :style="{ height: height + 'px' }" >
    <div class="lkl-nav-bar" :style="{ marginTop: statusBarHeight + 'px', height: navBarHeight + 'px' }" >
      <div class="lkl-nav-bar-back">
        <v-icon-back />
      </div>
      <div class="lkl-nav-bar-close">
        <v-icon-close />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { getQueryString } from '../utils/query'
import dsbridge from 'dsbridge'
import vIconBack from '../lkl-icons/icon-back.vue'
import vIconClose from '../lkl-icons/icon-close.vue'

@Component({
  components: {
    vIconBack,
    vIconClose
  }
})
export default class NavBar extends Vue {
  private get statusBarHeight () {
    return parseInt(getQueryString('statusBarHeight')) || 20
  }

  private get navBarHeight () {
    return parseInt(getQueryString('navBarHeight')) || 44
  }

  private get height () {
    return this.statusBarHeight + this.navBarHeight
  }

  private handleBack () {
    if (this.isFirstPage) {
      this.handleClose()
    } else {
      this.$router.go(-1)
    }
  }

  private get isFirstPage (): boolean {
    const { path } = this.$route
    const fristPath = sessionStorage.getItem('fristPath') || null
    if (fristPath === undefined || fristPath === null) {
      return window.history.length === 1
    } else {
      return path === fristPath
    }
  }

  private handleClose () {
    dsbridge.call('htkGoBack')
  }

  private get title () {
    let { title } = this.$route.query
    if (!title) {
      title = this.$route.params.title
    }
    if (!title) {
      const { meta } = this.$route
      if (meta && meta.title) {
        title = meta.title
      }
    }
    return title
  }
}
</script>
<style lang="less" scoped>
.lkl-nav {
  display: flex;
  align-items: center;
  background-color: var(--clrTheme);
  &-bar {
    display: flex;
    align-items: center;
    width: 100%;
    // background-color: yellow;
    &-back {
      padding: 5px 7px 5px 7px;
      // background-color: red;
    }
    &-close {
      padding: 5px 7px 5px 7px;
      // background-color: green;
    }

  }
}
</style>
