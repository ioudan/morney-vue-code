<template>
  <Layout class-prefix="layout" :style="{height:fixH+'px'}">
    <Tags :value.sync="record.tags"/>
    <FormItem field-name="备注" placeholder="请输入备注" :value.sync="record.note"/>
    <Tabs :value.sync="record.type" :data-source="recordTypeList"/>
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import Tags from '@/components/Money/Tags.vue';
import FormItem from '@/components/Money/FormItem.vue';
import NumberPad from '@/components/Money/NumberPad.vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, NumberPad, FormItem, Tags},
})
export default class Money extends Vue {
  fixH = document.documentElement.clientHeight;

  record: RecordItem = {
    tags: [], note: '', type: '-', amount: '0'
  };

  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList;

  created() {
    this.$store.commit('fetchRecords');
  }

  saveRecord() {
    this.$store.commit('createRecord', this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
}
</style>
