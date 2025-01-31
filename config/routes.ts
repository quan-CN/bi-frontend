export default [

  {
    path: '/user',
    layout: false,
    routes: [{ name: '登录', path: '/user/login', component: './User/Login' }],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },

  { path: '/my_chart', name: '我的图表', icon: 'smile', component: './Chart/Mychart' },
  { path: '/me', name: '个人中心', icon: 'smile', component: './User/Details' },

  {
    path: '/admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', name: '二级管理页', component: './Admin' },
      { name: '用户管理', icon: 'table', path: 'admin/user', component: './Admin/User' },
    ],
  },
  { path: '/', redirect: '/welcome' },

  { path: '*', layout: false, component: './404' },
];
