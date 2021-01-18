<template>
  <div class="tags">
    <ul class="tagList">
      <!--      <li v-for="(tag,index) in dataSource" :key="index" @click="selected(tag)"-->
      <!--          :class="selectedTags.indexOf(tag)>=0 && 'selected' ">{{ tag }}-->
      <!--      </li>-->
      <li v-for="(tag,index) in dataSource" :key="index" @click="toggle(tag)"
          :class="{selected:selectedTags.indexOf(tag)>=0}">{{ tag }}
      </li>
    </ul>
    <div class="tagAdd">
      <button @click="addTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource!: string[];
  @Prop(Array) readonly value!: string[];
  // @Prop({default: 'default value'}) propB: string | undefined;
  // @Prop([String, Boolean]) propC: string | boolean | undefined;
  // Prop告诉Vue xxx不是data而是prop
  // Number告诉Vue xxx运行时是个Number
  // xxx 属性名
  // number | undefined 告诉TS xxx编译时类型
  selectedTags: string[] = this.value;

  toggle(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex >= 0) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    // this.$emit('xxx', this.selectedTags)
    this.$emit('update:value', this.selectedTags);
    // console.log(this.selectedTags.toString());
  }

  addTag() {
    const tagName = window.prompt('请输入标签名！');
    // if (tagName === '') {
    if (tagName === '') {
      window.alert('标签名不能为空！');
    } else {
      if (this.dataSource) {
        // this.dataSource.push(tagName as string);
        // this.dataSource.push(tagName);
        // this.dataSource = [];
        this.$emit('update:dataSource', [...this.dataSource, tagName]);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  margin-left: 16px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  flex-grow: 1;
  height: 10vh;

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
      margin-right: 24px;
      margin-top: 12px;

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