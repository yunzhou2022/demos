import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{},
  layout:{},
  routes: [
    { path: '/', name:"首页",component: '@/pages/index',icon:"smile" },
    { path: '/page1', name:"菜单1",component: '@/pages/index', icon:"heart" },
    { path: '/page2', name:"菜单2",component: '@/pages/index' ,icon:'smile',routes:[
      { path: '/page2/sec1', name:"二级菜单",component: '@/pages/index', icon:"heart" },
    ]},
  ],
  fastRefresh: {},
});
