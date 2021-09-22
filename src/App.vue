<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Configs } from '@/assets/styles/global'
import { updateGlobalProps } from '@/components/index'

@Component({
  name: 'App'
})
export default class App extends Vue {
  private getQueryString (key: string) {
    const query = window.location.search.substring(1)
    const vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=')
      if (pair[0] === key) {
        return pair[1].toString()
      }
    }
    return ''
  }

  private mounted () {
    updateGlobalProps(Configs, this.getQueryString('darkMode') === '1')
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
  height: 100vh;
}
</style>
