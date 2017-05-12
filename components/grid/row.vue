<template>
  <div :class="[displayType,offSetSize,orderSize]">
    <slot></slot>
  </div>
</template>

<script>
  import mixin from './gmixin.js'
  export default{
    name:'Row',
    data(){
      return{

      }
    },
    mixins: [mixin],
    created(){
      this.$parent.setGridType('row');
    }
  }
</script>

<style>
  
</style>