import Ysinfo from "../views/yekuo/yanshou/index";
import YsWarning from "../views/yekuo/yanshou/warning";
import YsProfile from "../views/yekuo/yanshou/hedui/profile";
import YsHedui from "../views/yekuo/yanshou/hedui/hedui";
import YsXianlu from "../views/yekuo/yanshou/xianlu/xianlu";
import Jiakongxian from "../views/yekuo/yanshou/xianlu/jiakongxian";
import Shoudianbian from "../views/yekuo/yanshou/shoudianbian/shoudianbian";
import Bianyaqi from "../views/yekuo/yanshou/shoudianbian/bianyaqi";
import Pdzhuangzhi from "../views/yekuo/yanshou/peidianzhuangzhi/peidianzhuangzhi";
import Zbdianyuan from "../views/yekuo/yanshou/peidianzhuangzhi/zibeidianyuan";
import Jdbaohu from "../views/yekuo/yanshou/jidianbaohu/jidianbaohu";
import JdbaohuDetail from "../views/yekuo/yanshou/jidianbaohu/jdbaohudetail";
import Yxzhunbei from "../views/yekuo/yanshou/yunxingzhunbei/yxzhunbei";
import YxzbItem from "../views/yekuo/yanshou/yunxingzhunbei/yxzbitem";
import Jgyanshou from "../views/yekuo/yanshou/jgyanshou/jgyanshou";
import Jgysjieguo from "../views/yekuo/yanshou/jgyanshou/jgysjieguo";
import JgysMingxi from "../views/yekuo/yanshou/jgyanshou/mingxi";
import JgysjgDetail from "../views/yekuo/yanshou/jgyanshou/jgysjgdetail";
import Dianlan from "../views/yekuo/yanshou/xianlu/dianlan";
import Ybyaoqiu from "../views/yekuo/yanshou/xianlu/ybyaoqiu";


const routers = [
    {
        path: '/ysinfo/:id',
        name: 'ysinfo',
        component: Ysinfo,
        meta: { requireAuth: true },
        redirect: { name: "yswarning" },
        children: [
            {
                path: '/yswarning',
                name: 'yswarning',
                component: YsWarning,
                meta: { requireAuth: true }
            },
            {
                path: '/yshedui',
                name: 'yshedui',
                component: YsHedui,
                meta: { requireAuth: true }
            },
            {
                path: '/ysprofile/:id',
                name: 'ysprofile',
                component: YsProfile,
                meta: { requireAuth: true }
            },
            {
                path: '/ysxianlu',
                name: 'ysxianlu',
                component: YsXianlu,
                meta: { requireAuth: true }
            },
            {
                path: '/jiakongxian',
                name: 'jiakongxian',
                component: Jiakongxian,
                meta: { requireAuth: true }
            },
            {
                path: '/shoudianbian',
                name: 'shoudianbian',
                component: Shoudianbian,
                meta: { requireAuth: true }
            },
            {
                path: '/bianyaqi',
                name: 'bianyaqi',
                component: Bianyaqi,
                meta: { requireAuth: true }
            },
            {
                path: '/pdzhuangzhi',
                name: 'pdzhuangzhi',
                component: Pdzhuangzhi,
                meta: { requireAuth: true }
            },
            {
                path: '/zbdianyuan',
                name: 'zbdianyuan',
                component: Zbdianyuan,
                meta: { requireAuth: true }
            },
            {
                path: '/jdbaohu',
                name: 'jdbaohu',
                component: Jdbaohu,
                meta: { requireAuth: true }
            },
            {
                path: '/jdbaohudetail',
                name: 'jdbaohudetail',
                component: JdbaohuDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/yxzhunbei',
                name: 'yxzhunbei',
                component: Yxzhunbei,
                meta: { requireAuth: true }
            },
            {
                path: '/yxzbdetail',
                name: 'yxzbdetail',
                component: YxzbItem,
                meta: { requireAuth: true }
            },
            {
                path: '/jgyanshou',
                name: 'jgyanshou',
                component: Jgyanshou,
                meta: { requireAuth: true }
            },
            {
                path: '/jgysjieguo',
                name: 'jgysjieguo',
                component: Jgysjieguo,
                meta: { requireAuth: true }
            },
            {
                path: '/jgysmingxi',
                name: 'jgysmingxi',
                component: JgysMingxi,
                meta: { requireAuth: true }
            },
            {
                path: '/jgysjgdetail',
                name: 'jgysjgdetail',
                component: JgysjgDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/dianlan',
                name: 'dianlan',
                component: Dianlan,
                meta: { requireAuth: true }
            },
            {
                path: '/ybyaoqiu',
                name: 'ybyaoqiu',
                component: Ybyaoqiu,
                meta: { requireAuth: true }
            },
        ]
    }
];
export default routers;