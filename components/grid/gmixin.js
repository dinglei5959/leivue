export default {
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
        return ''
      }
    },
    offset:{
      type:String,
      default(){
        return ''
      }
    },
    order:{
      type:String,
      default(){
        return ''
      }
    }
  },
  computed:{
    displayType:function(){
      let scope = this;
      let dtype = scope.type.split(" ");
      let type = 'item'.split(" ");
      let res = '';
      res += !!type[0]?`flex-${type[0]}${!!scope.size?`-${scope.size}`:''} `:''
      res += !!type[1]?`flex-${type[1]}${!!scope.size?`-${scope.size}`:''} `:''
      res += !!type[2]?`flex-${type[2]}${!!scope.size?`-${scope.size}`:''} `:''
      if(scope.type.trim()!=""){
        dtype.forEach(function(e,i){
          res += ` flex-${e}`
        })
      }
      return res;
    },
    offSetSize(){
      let scope = this;
      let res = ''
      if(scope.offset!='') res = 'flex-offset-'+scope.offset;
      return res;
    },
    orderSize(){
      let scope = this;
      let res = ''
      if(scope.order!='') res = 'flex-order-'+scope.order;
      return res;
    }
  }
}