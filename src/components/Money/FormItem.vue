<template>
  <div>
    <!--    {{value}}-->
    <label class="note">
      <span class="noteName">{{ fieldName }}</span>
      <!--      <input type="text" :value="value" @input="value=$event.target.value" placeholder="在这里添加备注">-->
      <!--      <input type="text" :value="value" @input="onChange" placeholder="在这里添加备注">-->
      <!--      <input type="text" v-model="value" :placeholder="placeholder">-->
      <input type="text" :value="value" @change="onValueChanged($event.target.value)" :placeholder="placeholder">
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// import {Component, Prop, Watch} from 'vue-property-decorator';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  @Prop({default: ''}) readonly value!: string;
  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  // @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }

//   onChange(e: KeyboardEvent) {
//     const input = e.target as HTMLInputElement;
//     console.log(input.value);
//     if(input.value){
//       this.value = input.value;
//     }
//   }
}
</script>

<style lang="scss" scoped>
.note {
  font-size: 14px;
  //background: #f5f5f5;
  padding-left: 16px;
  display: flex;

  .noteName {
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    height: 44px;
    color: #999999;
    background: transparent;
    border: none;
    flex-grow: 1;
    padding: 0 16px;
  }
}
</style>