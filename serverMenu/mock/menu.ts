function getMenus(req, res) {
  res.json([
    { path: '/', name: '首页',icon:"smile" },
    { path: '/page1', name: '菜单11',icon:"smile" },
    { path: '/page2', name: '菜单22',icon:"smile",routes:[
        {
            path:'/page2/sec1',name:"二级菜单",icon:"smile"
        }
    ] },
  ]);
}

export default {
  'GET /api/menus': getMenus,
};
