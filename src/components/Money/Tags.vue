<template>
  <div class="labels">
    <ul class="tagList">
      <li v-for="(tag,index) in dataSource" :key="index" @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0}">{{ tag.name }}
      </li>
    </ul>
    <div class="tagAdd">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import {labelListModel} from '@/model/labelListModel';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource!: string[];
  @Prop(Array) readonly value!: string[];
  selectedTags: string[] = [];

  toggle(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex >= 0) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const tagName = window.prompt('请输入标签名')
    if(tagName){
      const res = labelListModel.create(tagName);
      if(res === 0){
        window.alert('标签名重复！')
      }
    }else{
      window.alert('标签名已经存在！')
    }
  }
}
</script>

<style lang="scss" scoped>
.labels {
  padding: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  height: 10vh;
  background: white;

  > .tagList {
    overflow: auto;
    display: flex;
    flex-direction: row;
    margin-bottom: 17px;
    flex-wrap: wrap;

    > li {
      $li-bg: #D9D9D9;
      background: $li-bg;
      border-radius: 18px;
      line-height: 22px;
      color: #484848;
      padding: 0 17px;
      margin-right: 12px;
      margin-top: 6px;

      &.selected {
        background: darken($li-bg, 20%);
      }
    }
  }

  > .tagAdd {
    margin-bottom: 12px;

    button {
      border: none;
      background: #fff;
      padding: 0 4px;
      line-height: 22px;
      position: relative;

      color: #999999;

      &::after {
        content: '';
        position: absolute;
        background: #666666;
        bottom: 0;
        right: 0;
        width: 64px;
        height: 1px;
      }
    }
  }
}
</style>