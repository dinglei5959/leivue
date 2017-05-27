<template>
  <Grid>
    <row>
      第一个问题：input和div放在一个div中的问题,两者无法放平
    </row>
    <row>
      <div>
        <div class="q1div">http://</div>
        <input class="q1input" type="text">
      </div>
    </row>
  </Grid>
</template>

<script>
export default {

}
</script>
<style scoped>
  .q1div{
    display: inline-block;
    border: 1px solid #999;
    height: 35px;
  }
  .q1input{
    height: 35px;

  }
</style>
