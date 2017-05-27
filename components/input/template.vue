<template>
  <div class="childClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Template'
  }
</script>

<style lang="scss" scoped>
  .childClass{
    display: flex;

  }
</style>
