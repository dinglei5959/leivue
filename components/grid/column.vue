<template>
  <div :class="[displayType]">
    <slot></slot>
  </div>
</template>

<script>
  export default{
    name:'Column',
    data(){
      return{

      }
    },
    props:{
      size:{
        type:String,
        default(){
          return '';
        }
      },
      type:{
        type:String,
        default(){
          return 'item'
        }
      }
    },
    computed:{
      displayType:function(){
        let scope = this;
        let type = scope.type.split(" ");
        let res = '';
        res += !!type[0]?`flex-${type[0]}${!!scope.size?`-${scope.size}`:''} `:''
        res += !!type[1]?`flex-${type[1]}${!!scope.size?`-${scope.size}`:''} `:''
        res += !!type[2]?`flex-${type[2]}${!!scope.size?`-${scope.size}`:''} `:''
        return res;
      }
    },
    created(){
      this.$parent.setGridType('column');
    }
  }
</script>

<style>
  
</style>