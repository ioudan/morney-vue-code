<template>
  <div>
    <Layout>
      <div>
        <ol class="tags">
          <li>
            <span>衣</span>
            <Icons name="icon-right"/>
          </li>
          <li>
            <span>食</span>
            <Icons name="icon-right"/>
          </li>
          <li>
            <span>住</span>
            <Icons name="icon-right"/>
          </li>
          <li>
            <span>行</span>
            <Icons name="icon-right"/>

          </li>
        </ol>
        <div class="createTagWrapper">
          <button class="createTag">新建标签</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Labels',
};
</script>
<style lang="scss" scoped>

.tags {
  //border: 1px solid red;
  background: #fff;
  font-size: 16px;
  color: #000;
  line-height: 16px;

  > li {
    //border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    margin-left: 15px;
    padding-top: 12px;
    padding-bottom: 16px;
    padding-right: 16px;
    position: relative;
    box-shadow: inset 0px -0.5px 0px #BCBBC1;
    > SVG{
      color: #333;
    }
  }

}

.createTag {

  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #FFFFFF;
  background: #767676;
  border-radius: 4px;
  border: none;
  padding: 9px 15px 9px 16px;
  margin-top: 44px;
  &Wrapper{
    //border: 1px solid red;
    text-align: center;
  }
}


</style>