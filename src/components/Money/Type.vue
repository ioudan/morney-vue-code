<template>
  <div>
    <ul class="type">
      <li class="typeSelected"><span>支出</span></li>
      <li><span>收入</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Type'
};
</script>

<style lang="scss" scoped>
.type {
  display: flex;
  background: #c4c4c4;

  > li {
    width: 50%;
    font-size: 24px;
    line-height: 22px;
    padding: 21px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.typeSelected::after {
      content: '';
      position: absolute;
      background: #333333;
      width: 100%;
      height: 4px;
      left: 0;
      bottom: 0;
    }
  }
}
</style>