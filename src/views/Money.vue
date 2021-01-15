<template>
  <div>
    <Layout>
      <div class="tags">
          <ul class="tag">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
          </ul>
        <button class="tag-add">新增标签</button>
      </div>
      <div class="notes">
        <label class="note">
          <input type="text">
        </label>
      </div>
      <div class="types">
        <ul>
          <li>支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="number-pad">
        <div class="output">100</div>
        <div class="pad">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>删除</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>清空</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>OK</div>
          <div>0</div>
          <div>.</div>
        </div>

      </div>

    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>
