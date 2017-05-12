<template>
  <Pc>
    <Header></Header>
    <Content>
      <Sidebars :olist="olist" >
      </Sidebars>
      <SContent padding>
         <router-view>
           
         </router-view>
      </SContent>
    </Content>
  </Pc>
</template>
<style lang="scss">
</style>

<script >
import Pc from '../components/pc/pc'
  export default{
    name:"App",
    data(){
      return{
        bgColor:'green',
        message:"dinglei",
         olist:[
          {
            name:'基础表单',
            children:[
              {
                name:'按钮',
                href:'/button'
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
    },
    created(){
      console.log(Pc);
    }
  } 
</script>