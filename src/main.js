import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 引入所有图标，并命名为 Icons
import * as Icons from '@element-plus/icons-vue' 

// 引入element-plus component
import ElementPlus from 'element-plus'
// 引入element-plus component的css
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia());
app.use(router);

// apply the icon on component
for (let i in Icons) {
    app.component(i, Icons[i])
}

app.use(ElementPlus);

app.mount('#app')
