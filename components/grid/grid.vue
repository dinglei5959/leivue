<template>
  <div :class="[gtype]">
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
      
    },
    computed:{

    },
    methods:{
      setGridType(value){
        this.gtype = 'flex-'+value;
      }
    }
  }
</script>

<style lang="scss">
  
</style>