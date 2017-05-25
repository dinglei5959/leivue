<template>
  <Page>
    <div id="summary" class="panel">
        <h2>Grid组件的Column，这是Grid最基础的布局方式</h2>
        <p>Column是基于24个栅格布局，与传统栅格化的使用方式类同，但提供了更直观、丰富的布局方式。</p>
        <div class="demo demo1">
          <Grid>
            <Column size="24">Column-24</Column>
            <Column size="12">Column-12</Column>
            <Column size="12">Column-12</Column>
            <Column size="8">Column-8</Column>
            <Column >Column 自动填充宽度</Column>
            <Column size="8">Column-8</Column>
            <Column size="8">Column-8</Column>
            <Column size="8" offset="8">Column-8</Column>
          </Grid>
        </div>
        <div class="box">
          <div class="head">
            <span class="title">gmiddle 垂直居中</span>
            <span class="title">gcenter 水平居中</span>
            <p class="tip">这两个属性应用在Grid上时，所有子Row都会垂直或水平居中。也可以单独应用在[栅格]上，使特定栅格居中对齐。</p>
          </div>
          <Grid class="demo" gmiddle gcenter style="min-height: 180px">
            <Row size="8">无论是多行还是单行，都可以垂直居中</Row>
            <Row size="8">无论是多行还是单行，都可以垂直居中</Row>
          </Grid>
        </div>

        <div class="box">
          <div class="head">
            <span class="title">offse="number"向左偏移number位</span>
            <p class="tip">这个属性应用在[栅格]上，指定[栅格]向左偏移多少格。</p>
          </div>
          <Grid class="demo">
            <Column size="8">flex-item-8</Column>
          </Grid>
          <Grid class="demo">
            <Column size="8" offset="8">flex-item-8</Column>
          </Grid>
          <Grid class="demo">
            <Column size="8" offset="16">flex-item-8</Column>
          </Grid>
        </div>
    </div>
      <div class="box">
        <div class="head">
          <span class="title">order ="number"表示排序</span>
          <p class="tip">order越小排的越是靠前</p>
        </div>
        <Grid class="demo">
          <Column order="4">4</Column>
          <Column order="3">3</Column>
          <Column order="2">2</Column>
          <Column order="1">1</Column>
        </Grid>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">gleft 左对齐</span>
          <span class="title">gright 右对齐</span>
        </div>
        <Grid class="demo" gleft>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
        <Grid class="demo" gright>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">gtop 顶</span>
          <span class="title">gbottom 底部对齐</span>
        </div>
        <Grid class="demo" gleft gtop style="height:80px;">
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
        <Grid class="demo" gright gbottom style="height:80px;">
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">gbetween 空间平均分布</span>
        </div>
        <Grid class="demo" gbetween style="height:40px;">
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
        <Grid class="demo" gbetween gcenter  style="height:180px;">
          <Row size="6" >Row</Row>
          <Row size="6" >Row</Row>
          <Row size="6" >Row</Row>
        </Grid>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">garound 两头大</span>
          <p>两头是中间的两倍</p>
        </div>
        <Grid class="demo" garound style="height:40px;">
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
          <Column size="6" >column</Column>
        </Grid>
        <Grid class="demo" garound gcenter  style="height:180px;">
          <Row size="6" >Row</Row>
          <Row size="6" >Row</Row>
          <Row size="6" >Row</Row>
        </Grid>
      </div>
      <div class="box">
        <div class="head">
          <span class="title">嵌套grid</span>
        </div>
        <Grid class="demo" gmiddle>
          <Column size="6">
            <Grid height="120px">
              <Row>lei</Row>
              <Row>ding</Row>
            </Grid>
          </Column>
          <Column size="12">
            <Grid>
              <Row>lei</Row>
              <Row>ding</Row>
              <Row>jack</Row>
            </Grid>
          </Column>
        </Grid>
      </div>
      
      <div id="responsive" class="panel">
        <h2>响应式</h2>
        <p>Grid提供了基础的响应式功能，当分辨率小于某个阈值时，你可以指定：</p>
        <ol>
          <li>[容器]从横向排列变为竖向排列，并且[栅格]宽度为100%</li>
          <li>隐藏指定[栅格]</li>
          <li>显示指定[栅格]</li>
        </ol>
        <div class="box">
          <div class="head">
            <span class="title">md</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于992px的时候，使[容器]变为竖向排列</p>
          </div>
          <Grid class="demo" add="md">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column>Column</Column>
            <Column>Column</Column>
          </Grid>
        </div>
        <div class="box">
          <div class="head">
            <span class="title">sm</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于768px的时候，使[容器]变为竖向排列</p>
          </div>
          <Grid class="demo" add="sm">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column>Column</Column>
            <Column>Column</Column>
          </Grid>
        </div>
        <div class="box">
          <div class="head">
            <span class="title">md-hide</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于992px的时候，使[容器]隐藏</p>
          </div>
          <Grid class="demo">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column type="md-hide">Column-hide</Column>
            <Column>Column</Column>
          </Grid>
          <Grid class="demo" type="md-hide">
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
          </Grid>
        </div> 
        <div class="box">
          <div class="head">
            <span class="title">sm-hide</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于768px的时候，使[容器]隐藏</p>
          </div>
          <Grid class="demo">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column type="sm-hide">Column-hide</Column>
            <Column>Column</Column>
          </Grid>
          <Grid class="demo" type="sm-hide">
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
            <Column>整个隐藏</Column>
          </Grid>
        </div> 
        <div class="box">
          <div class="head">
            <span class="title">md-show</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于992px的时候，使[容器]显示</p>
          </div>
          <Grid class="demo">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column type="md-show">Column-show</Column>
            <Column>Column</Column>
          </Grid>
          <Grid class="demo" type="md-show">
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
          </Grid>
        </div>  
        <div class="box">
          <div class="head">
            <span class="title">sm-show</span>
            <p class="tip">这个class应用在[容器]上，当分辨率低于768px的时候，使[容器]显示</p>
          </div>
          <Grid class="demo">
            <Column>Column</Column>
            <Column>Column</Column>
            <Column type="sm-show">Column-show</Column>
            <Column>Column</Column>
          </Grid>
          <Grid class="demo" type="sm-show">
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
            <Column>整个xianshi</Column>
          </Grid>
        </div>

      </div>

  </Page>
</template>

<script>
  //import './common/js/prettify.js'
  export default{
    data() {
      return{

      }
    }
  }
</script>

<style lang="scss">
  @import './layout.css';
  @import './index.css';
</style>