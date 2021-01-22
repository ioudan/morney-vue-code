<template>
    <Layout>
      <div class="labels">
        <router-link class="label" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
          <span>{{ tag.name }}</span>
          <Icons name="icon-right"/>
        </router-link>

      </div>
      <div class="createTagWrapper">
        <!--          <Button class="createTag" @click="createLabel">新建标签</Button>-->
        <Button class="createTag" @click.native="createTag">新建标签</Button>
      </div>
    </Layout>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import {mixins} from 'vue-class-component';
import {TagHelper} from '@/mixins/TagHelper';

@Component({
  components: {Button},
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }

  beforeCreate() {
    this.$store.commit('fetchTags');
  }

}
</script>
<style lang="scss" scoped>

.labels {
  //border: 1px solid red;
  background: #fff;
  font-size: 16px;
  color: #000;
  line-height: 16px;

  > .label {
    //border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    padding-top: 12px;
    padding-bottom: 16px;
    padding-right: 16px;
    position: relative;
    box-shadow: inset 0px -0.5px 0px #BCBBC1;

    > SVG {
      color: #333;
    }
  }
}

.createTagWrapper {
  text-align: center;
  margin-top: 16px;
}


</style>