<template>
  <div>
    <label class="note">
      <span class="noteName">备注</span>
      <input type="text" placeholder="在这里添加备注">
    </label>
  </div></template>

<script lang="ts">
export default {
name: "Note"
}
</script>

<style lang="scss" scoped>
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
</style>