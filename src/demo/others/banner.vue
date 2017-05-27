<template>
  <div class="container">
    <div class="banner">
      <div>粽子节到啦！！</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.banner{
  height: 40px;
  width: 500px;
  background: rgba(239, 215, 35, 0.4);
  overflow-x: hidden;
  div{
    animation: test 5s ease-in infinite;
  }
}

@keyframes test{
  0%{
    transform: translateX(100%);
  }
  // 50%{
  //   transform: translateX(50%)
  // }
  100%{
     transform: translateX(-20%)
  }
}

</style>
