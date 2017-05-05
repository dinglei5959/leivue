<template>
  <div :style="[baseStyle,bgStyle]">
    <div class="header" >
      <input type="text" name="" id="" v-model="query" class="input">
    </div>
    <ul>
      <li class="list p" v-for="(item,index) in computedList" :key="index" :class="{active:(ulIndex==index)}">
        <a href="#" class="lista" :style="[oborderBottom]" @click="childShow(index)">{{item.name}}<span class="spreadIcon">+</span></a>
        <ul v-if="item.children" >
          <li class="list" v-for="(citem,cindex) in item.children" :key="cindex">
             <a href="#" class="lista child">{{citem.name}}</a>
           </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    name:'Sidebars',
    data(){
      let scope = this;
      let unit = scope.sizeUnit;
      return{
        baseStyle:{
          height:'inherit',
          flex:'0 0 '+scope.width+'px',
          boxShadow:'8px 20px 20px 0px #333'
        },
        bgStyle:{
          background:scope.sideStyle.bgColor
        },
        oborderBottom:{
          borderBottom:scope.sideStyle.liBottom
        },
        ulIndex:-1,
        uolder:-1,
        query:''
      }
    },
    props:{
      height:{
        type:Number,
        default(){
          return 800;
        }
      },
      width:{
        type:Number,
        default(){
          return 250;
        }
      },
      sizeUnit:{
        type:String,
        default(){
          return 'px';
        }
      },
      olist:{
        type:Array,
        default(){
          return [];
        }
      },
      sideStyle:{
        type:Object,
        default(){
          return {
            bgColor:'#ed5565',
            liBottom:'solid 1px #DA4453'
          };
        }
      }
    },
    computed:{
      computedList(){
        var scope = this;
        return this.olist.filter(function (item) {
          return item.name.toLowerCase().indexOf(scope.query.toLowerCase()) !== -1
        })
      }
    },
    methods:{
      childShow(i){
        let scope = this;
        if(i==scope.uolder){
          scope.uolder = scope.ulIndex =-1;
          
        }else{
          scope.uolder = scope.ulIndex = i;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  
  .spreadIcon{
    font-size:20px;
    float:right;
    margin-right: 20px;
    text-indent: 0;
    transition: transform ease-in .3s
  }

  .p:hover{
    >a{
      color: #fff;
      background: #DA4453;
    }
  }
  .p{
    >ul{
      transition: all ease-in .5s;
      opacity: 0;
      li{
        transition: all ease-in .5s;
        height:0px;
      }
    }
  }
  .active{
    >a{
      color: #fff;
      background: #DA4453;
      >span{
        transform:rotate(45deg)
      }
    }
    ul{
      transition: all ease-in .5s;
      opacity:1;
      li{
        transition: all ease-in .5s;
        height:auto;
      }
    }
  }
  .header{
    width: 90%;
    height: 50px;
    padding-left: 10%;
    float: left;
    line-height: 50px;
    font-weight: 600;
    color: #f0f0f0;
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .input{
    background-color: rgba(249, 244, 244, 0);
    border-radius: 15px;
    width: 90%;
    height: 30px;
    border: thin solid #FFF;
    text-indent: 0.5em;
    font-weight: bold;
    color: #FFF;
    outline: 0;
  }
  ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .list{
    width: 100%;
    display: block;
    float: left;
    position: relative;
    .child{
        background-color:#383838;
        border-bottom: 1px solid #999999;
        text-indent: 35px;
    }
  }
  .lista{
    width:100%;
    text-overflow: ellipsis;
    padding: 16px 0;
    float: left;
    text-decoration: none;
    color: #f0f0f0;
    font-size: 13px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-indent: 25px;
    -o-transition: color .2s linear,background .2s linear;
    -moz-transition: color .2s linear,background .2s linear;
    -webkit-transition: color .2s linear,background .2s linear;
    transition: color .2s linear,background .2s linear;
  }
</style>