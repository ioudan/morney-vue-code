<template>
  <Layout class-prefix="layout">
    <Tags :value.sync="record.tags" :dataSource.sync="tags"/>
    <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.note"/>
    <Type :value.sync="record.type"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordListModel} from '@/model/recordListModel';
import {labelListModel} from '@/model/labelListModel';

const recordList = recordListModel.fetch();
const tagList = labelListModel.fetch();

@Component({
  components: {NumberPad, Type, FormItem, Tags},
})
export default class Money extends Vue {
  tags = tagList;
  recordList = recordList;
  record: RecordItem = {
    tags: [], note: '', type: '-', amount: '0'

  };

  saveRecord() {
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save();
  }

}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
