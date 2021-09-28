<template>
  <div class="lkl-nav" :style="{ height: height + 'px' }" >
    <div class="lkl-nav-bar" :style="{ marginTop: statusBarHeight + 'px', height: navBarHeight + 'px' }" >
      <div class="lkl-nav-bar-back">
        <v-icon-back color="var(--clrThemeOpposite)" />
      </div>
      <div class="lkl-nav-bar-close">
        <v-icon-close color="var(--clrThemeOpposite)" />
      </div>
      <div class="lkl-nav-bar-flex-space" />
      <div class="lkl-nav-bar-title">{{ showTitle }}</div>
      <div class="lkl-nav-bar-flex-space" />
      <slot name="right">
        <div class="lkl-nav-bar-default-right"></div>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
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
  @Prop({ default: undefined }) private title!: string;

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

  private get showTitle () {
    if (this.title) {
      return this.title
    }
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
  // margin-bottom: -1px;
  &-bar {
    display: flex;
    align-items: center;
    width: 100%;
    &-back {
      padding: 5px 7px 5px 7px;
    }
    &-close {
      padding: 5px 7px 5px 7px;
    }
    &-title {
      font-size: var(--fontNavTitle);
      color: var(--clrThemeOpposite);
      font-weight: bold;
    }
    &-flex-space {
      flex: 1;
    }
    &-default-right {
      width: 70px;
      height: 10px;
    }
  }
}
</style>
