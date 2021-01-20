<template>
  <div>
    <Layout>
        <div class="labels">
          <router-link class="label" v-for="label in labelList" :key="label.id" :to="`/labels/edit/${label.id}`">
            <span>{{label.name}}</span>
            <Icons name="icon-right"/>
          </router-link>

        </div>
        <div class="createTagWrapper">
<!--          <Button class="createTag" @click="createLabel">新建标签</Button>-->
          <Button class="createTag" @click.native="createLabel">新建标签</Button>
        </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {labelListModel} from '@/model/labelListModel';
import Button from '@/components/Button.vue';
labelListModel.fetch();

@Component({
  components: {Button}
})
export default class Labels extends Vue {
  labelList = labelListModel.data;
  createLabel(){
    const tagName = window.prompt('请输入标签名')
    if(tagName){
      const res = labelListModel.create(tagName);
      if(res === 0){
        window.alert('标签名重复！')
      }
    }else{
        window.alert('标签名已经存在！')
    }
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