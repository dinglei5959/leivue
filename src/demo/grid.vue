<template>
  <Page>
    <Grid>
      <Column type="item md sx" size="8">ding</Column>
      <Column>lei</Column>
    </Grid>
      <div id="summary" class="panel">
        <h2>flex-layout</h2>
        <p>flex-layout基于24个栅格布局，与传统栅格化的使用方式类同，但提供了更直观、丰富的布局方式。</p>
        <div class="demo demo1">
          <div class="flex-column">
            <div class="flex-item-24">flex-item-24</div>
            <div class="flex-item-12">flex-item-12</div>
            <div class="flex-item-12">flex-item-12</div>
            <div class="flex-item-8">flex-item-8</div>
            <div class="flex-item">flex-item 自动填充宽度</div>
            <div class="flex-item-8">flex-item-8</div>
            <div class="flex-item-8">flex-item-8</div>
            <div class="flex-item-8 flex-offset-8">flex-item-8 , flex-offset-8</div>
          </div>
        </div>
      </div>
    
  </Page>
</template>

<script>
  export default{
    data(){
      return{
        bgColor:'green',
        message:"dinglei",
         olist:[
          {
            name:'fdfparent1',
            children:[
              {
                name:'c11',
                href:'www.baidu.com'
              },
              {
                name:'c12',
                href:'fjdkskfj'
              }
            ]
          },{
             name:'ppppparent2',
             children:[
              {
                name:'c21',
                href:'www.bdfdfdfaidu.com'
              },
              {
                name:'c22',
                href:'fjdfdkskfjd666'
              }
            ]
          },{
             name:'qqqparent2',
             children:[
              {
                name:'c21',
                href:'www.bdfdfdfaidu.com'
              },
              {
                name:'c22',
                href:'fjdfdkskfjd666'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import './layout.css';
  @import './index.css';
</style>