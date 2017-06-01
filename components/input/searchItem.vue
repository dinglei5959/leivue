<template>
  <div>
    <ul class="baseClass">
      <li  v-for="(item,index) in filterList" @click="clickHandler(item,index)">
        {{item.name}}
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'SearchItem',
  data () {
    return {
      val: '',
      test: 0
    }
  },
  props: {
    list: {
      type: Array,
      default: []
    }
  },
  computed: {
    filterList () {
      let v = this.$parent.$parent.model
      return this.list.filter(function (e, i) {
        return e.name.toLowerCase().indexOf(v) !== -1
      })
    }
  },
  methods: {
    clickHandler (item, i) {
      this.$emit('onSeleted', [item, i])
      this.$parent.$emit('onSelected', [item, i])
      this.$parent.$parent.$emit('onSelected', [item, i])
    }
  },
  created () {
    let scope = this
    this.$on('filter', function (v) {
      scope.val = v[0]
    })
  }
}
</script>

<style lang="scss" scoped>
  .baseClass{
    list-style-type: none;
    padding: 0;
    li{
      background: #fff;
      padding: 10px 15px;
      font-size: small;
      color: #555;
      cursor: pointer;
      &:hover{
        background: #e4e8f1;
      }
    }
  }
</style>
