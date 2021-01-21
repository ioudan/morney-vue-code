<template>
  <Layout>
<!--    <Type class-prefix="zzz3" :value.sync="yyy"/>-->
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
  {{type}}
    <hr>
    {{interval}}
  </Layout>
</template>

<script lang="ts">
import Type from '@/components/Money/Type.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs, Type},

})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>
<style scoped lang="scss">
::v-deep .type-tabs-item {
  background: #FFF;

  &.typeSelected {
    background: #C4C4C4;

    &::after {
      display: none;
    }
  }
}

</style>