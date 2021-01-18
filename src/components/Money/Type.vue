<template>
  <div>
    <ul class="type">
      <li :class="types === '-' && 'typeSelected' " @click="selectType('-')"><span>支出</span></li>
      <li :class="types === '+' && 'typeSelected' " @click="selectType('+')"><span>收入</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  types = '-';

  selectType(types: ('-' | '+')) {
    if (['-', '+'].indexOf(types) === -1) {
      throw new Error('类型不存在！');
    }
    this.types = types;

  }
}

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