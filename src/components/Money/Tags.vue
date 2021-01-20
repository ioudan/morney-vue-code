<template>
  <div class="labels">
    <ul class="tagList">
      <li v-for="tag in tagList" :key="tag.id" @click="toggle(tag.name)"
          :class="{selected:selectedTags.indexOf(tag.name)>=0}">{{ tag.name }}
      </li>
    </ul>
    <div class="tagAdd">
      <button @click="createTag">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';

@Component
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];

  get tagList(){
    return this.$store.state.tagList;
  }
  created() {
    this.$store.commit('fetchTags');
  }

  toggle(tag: string) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex >= 0) {
      this.selectedTags.splice(tagIndex, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
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