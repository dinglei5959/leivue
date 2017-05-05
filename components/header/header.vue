<template>
  <article class="header" :style="[baseStyle]">
    <slot></slot>
  </article>
</template>

<style scoped lang="scss">
  .header{
    background-color: rgb(32, 160, 255);
  }
</style>

<script>
  export default{
    name:'Header',
    data(){
      let scope = this;
      return{
        baseStyle:{
          flex:'0 0 '+scope.height+'px',
        }
      }
    },
    props:{
      height:{
        type:Number,
        default(){
          return 90;
        }
      }
    }
  }
</script>