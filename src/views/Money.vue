<template>
  <Layout class-prefix="layout">
    <Tags :dataSource.sync="tags" />
    <Note/>
    <Type xxx="321123"/>
    <NumberPad/>
  </Layout>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue';
import Note from '@/components/Money/Note.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

export default {
  name: 'Money',
  components: {NumberPad, Type, Note, Tags},
  data: function () {
    return {
      tags: ['衣', '食', '住', '行']
    };
  },

};
</script>
<style lang="scss">
.layout-content {
  //border: 3px solid red;
  display: flex;
  flex-direction: column;
}
</style>
