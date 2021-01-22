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

// 将页面下拉滚动200px
// window.onload = function () {
//   setTimeout(function () {
//     window.scrollTo(0, 200);
//   }, 0);
// };
// if (document.documentElement.clientWidth > 500) {
//   // window.alert('请使用手机打开页面，以保证浏览效果！');
//   const img = document.createElement('img');
//   img.src = '/qrcode.png';
//   img.style.position = 'fixed';
//   img.style.left = '50%';
//   img.style.top = '50%';//这样仅仅只是图片的左上角居中
//   img.style.transform = 'translate(-50%, -50%)';
//   img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
//   document.body.appendChild(img);
// }