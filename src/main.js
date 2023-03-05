import { createApp } from 'vue'
import './style.css'
import HelloWorld from './components/HelloWorld.vue'

const app = createApp({
  data() {
    return {
      foo: 'bar'
    }
  },
})

app.component('HelloWorld', HelloWorld)

app.mount('#app')
