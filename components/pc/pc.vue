<template>
  <div style="height:100%;width:100%;display:flex;" :style="[baseStyle]">
      <slot></slot>
  </div>
</template>

<style lang="scss">
  @import  '../../platform/theme/normalize.css';
  @import  '../../platform/theme/global.scss';
  @import '../../platform/theme/grid.css';
  @import '../../platform/theme/icon.css'
</style>

<script >
  // import '../../platform/utils/prettify.js'
  export default{
    name: 'Pc',
    data () {
      return {
        baseStyle: {
          flexDirection: 'column'
        }
      }
    },
    created () {
      // console.log(prettify)
      // prettify();
     // prettyPrint();
    }
  }
</script>
