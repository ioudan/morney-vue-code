<template>
  <Layout class-prefix="layout">
<!--    {{ recordList }}-->
    <!--    {{ tags }}-->
    <!--    <Tags :dataSource.sync="tags" @xxx="yyy"/>-->
    <!--    <Tags :dataSource.sync="tags" v-on:xxx="yyy"/>-->
    <!--    <Tags :dataSource.sync="tags" @update:selectedTags="yyy"/>-->
    <!--    <Tags @update:value="onUpdateTags" :dataSource.sync="tags"/>-->
    <!--    <Type :value="record.type" @update:value="onUpdateType"/>-->
    <Tags :value.sync="record.tags" :dataSource.sync="tags"/>
    <Note :value.sync="record.note"/>
    <Type :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submitRecord="onSubmitRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import Note from '@/components/Money/Note.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const model = require('@/model.ts').default;
// const model = require('@/model.ts').model;
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const {model} = require('@/model.js');
import {model} from '@/model.ts';
// console.log(model);


@Component({
  components: {NumberPad, Type, Note, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];

  recordList: RecordItem[] = model.fetch();
  record: RecordItem = {
    tags: [], note: '', type: '-', amount: '0'

  };
  // onUpdateTags(value: string[]) {
  //   this.record.tags = value;
  //   // console.log(value.toString());
  // }

  // onUpdateNote(value: string) {
  //   this.record.note = value;
  //   // console.log(value);
  // }

  // onUpdateType(value: ('-' | '+')) {
  //   this.record.type = value;
  //   // console.log(value);
  // }

  // onUpdateNumberPad(value: string) {
  //   this.record.amount = value;
  //   // console.log(value);
  // }
  onSubmitRecord() {
    const recordDeepClone = model.clone(this.record);
    recordDeepClone.created = new Date();
    this.recordList.push(recordDeepClone);
    // console.log(this.record);
    // console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordChanged(newRecord: RecordItem) {
    // window.localStorage.setItem('recordList', JSON.stringify(newRecord));
    model.set(newRecord);
  }

}
</script>
<style lang="scss">
.layout-content {
  //border: 3px solid red;
  display: flex;
  flex-direction: column;
  background: #fff;
}
</style>
