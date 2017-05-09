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
        type:Number,
        default:0
      }
    },
    computed:{
      Spadding(){
        let scope = this;
        debugger
        return {
          padding:scope.padding + 'px'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .baseClass{
    flex:1 1 0;
  }

</style>