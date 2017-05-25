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
            name:'轮播',
            href:'/lunbo'
          },
          {
            name:'栅格',
            href:"/grid"
          },
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
             name:'零配件',
             children:[
              {
                name:'图标',
                href:'/icon'
              },
              {
                name:'动画',
                href:'/bounce'
              }
            ]
          },{
             name:'form',
             children:[
              {
                name:'input',
                href:'/input'
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