import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

// 关闭浏览器输出关于环境的提示
Vue.config.productionTip = true

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
