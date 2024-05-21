import './assets/main.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import * as antIcons from '@ant-design/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

// 将antDesign图标库的所有图标，每个都注册成组件
Object.keys(antIcons).forEach(key => {
  app.component(key, antIcons[key])
})

app.use(createPinia())
app.use(router)
app.use(Antd)

app.mount('#app')
