<template>
  <section class="baseClass" :style="[Spadding]">
    <slot></slot>
  </section>
</template>

<script>
  export default{
    name:'SContent',
    props:{
      padding:{
        type:String,
        default:'0'
      }
    },
    computed:{
      Spadding(){
        let scope = this;
        let res = {
          padding:"0px"
        }
        if(scope.padding=="") res.padding = "20px";
        else res.padding = scope.padding + "px";
        return res;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .baseClass{
    flex:1 1 0;
    height: inherit;
    overflow-y: auto;
  }

</style>