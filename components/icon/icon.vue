<template>
  <i :class="[propClass,size]"></i>
</template>

<script>
  export default{
    name:'Icon',
    props:{
      name:{
        type:String,
        default(){
          return 'icon'
        }
      },
      size:{
        type:String,
        default(){
          return 'normal'
        }
      }
    },
    computed:{
      propClass(){
        let scope = this;
        return "ion-"+scope.name;
      },
    },

  }
</script>

<style lang="scss" scoped>
  .huge{
    font-size:50px;
  }
  .big{
    font-size:40px;
  }
  .normal{
    font-size: 30px;
  }
  .small{
    font-size:20px;
  }
  .tiny{
    font-size:10px;
  }
</style>