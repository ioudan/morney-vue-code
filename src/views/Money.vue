<template>
  <Layout class-prefix="layout" >
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
        <input type="text" placeholder="在这里添加备注">
      </label>
    </div>
    <div>
      <ul class="type">
        <li class="typeSelected"><span>支出</span></li>
        <li><span>收入</span></li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="numberOutput"><span>100</span></div>
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
        <button class="ok">OK</button>
        <button class="zero">0</button>
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
<style lang="scss">
.layout-content {
  border: 3px solid red;
  display: flex;
  flex-direction: column;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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

.note {
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;

  .noteName {
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 74px;
    color: #999999;
    background: transparent;
    border: none;
    flex-grow: 1;
    padding: 0 16px;
  }
}

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

.numberPad {
  //border: 1px solid red;
  > .numberOutput {
    @extend %clearFix;
    @extend %innerShadow;
    text-align: right;
    font-family: Consolas, serif;
    font-size: 36px;
    line-height: 22px;
    padding: 25px 16px;
  }

  > .numberButtons {
    @extend %clearFix;

    > button {
      background: transparent;
      border: none;
      width: 25%;
      height: 64px;
      font-size: 18px;
      line-height: 22px;
      float: left;

      &.ok {
        height: 64*2px;
        float: right;
      }

      &.zero {
        width: 25*2%;
      }

      $bg: #F2F2F2;

      &:nth-child(1) {
        background: $bg;
      }

      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }

      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }

      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }

      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }

      &:nth-child(14) {
        background: darken($bg, 4*5%);
      }

      &:nth-child(12), {
        background: darken($bg, 4*6%);
      }
    }
  }
}
</style>
