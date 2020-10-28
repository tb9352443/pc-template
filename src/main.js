import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/style/index.css'
import './icons'

import './style/font/iconfont.css'
// register globally
import router from './router'
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')