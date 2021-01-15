<template>
  <nav>

    <router-link to="/labels" class="item" active-class="selected">
      <Icons name="icon-label" class="icon"/>
      标签页
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icons name="icon-money" class="icon"/>
      记账页
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icons name="icon-statistics" class="icon"/>
      统计页
    </router-link>
  </nav>
</template>

<script lang="ts">
// import x from '@/assets/icons/label.svg';
// console.log(x);

// requires and returns all modules that match
const requireAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().map(requireContext);
// import all svg
requireAll(require.context('../assets/icons', true, /\.svg$/));

export default {
  name: 'Nav'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
nav {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > .item {
    padding: 6px 0;
    display: flex;
    flex-direction: column;
    width: 33.33333%;
    justify-content: center; //上下对齐
    align-items: center; // 左右对齐
    .icon {
      height: 26px;
      width: 26px;
    }
  }

  //默认的激活链接时active-class的值，也就是类名
  //> .router-link-active{
  //  color: red;
  //}

  > .item.selected{
    color: $color-selected;
  }

}
</style>