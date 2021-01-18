<template>
  <div>
<!--    {{notes}}-->
    <label class="note">
      <span class="noteName">备注</span>
<!--      <input type="text" :value="notes" @input="notes=$event.target.value" placeholder="在这里添加备注">-->
<!--      <input type="text" :value="notes" @input="onChange" placeholder="在这里添加备注">-->
      <input type="text" v-model="notes" placeholder="在这里添加备注">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Note extends Vue {
  notes = '';
//   onChange(e: KeyboardEvent) {
//     const input = e.target as HTMLInputElement;
//     console.log(input.value);
//     if(input.value){
//       this.notes = input.value;
//     }
//   }
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