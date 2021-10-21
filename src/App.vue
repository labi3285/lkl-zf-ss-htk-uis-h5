<template>
  <div id="app">
    <lkl-route-cache>
      <router-view v-if="$route.meta.cached" :key="$route.path"/>
    </lkl-route-cache>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.path"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive && !$route.meta.cached" :key="$route.path"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { SizeConfigs, ColorConfigs } from '@/packages/configs-htk'
import { setupProps, updateLklColorProps } from '@/packages/index'
import { getQueryString } from '@/packages/utils/query'

@Component({
  name: 'App'
})
export default class App extends Vue {
  private mounted () {
    setupProps(SizeConfigs)
    updateLklColorProps(ColorConfigs, getQueryString('darkMode') === '1')
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--clrBody);
  width: 100vw;
}
</style>
