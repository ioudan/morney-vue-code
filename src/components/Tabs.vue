<template>
  <ul :class="{[classPrefix+'-tabs']: classPrefix,tabs:true}">
    <li v-for="item in dataSource"
        :key="item.value"
        @click="select(item)"
        :style="{height}"
        :class="liClass(item)">{{ item.text }}</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

type DataSourceItem = {
  text: string;
  value: string;
}
@Component
export default class Tabs extends Vue {
  @Prop({required: true, type: Array}) dataSource!: DataSourceItem;

  // 默认值'-'，只有value的值为undefined时才有，为''时也不会用默认的
  @Prop({default: ''}) readonly value!: string;

  // ?问号   的意思是 可能不是undefined
  // !感叹号 的意思是 绝对不可能是undefined
  @Prop(String) classPrefix?: string;
  @Prop({type:String, default: '64px'}) height!: string;

  liClass(item: DataSourceItem) {
    return {[this.classPrefix + '-tabs-item']: this.classPrefix, typeSelected: item.value === this.value, tabsItem:true};
  }

  select(item: DataSourceItem) {
    this.$emit('update:value', item.value);

  }

}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background: #c4c4c4;

  &Item {
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