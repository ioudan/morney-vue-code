<template>
  <div id="app">
    <img v-show="isShow==='ok'" @click="isShow='none'" class="qrcode" src="/qrcode.png" alt="手机二维码预览">
    <router-view/>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class App extends Vue {
  isShow = document.documentElement.clientWidth > 500 ? 'ok' : 'no';

  created() {
    window.onresize = () => {
      if (this.isShow === 'none') return;
      return (() => {
        this.isShow = document.documentElement.clientWidth > 500 ? 'ok' : 'no';
      })();
    };

  }
}

</script>
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

.qrcode {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-family: $font-hei;
  color: #333;
  background: #f5f5f5;
  @media (min-width: 500px) {

    //方案一
    //margin: 0 auto;
    //max-width: 414px;

    //方案二
    display: flex;
    justify-content: center;
    align-items: center;
    .layout-wrapper {
      min-width: 414px;
    }
  }
}

.clearfix::after {
  content: '';
  display: block;
  clear: both;
}
</style>
