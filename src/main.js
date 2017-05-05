import Vue from 'vue'
import App from './App.vue'
import Pc from '../components/pc/pc'

import Header from '../components/header/header'
import Content from '../components/content/content'
import Sidebars from '../components/sidebars/sidebars'
import SContent from '../components/sideContent/sideContent'

Vue.component(App.name,App);
Vue.component(Pc.name,Pc);

Vue.component(Header.name,Header);
Vue.component(Content.name,Content);
Vue.component(Sidebars.name,Sidebars);
Vue.component(SContent.name,SContent);

var vm = new Vue({
  el:"#app",
  data:{
  },
  template:'<App/>'
})