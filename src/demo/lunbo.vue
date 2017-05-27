<template>
  <Page>
    <div class="stage" padding>
    <Button type="primary" style="align-self: baseline;" @click.native="spin(-60)">上</Button>
    <Button type="primary" style="align-self: baseline;" @click.native="spin(60)">下</Button>
    <div class="container">
      <div class="p2">1</div>
      <div class="p2">2</div>
      <div class="p2">3</div>
      <div class="p2">4</div>
      <div class="p2">5</div>
      <div class="p2">6</div>
    </div>
  </div>
  <div class="stage" padding>
    <Button type="primary" style="align-self: baseline;" @click.native="spin(-60)">左</Button>
    <Button type="primary" style="align-self: baseline;" @click.native="spin(60)">右</Button>
    <div class="container" id="test1">
      <div class="p">1</div>
      <div class="p">2</div>
      <div class="p">3</div>
      <div class="p">4</div>
      <div class="p">5</div>
      <div class="p">6</div>
    </div>
  </div>
  </Page>
</template>
<script>
export default {
  data () {
    return {
      dom: document.querySelector('#test1'),
      rotatey: 0
    }
  },
  methods: {
    spin (deg) {
      let scope = this
      scope.rotatey += deg
      document.querySelector('#test1').style.transform = 'perspective(1800px) rotatex(0deg) rotatey(' + scope.rotatey + 'deg)'
    }
  }
}
</script>

<style scoped lang="scss">
$distance:200px;
.stage {
  width: 600px;
  height: 500px;
  background: rgba(0, 0, 0, .5);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}
.container{
  transform-style: preserve-3d;
  width: 150px;
  height: 200px;
 // background: rgba(224, 16, 16, 0.2);
  position:relative;
  transform: perspective(1800px);
  transition: transform .3s ease-in;
}
.p{
  position:absolute;
  height: 250px;
  width: 150px;
  background: rgba(152, 216, 158, 0.2);
  color:  rgba(152, 216, 158, 0.5);
  text-align: center;
  font-size: 100px;
  line-height: 230px;
   user-select:none;
  -moz-user-select: none;
}

.p2{
  position:absolute;
  height: 150px;
  width: 200px;
  background: rgba(137, 143, 228, 0.2);
  color: rgba(137, 143, 228, 0.498039);
  text-align: center;
  font-size: 100px;
  line-height: 130px;
   user-select:none;
  -moz-user-select: none;
}


.p2:nth-child(1){
  transform:translateZ($distance);
}
.p2:nth-child(2){
  transform:rotatex(60deg) translateZ($distance);
}
.p2:nth-child(3){
  transform:rotatex(120deg) translateZ($distance);
}
.p2:nth-child(4){
  transform:rotatex(180deg) translateZ($distance);
}

.p2:nth-child(5){
  transform:rotatex(240deg) translateZ($distance);
}
.p2:nth-child(6){
  transform:rotatex(300deg) translateZ($distance);
}

.p:nth-child(1){
  transform:translateZ($distance);
}
.p:nth-child(2){
  transform:rotatey(60deg) translateZ($distance);
}
.p:nth-child(3){
  transform:rotatey(120deg) translateZ($distance);
}
.p:nth-child(4){
  transform:rotatey(180deg) translateZ($distance);
}

.p:nth-child(5){
  transform:rotatey(240deg) translateZ($distance);
}
.p:nth-child(6){
  transform:rotatey(300deg) translateZ($distance);
}
</style>
