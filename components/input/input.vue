<template>
   <div class="pclass">
     <input :type="type" disabled="disabled" class="baseClass disabled" :class="[iconClass]"  v-if="disabled">
     <input :type="type" class="baseClass" :class="[iconClass]" v-else>
   </div>
</template>

<script>
  export default{
    name:'Input',
    data(){
      return{

      }
    },
    props:{
      type:{
        type:String,
        default(){
          return 'text'
        }
      },
      disabled:{
        type:Boolean,
        default(){
          return false;
        }
      },
      icon:{
        type:String,
        default(){
          return ''
        }
      }
    },
    computed:{
      iconClass(){
        let res ='';
        if(this.icon!=''){
          res = 'ion-'+this.icon;
        }
        return res;
      }
    }
  }
</script>

<style scoped lang="scss">
   $tranFunc:cubic-bezier(.645,.045,.355,1);
   .pclass{
     display: inline-block;
     -webkit-appearance: none;
     appearance: none;
     height: 35px;
     border-radius: 5px;
     border: 1px solid #999;
     outline: 0;
     font-size: 14px;
     padding: 5px 10px;
     transition: border .3s $tranFunc;
   }
  .baseClass{
    -webkit-appearance: none;
    appearance: none;
    height: 35px;
    border-radius: 5px;
    border: 0px solid #999;
    outline: 0;
    font-size: 14px;
    transition: border .3s $tranFunc;
  }
  .baseClass:focus{
  }

  .disabled{
    background-color: #eef1f6;
    border-color: #d1dbe5;
    color: #bbb;
    cursor: not-allowed;
  }
</style>