<template>
  <div class="template">
    <div class="baseClass" >
      <div v-if="$slots.prepend" class="prepend">
        <slot name="prepend">
        </slot>
      </div>
      <input v-if="disabled"  disabled="disabled" :type="type" class="input disabled" :class="{hasPre:$slots.prepend}">
      <input v-else-if="!disabled&&type!=='text'" :type="type"  v-on:focus="focusHandler"  v-on:blur='blurHandler'   class="input normal" :class="{hasPre:$slots.prepend,hasIcon:icon,hasAppend:$slots.append}" :style="{width:width+'px'}">
      <input 
       v-else-if="!disabled&&type==='text'"
       type="text"  
       v-on:focus="show=true" 
       v-on:blur='blurHandler' 
       v-model="model"   
       class="input normal" 
       :class="{hasPre:$slots.prepend,hasIcon:icon,hasAppend:$slots.append}"
       :style="{width:width+'px'}"
       v-on:keydown = "keyupHandler"
       >
      
      <div v-if="$slots.append" class="append">
        <slot name="append">
        </slot>
      </div>
      <span v-if="icon!==''" :class="iconClass"></span>
    </div>
    <Bounce :name="BounceName" :type="BounceType">
      <div  v-if="$slots.default&&show"  class="backdrop" :style="{width:width,height:'auto'}">
        <slot></slot>
      </div>
    </Bounce>
  </div>
  

</template>
<script>
export default {
  name: 'Input',
  data () {
    return {
      show: false,
      model: ''
    }
  },
  props: {
    type: {
      type: String,
      default () {
        return 'text'
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return false
      }
    },
    icon: {
      type: String,
      default () {
        return ''
      }
    },
    width: {
      type: String,
      default () {
        return '150'
      }
    },
    BounceName: {
      type: String,
      default () {
        return ''
      }
    },
    BounceType: {
      type: String,
      default () {
        return ''
      }
    }
  },
  watch: {
    model () {
      console.log('model')
      this.show = true
    }
  },
  methods: {
    blurHandler () {
      // 让onSelected先执行
      setTimeout(_ => {
        this.show = false
      }, 200)
    },
    focusHandler () {
      this.show = true
      this.keyupHandler()
    },
    keyupHandler (e) {
      this.show = false
    //   this.$children[0].$emit('filter', [this.model])
    //   this.$children[0].$children[0].$emit('filter', [this.model])
    }
  },
  computed: {
    iconClass () {
      let scope = this
      let res = ''
      if (scope.icon !== '') {
        res = 'ion-' + scope.icon
      }
      return res
    }
  },
  created () {
    let scope = this
    this.$on('onSelected', function (item, i) {
      scope.model = item[0].name
      this.show = false
    })
  }
}
</script>

<style lang="scss" scoped>
  .template{
    position: relative;
  }
  .baseClass{
    line-height: normal;
    display: inline-table;
    border-collapse: separate;
    position: relative;
    font-size: 12px;
    span{
      position: relative;
      width: 35px;
      height: 100%;
      right: 20px;
    }
  }
  .prepend{
    border-right: 0;
    background-color: #fbfdff;
    color: #97a8be;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    padding: 0 10px;
    white-space: nowrap;
    line-height: normal;
    height: 35px;
    width:35px;
    border-collapse: separate;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
  .append{
    border-right: 0;
    background-color: #fbfdff;
    color: #97a8be;
    vertical-align: middle;
    display: table-cell;
    position: relative;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    padding: 0 10px;
    white-space: nowrap;
    line-height: normal;
    height: 35px;
    width:35px;
    border-collapse: separate;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }

  .input{
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
    color: #1f2d3d;
    font-size: inherit;
    height: 36px;
    line-height: 1;
    outline: none;
    padding: 3px 10px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    border-collapse: separate;
    position: relative;
  }

  .normal:hover{
    border: 1px solid #999;
  }
  .normal:focus{
    border:1px solid #000;
  }
  .hasPre{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .hasAppend{
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .hasIcon{
    padding-right:35px; 
  }

  .backdrop{
    height: 200px;
    width:200px;
    margin:5px 0;
    background:#fff;
    border: 1px solid #bfcbd9;
    border-radius: 2px;
    box-sizing: border-box;
    z-index: 99999;
    position: absolute;
  }
  .disabled{
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
  }
</style>
