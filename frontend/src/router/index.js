import Vue from 'vue';
import VueRouter from 'vue-router';

import TaiquMain from "../views/taiqu/main";
import GongdMain from "../views/gongdan/main";
import GongjxMain from "../views/gongjx/main";
import XuexiMain from "../views/xuexi/main";
import WodeMain from "../views/wode/main";

Vue.use(VueRouter)


// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/',
    name: 'tqmain',
    component: TaiquMain
  },
  {
    path: '/gongdan',
    name: 'gondan',
    component: GongdMain
  },
  {
    path: '/gongjx',
    name: 'gongjx',
    component: GongjxMain
  },
  {
    path: '/xuexi',
    name: 'xuexi',
    component: XuexiMain
  },
  {
    path: '/wode',
    name: 'wode',
    component: WodeMain
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
