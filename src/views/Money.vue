<template>
  <Layout>
    <div class="tags">
      <ul class="tagList">
        <li>衣12312</li>
        <li>食312312312</li>
        <li>住w12w12</li>
        <li>食12w12w</li>
        <li>住12w12w</li>
        <li>食12wqwsqws</li>
        <li>住asxasx</li>
        <li>住asxasx</li>
        <li>行asxasx</li>
        <li>行sxasx</li>
        <li>行asxa</li>
        <li>行as</li>
        <li>行asa</li>
        <li>行sx</li>
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
    flex-wrap: wrap;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      line-height: 22px;
      color: #484848;
      padding: 0 17px;
      margin-right: 24px;
      margin-bottom: 12px;
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
.note{
  font-size: 14px;
  background: #f5f5f5;
  padding-left: 16px;
  display: flex;

  .noteName{
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
  height: 74px;
    color: #999999;
    background: transparent;
    border: none;
    flex-grow: 1;
    padding:0 16px;
  }
}
.type{
  display: flex;
  background:#c4c4c4;
  > li{
    width: 50%;
    font-size: 24px;
    line-height: 22px;
    padding: 21px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.typeSelected::after{
      content: '';
      position: absolute;
      background: #333333;
      width: 100%;
      height: 4px;
      left:0;
      bottom: 0;
    }
  }
}

</style>
