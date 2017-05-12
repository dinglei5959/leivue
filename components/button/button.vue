<template>
  <button class="disabled" :class="[size]" v-if="disabled" disabled="disabled">
    <slot></slot>
  </button>
  <button class="baseClass"  :class="[btype,size]" v-else >
    <slot></slot>
  </button>
</template>

<script>
  export default{
    name:"Button",
    data(){
      return{
        disabled:false
      }
    },
    props:{
      type:{
        type:String,
        default(){
          return ''
        }
      },
      size:{
        size:String,
        default(){
          return ''
        }
      }
    },
    computed:{
      btype(){
        let scope = this;
        let type = scope.type;
        if(scope.type=="disabled") scope.disabled = true
        return scope.type;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .baseClass{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #bfcbd9;
    color: #1f2d3d;
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  .baseClass:hover,.baseClass:focus{
    color: #20a0ff;
    border-color: #20a0ff;
  }
  .primary{
    color: #fff;
    background-color: #20a0ff;
    border-color: #20a0ff;
  }
  .primary:hover,.primary:focus{
    background: #4db3ff;
    border-color: #4db3ff;
    color: #fff;
  }


  .text{
    border: none;
    color: #20a0ff;
    background: transparent;
    padding-left: 0;
    padding-right: 0;
  }
  .text:hover,.text:focus{
    color: #20a0ff;
    border-color: #20a0ff;
  }

  .success{
    color: #fff;
    background-color: #13ce66;
    border-color: #13ce66;
  }
  .success:hover,.success:focus{
    background: #42d885;
    border-color: #42d885;
    color: #fff;
  }

  .warning{
    color: #fff;
    background-color: #f7ba2a;
    border-color: #f7ba2a;
  }
  .warning:hover,.warning:focus{
    background: #f9c855;
    border-color: #f9c855;
    color: #fff;
  }

  .danger{
    color: #fff;
    background-color: #ff4949;
    border-color: #ff4949;
  }
  .danger:hover,.danger:focus{
    background: #ff6d6d;
    border-color: #ff6d6d;
    color: #fff;
  }

  .info{
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
  }
  .info:hover,.info:focus{
    background: #73ccff;
    border-color: #73ccff;
    color: #fff;
  }

  .big{
    padding:14px 50px;
  } 

  .small{
    padding:7px 12px;
  }

   .tiny{
    padding:5px 10px;
  }


  .buttonGroup{
    .baseClass{
      margin: 0 -3px 0 0;
    }
    .baseClass:first-child{
      border-top-right-radius: 0;
      border-bottom-right-radius:0;
    }
    .baseClass:not(:first-child):not(:last-child){
      border-radius:0;
    }
    .baseClass:last-child{
      border-top-left-radius: 0;
      border-bottom-left-radius:0;
    }
  }

  .disabled{
    color: #bfcbd9;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: not-allowed;
    background: #fff;
    border: 1px solid #bfcbd9;
    -webkit-appearance: none;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 4px;
  }
  
</style>
