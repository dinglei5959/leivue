<template>
  <transition v-if="type=='collapse'"
                v-bind:css="false"
                v-on:before-enter="beforeEnter"
                v-on:enter="enter"
                v-on:after-enter="afterEnter"
                v-on:before-leave="beforeLeave"
                v-on:leave="leave"
                v-on:after-leave="afterLeave"
               >
          <slot></slot>
  </transition>
  <transition v-else :name="name">
    <slot></slot>
  </transition>
</template>

<script>
  import {addClass, removeClass} from '../../platform/utils/dom.js'
  export default{
    name: 'Bounce',
    props: {
      name: {
        type: String,
        default () {
          return ''
        }
      },
      type: {
        type: String,
        default () {
          return ''
        }
      }
    },
    methods: {
      beforeEnter (el) {
        // el.className = 'collapse-transition'
        addClass(el, 'collapse-transition')
        el.style.height = '0px'
      },
      enter (el, done) {
        el.style.height = el.scrollHeight + 'px'
      },
      afterEnter (el) {
        // el.className = ''
        removeClass(el, 'collapse-transition')
        el.style.height = 'auto'
      },
      beforeLeave (el) {
       // el.className = 'collapse-transition'
        addClass(el, 'collapse-transition')
        el.style.height = el.scrollHeight + 'px'
      },
      leave (el, done) {
        el.style.height = '0px'
        el.addEventListener('webkitTransitionEnd', function () {
          done()
        })
      },
      afterLeave (el) {
        // el.className = ''
        removeClass(el, 'collapse-transition')
        el.style.height = 'auto'
        el.style.border = '0px'
       // el.style.display = 'none'
      }
    },
    created () {
      let scope = this
      if (scope.type === 'collapse') {
      }
    }
  }
</script>

<style lang="scss" scoped>

  .collapse-transition {
      overflow-y: hidden;
      transition: .3s height ease-in-out;
  }

  .hidden-x-enter-active,.hidden-x-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-x-enter,.hidden-x-leave-active{
    opacity: 0;
    -ms-transform: scaleX(0);
    transform: scaleX(0)
  }

  .hidden-y-enter-active,.hidden-y-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-y-enter,.hidden-y-leave-active{
    opacity: 0;
    transform-style: preserve-3d;
    -ms-transform: scaley(0);
    transform: scaley(0)
  }


  .hidden-y-top-enter-active,.hidden-y-top-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-y-top-enter,.hidden-y-top-leave-active{
    opacity: 0;
    transform-origin:top;
    transform-style: preserve-3d;
    -ms-transform: scaley(0);
    transform: scaley(0)
  }

  .hidden-y-bottom-enter-active,.hidden-y-bottom-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-y-bottom-enter,.hidden-y-bottom-leave-active{
    opacity: 0;
    transform-origin:bottom;
    transform-style: preserve-3d;
    -ms-transform: scaley(0);
    transform: scaley(0)
  }

  .hidden-x-left-enter-active,.hidden-x-left-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-x-left-enter,.hidden-x-left-leave-active{
    opacity: 0;
    transform-origin:left;
    transform-style: preserve-3d;
    -ms-transform: scalex(0);
    transform: scalex(0)
  }

  .hidden-x-right-enter-active,.hidden-x-right-leave-active{
    transition: all .3s cubic-bezier(.55, 0, .1, 1)
  }

  .hidden-x-right-enter,.hidden-x-right-leave-active{
    opacity: 0;
    transform-origin:right;
    transform-style: preserve-3d;
    -ms-transform: scalex(0);
    transform: scalex(0)
  }


  

</style>
