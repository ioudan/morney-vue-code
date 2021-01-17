<template>
  <div>
    <ul class="type">
      <li :class="types === '-' && 'typeSelected' " @click="selectType('-')"><span>支出</span></li>
      <li :class="types === '+' && 'typeSelected' " @click="selectType('+')"><span>收入</span></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  types = '-';

  @Prop(Number) readonly xxx: number | undefined;
  // @Prop({default: 'default value'}) propB: string | undefined;
  // @Prop([String, Boolean]) propC: string | boolean | undefined;
  // Prop告诉Vue xxx不是data而是prop
  // Number告诉Vue xxx运行时是个Number
  // xxx 属性名
  // number | undefined 告诉TS xxx编译时类型

  selectType(types: ('-' | '+')) {
    if (['-', '+'].indexOf(types) === -1) {
      throw new Error('类型不存在！');
    }
    this.types = types;

  }

}

</script>

<!--<script>-->
<!--export default {-->
<!--  name: 'Type',-->
<!--  data: () => {-->
<!--    return {-->
<!--      types: '-'  // ’-‘ 支出 ’+‘ 收入-->
<!--    };-->
<!--  },-->
<!--  props:['xxx'],-->
<!--  mounted() {-->
<!--    console.log(this.xxx);-->
<!--  },-->
<!--  methods:{-->
<!--    selectType(type){-->
<!--      if(['-','+'].indexOf(type) === -1){-->
<!--        throw new Error('类型错误！')-->
<!--      }-->
<!--      this.types = type;-->
<!--    }-->
<!--  }-->

<!--};-->
<!--</script>-->

<style lang="scss" scoped>
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
</style>