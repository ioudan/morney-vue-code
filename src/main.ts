import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icons from '@/components/Icons.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icons', Icons);

// 浅拷贝:直接复制地址过来
// 深拷贝：复制内容，但地址不一样

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
