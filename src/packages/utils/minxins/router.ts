import Vue from 'vue'
import { ComponentOptions } from 'vue/types/options'

export default {
  methods: {
    routerPush (path: string): void {
      console.assert(path.startsWith('/'), 'router path must start with "/"')
      const query = Object.assign({}, this.$route.query)
      this.$router.push({
        path,
        query
      })
    }
  }
} as ComponentOptions<Vue>
