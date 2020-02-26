import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeMain from "../views/home/main";
import YekuoMain from "../views/yekuo/main";
import WodeMain from "../views/wode/main";
import Signin from "../views/login/signin";
import Signup from "../views/login/signup";

import Yewu from "../views/yewu/main";
import Kancha from "../views/yekuo/kancha";
import Yanshou from "../views/yekuo/yanshou";
import Czbiao from "../views/yekuo/czbiao";
import Tsdian from "../views/yekuo/tsdian";

import kancha from "./kancha";
import yanshou from "./yanshou";
import czbiao from "./czbiao";
import tsdian from "./tsdian";
import yewu from "./ywshouli";

import NotFound from "../views/error/404";

Vue.use(VueRouter)


// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/yekuo',
    name: 'yekuo',
    component: YekuoMain,
    meta: { requireAuth: true },
    redirect: { name: "yewu" },
    children: [
      {
        path: '/yewu',
        name: 'yewu',
        component: Yewu,
        meta: { requireAuth: true }
      },
      {
        path: '/kancha',
        name: 'kancha',
        component: Kancha,
        meta: { requireAuth: true }
      },
      {
        path: '/yanshou',
        name: 'yanshou',
        component: Yanshou,
        meta: { requireAuth: true }
      },
      {
        path: '/czbiao',
        name: 'czbiao',
        component: Czbiao,
        meta: { requireAuth: true }
      },
      {
        path: '/tsdian',
        name: 'tsdian',
        component: Tsdian,
        meta: { requireAuth: true }
      },
      ...kancha,
      ...yanshou,
      ...czbiao,
      ...tsdian,
      ...yewu
    ]
  },
  {
    path: '/wode',
    name: 'wode',
    component: WodeMain,
    meta: { requireAuth: true }
  },
  {
    path: '*',
    name: '',
    redirect: { name: "notfound" }
  },
  {
    path: '/404',
    name: 'notfound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
