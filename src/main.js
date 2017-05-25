import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './router'
import Pc from '../components/pc/pc'

import Page from '../components/page/page'
import Header from '../components/header/header'
import Content from '../components/content/content'
import Sidebars from '../components/sidebars/sidebars'
import SContent from '../components/sideContent/sideContent'
import Grid from '../components/grid/grid'
import Column from '../components/grid/column'
import Row from '../components/grid/row'
import Button from '../components/button/button'
import ButtonGroup from '../components/button/buttonGroup'
import Widget from '../components/widget/widget'
import Icon from '../components/icon/icon'
import Bounce from '../components/bounce/bounce'
import Input from '../components/input/input'

Vue.use(VueRouter)
Vue.component(App.name,App);
Vue.component(Pc.name,Pc);
Vue.component(Page.name,Page);

Vue.component(Header.name,Header);
Vue.component(Content.name,Content);
Vue.component(Sidebars.name,Sidebars);
Vue.component(SContent.name,SContent);
Vue.component(Grid.name,Grid);
Vue.component(Column.name,Column);
Vue.component(Row.name,Row);
Vue.component(Button.name,Button);
Vue.component(ButtonGroup.name,ButtonGroup);
Vue.component(Widget.name,Widget);
Vue.component(Icon.name,Icon);
Vue.component(Bounce.name,Bounce);
Vue.component(Input.name,Input);




const router = new VueRouter(routes)

var vm = new Vue({
  el:"#app",
  router,
  template:'<App/>',
  components:{App}
})