<template>
  <Layout>
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
    <div>
      <label class="note">
        <span class="noteName">备注</span>
        <input type="text">
      </label>
    </div>
    <div>
      <ul class="type">
        <li class="typeSelected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="numberOutput">100</div>
      <div class="numberButtons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>

    </div>

  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>
.tags {
  //border: 1px solid red;
  margin-left: 16px;
  font-size: 14px;

  > .tagList {
    //border: 1px solid blue;
    display: flex;
    flex-direction: row;
    margin-bottom: 17px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;

      font-family: Arial, serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */
      color: #484848;

      padding: 0 17px;
      margin-right: 24px;
    }

  }

  > .tagAdd {
    margin-bottom: 12px;

    button {
      border: none;
      //border-bottom: 1px solid #666666;
      background: #fff;
      padding: 0 4px;

      font-family: Source Han Sans, serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 22px;
      /* identical to box height, or 157% */
      position: relative;

      color: #999999;

      &::after {
        content: '';
        position: absolute;
        //border: 1px solid #666666;
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
