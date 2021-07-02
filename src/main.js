import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import VueQrcode from '@chenfengyuan/vue-qrcode'

const app = createApp(App)

new WaveUI(app, {
  // Some Wave UI options.
})

app.component(VueQrcode.name, VueQrcode)

app.mount('#app')
