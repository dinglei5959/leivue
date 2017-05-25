<template>
  <Page>
    <Widget padding text-center>
      <div>1.基础应用 name="ionic"</div>
      <Icon name="ionic"></Icon>
    </Widget>
    <Widget padding text-center>
      <div>2.通过name去获取各种资源</div>
      <div>
        <Icon name="arrow-up-a"></Icon>
        <Icon name="arrow-down-a"></Icon>
      </div>
      <div>
        详情点击<a href="http://ionicons.com/" style="color:blue">这里</a>
      </div>
    </Widget>
    <Widget padding text-center>
      <div>3.size改变大小</div>
      <div>
        <Icon name="arrow-up-a" size="tiny"></Icon>
        <Icon name="arrow-up-a" size="small"></Icon>
        <Icon name="arrow-up-a"></Icon>
        <Icon name="arrow-up-a" size="big"></Icon>
        <Icon name="arrow-up-a" size="huge"></Icon>
      </div>
    </Widget>
  </Page>
</template>

<script>
  export default{
    data(){
      return{
        name:[
          'fdffdd',
          'fdfd'
        ]
      }
    },
    lei:{
      name:"dinglei"
    },
    created(){
      let scope = this;
    }
  }
</script>

<style lang="scss" scoped>
  
</style>