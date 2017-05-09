<template>
  <div style="height:100%;width:100%;display:flex;" :style="[baseStyle]">
      <slot></slot>
  </div>
</template>

<style lang="scss">
  @import  '../../platform/theme/normalize.css';
  @import  '../../platform/theme/global.css';
  @import '../../platform/theme/grid.css';
</style>

<script >
  export default{
    name:"Pc",
    data(){
      return{
        baseStyle:{
          flexDirection:'column'
        }
      }
    },
    created(){

    }
  } 
</script>