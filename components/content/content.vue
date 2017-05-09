<template>
  <section style="display:flex;" :style="[baseStyle]">
    <slot></slot>
  </section>
</template>

<script>
  export default{
    name:'Content',
    data(){
      let scope = this;
      return{
        baseStyle:{
          flex:'1 1 0',
          background:'#f2f2f2'
        }
      }
    },
    props:{
      height:{
        type:String,
        default(){
          return '1000'
        }
      }
    }
  }
</script>

<style scoped lang='scss'>
  
</style>

