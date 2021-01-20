<template>
  <div class="numberPad">
    <div class="numberOutput"><span>{{ output || '0' }}</span></div>
    <div class="numberButtons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class NumberPad extends Vue {
  @Prop({default: '0'}) readonly value!: string;
  output = this.value;

  // 没有点击事件，只有鼠标事件 MouseEvent(typescript, dom)
  // 键盘事件，UI事件，键盘事件等等
  inputContent(event: MouseEvent) {
    const button = event.target as HTMLButtonElement;
    const input = button.textContent;
    if (input === null) return;

    if (this.output === '0' && '1234567890'.indexOf(input) >= 0) {
      this.output = input;
    } else {
      if (input === '.') {
        this.output || (this.output = '0');
        if (this.output.indexOf('.') >= 0) {
          return;
        }
      }
      if (input === '0' && !this.output) {
        return;
      }

      this.output += input;

    }
  }

  remove() {
    this.output = this.output.slice(0, -1) || '0';
  }

  clear() {
    this.output = '0';
  }


  ok() {
    this.$emit('update:value', this.output);
    this.$emit('submitRecord');
    this.output = '0';
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.numberPad {
  //border: 1px solid red;
  > .numberOutput {
    background: #fff;
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