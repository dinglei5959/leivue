<template>
  <div :class="[gtype,responsive]" :style="[gridHeight]">
    <slot>
      
    </slot>
  </div>
</template>

<script>
  export default{
    name:'Grid',
    data(){
      return{
        gtype:'flex-column'
      }
    },
    props:{
      height:{
        type:String,
        default(){
          return ''
        }
      },
      type:{
        type:String,
        default(){
          return ''
        }
      }
    },
    computed:{
      gridHeight(){
        let scope = this;
        return {
          height:scope.height
        }
      },
      responsive(){
        let scope = this;
        let arr = scope.type.split(' ');
        let res = '';
        arr.forEach(function(e,i){
          res += ' flex-'+e; 
        })
        return  res;
      }
    },
    methods:{
      setGridType(value){
        this.gtype = 'flex-'+value;
      }
    }
  }
</script>

<style lang="scss">
  @import  './common.scss';
</style>