import { createApp } from 'vue/dist/vue.esm-bundler.js' 
import getAffectedCountries from './api.js'

const rootComponent = {
  data() {
    return {
      affected: []
    }
  },
   beforeCreate() {
      getAffectedCountries().then(affectedCountries => {
        this.affected = affectedCountries
      })
    },
    mounted() {
     
    }
}

const app = createApp(rootComponent)
app.mount('#app')