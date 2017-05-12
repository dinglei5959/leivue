import index from '../demo/grid'

const routes = {
  mode:'hash',
  routes:[
    { path: '/', component: index},
    {
      path:'/button',
      component(resolve){
        require(['@/demo/form/button'],resolve)
      }
    }
  ]
}

export {routes};