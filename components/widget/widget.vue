<template>
  <div class="baseClass">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'Widget',
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss" scoped>
  .baseClass{
    background-color:#fff;
  }
</style>