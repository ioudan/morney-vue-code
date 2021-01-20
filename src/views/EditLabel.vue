<template>
  <Layout>
    <div class="navBar">
      <!--      <Icons @click.native="backLabels" class="leftIcon" name="icon-left"/>-->
      <router-link to="/labels">
        <Icons class="leftIcon" name="icon-left"/>
      </router-link>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名" :value="label.name" @update:value="update"/>
    </div>
    <div class="createTagWrapper">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {labelListModel} from '@/model/labelListModel';
import FormItem from '@/components/Money/FormItem.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {Button, FormItem}
})
export default class EditLabel extends Vue {
  label?: Label = undefined;

  created() {
    // console.log(this.$route.params.id);
    const id = this.$route.params.id;
    const labels = labelListModel.fetch();
    const label = labels.filter(t => t.id === parseInt(id))[0];
    if (label) {
      this.label = label;
    } else {
      this.$router.replace('/404');
    }
  }

  update(name: string) {
    if(this.label){
      labelListModel.update(this.label.id, name);
    }
  }
  remove(){
    if(this.label){
      if(labelListModel.remove(this.label.id)){
        alert('删除成功！');
        this.$router.push('/labels')
      }else{
        alert('删除失败！');
      }
    }
  }

  // backLabels(){
  //   this.$router.back()
  // }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {
  }

  > .leftIcon {
  }

  > .rightIcon {
    width: 16px;
    height: 16px;
  }

}

.form-wrapper {
  background: white;
  margin-top: 8px;
}

.createTagWrapper {
  text-align: center;
  margin-top: 16px;
}
</style>