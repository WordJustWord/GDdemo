import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeMain from "../views/home/main";
import YekuoMain from "../views/yekuo/main";
import WodeMain from "../views/wode/main";

import Yewu from "../views/yekuo/yewu";
import Kancha from "../views/yekuo/kancha";
import Yanshou from "../views/yekuo/yanshou";
import Czbiao from "../views/yekuo/czbiao";
import Tsdian from "../views/yekuo/tsdian";
import Kcinfo from "../views/yekuo/kancha/index";
import KcProfile from "../views/yekuo/kancha/hedui/profile";
import KcWarning from "../views/yekuo/kancha/warning";
import KcHedui from "../views/yekuo/kancha/hedui";
import KcContact from "../views/yekuo/kancha/hedui/contact";
import KcFeikong from "../views/yekuo/kancha/hedui/feikong";
import KcFinancial from "../views/yekuo/kancha/hedui/financial";
import KcMaterial from "../views/yekuo/kancha/hedui/material";
import KcScheme from "../views/yekuo/kancha/kcfangan";
import FaGdinfo from "../views/yekuo/kancha/kcfangan/gdinfo";
import FaCkinfo from "../views/yekuo/kancha/kcfangan/ckinfo";
import XcKancha from "../views/yekuo/kancha/xckancha";
import XcSdscheme from "../views/yekuo/kancha/xckancha/sdscheme";
import XcSdschemeEdit from "../views/yekuo/kancha/xckancha/sdschemeedit";

Vue.use(VueRouter)


// component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain
  },
  {
    path: '/yekuo',
    name: 'yekuo',
    component: YekuoMain,
    children: [
      {
        path: '/yewu',
        name: 'yewu',
        component: Yewu
      },
      {
        path: '/kancha',
        name: 'kancha',
        component: Kancha
      },
      {
        path: '/yanshou',
        name: 'yanshou',
        component: Yanshou
      },
      {
        path: '/czbiao',
        name: 'czbiao',
        component: Czbiao
      },
      {
        path: '/tsdian',
        name: 'tsdian',
        component: Tsdian
      },
      {
        path: '/kcinfo/:id',
        name: 'kcinfo',
        component: Kcinfo,
        children: [{
          path: '/kcprofile/:id',
          name: 'kcprofile',
          component: KcProfile
        },
        {
          path: '/kcwarning',
          name: 'kcwarning',
          component: KcWarning
        },
        {
          path: '/kchedui',
          name: 'kchedui',
          component: KcHedui
        },
        {
          path: '/kccontact',
          name: 'kccontact',
          component: KcContact
        },
        {
          path: '/kcfeikong',
          name: 'kcfeikong',
          component: KcFeikong
        },
        {
          path: '/kcfinancial',
          name: 'kcfinancial',
          component: KcFinancial
        },
        {
          path: '/kcmaterial',
          name: 'kcmaterial',
          component: KcMaterial
        },
        {
          path: '/kcfangan',
          name: 'kcfangan',
          component: KcScheme
        },
        {
          path: '/fagdinfo',
          name: 'fagdinfo',
          component: FaGdinfo
        },
        {
          path: '/fackinfo',
          name: 'fackinfo',
          component: FaCkinfo
        },
        {
          path: '/xckancha',
          name: 'xckancha',
          component: XcKancha
        },
        {
          path: '/sdscheme',
          name: 'sdscheme',
          component: XcSdscheme
        },
        {
          path: '/sdschemeadd',
          name: 'sdschemeadd',
          component: XcSdschemeEdit
        },
        {
          path: '/sdschemeedit/:id',
          name: 'sdschemeedit',
          component: XcSdschemeEdit
        },
        ]
      }
    ]
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
