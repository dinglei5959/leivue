<template>
  <div class="baseClass">
    <div v-if="$slots.prepend" class="prepend">
      <slot name="prepend">
    </slot>
    </div>
    
    <input v-if="disabled" disabled="disabled" :type="type" class="input disabled" :class="{hasPre:$slots.prepend}">
    <input v-else :type="type" class="input normal" :class="{hasPre:$slots.prepend}">

  </div>

</template>
<script>
export default {
  name: 'Input',
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
    }
  }
}
</script>

<style lang="scss" scoped>
  .baseClass{
    width: 100%;
    line-height: normal;
    display: inline-table;
    width: 100%;
    border-collapse: separate;
    position: relative;
    font-size: 12px;
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

  .disabled{
    color: #bfcbd9;
    cursor: not-allowed;
    background-image: none;
    background-color: #eef1f6;
    border-color: #d1dbe5;
  }
</style>
