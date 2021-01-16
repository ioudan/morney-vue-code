<template>
  <div class="tags">
    <ul class="tagList">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="tagAdd">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
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
      background: #D9D9D9;
      border-radius: 18px;
      line-height: 22px;
      color: #484848;
      padding: 0 17px;
      margin-right: 24px;
      margin-top: 12px;
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