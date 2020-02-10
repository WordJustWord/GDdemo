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


const routers = [
    {
        path: '/ysinfo/:id',
        name: 'ysinfo',
        component: Ysinfo,
        redirect: { name: "yswarning" },
        children: [
            {
                path: '/yswarning',
                name: 'yswarning',
                component: YsWarning
            },
            {
                path: '/yshedui',
                name: 'yshedui',
                component: YsHedui
            },
            {
                path: '/ysprofile/:id',
                name: 'ysprofile',
                component: YsProfile
            },
            {
                path: '/ysxianlu',
                name: 'ysxianlu',
                component: YsXianlu
            },
            {
                path: '/jiakongxian',
                name: 'jiakongxian',
                component: Jiakongxian
            },
            {
                path: '/shoudianbian',
                name: 'shoudianbian',
                component: Shoudianbian
            },
            {
                path: '/bianyaqi',
                name: 'bianyaqi',
                component: Bianyaqi
            },
            {
                path: '/pdzhuangzhi',
                name: 'pdzhuangzhi',
                component: Pdzhuangzhi
            },
            {
                path: '/zbdianyuan',
                name: 'zbdianyuan',
                component: Zbdianyuan
            },
            {
                path: '/jdbaohu',
                name: 'jdbaohu',
                component: Jdbaohu
            },
            {
                path: '/jdbaohudetail',
                name: 'jdbaohudetail',
                component: JdbaohuDetail
            },
            {
                path: '/yxzhunbei',
                name: 'yxzhunbei',
                component: Yxzhunbei
            },
            {
                path: '/yxzbdetail',
                name: 'yxzbdetail',
                component: YxzbItem
            },
            {
                path: '/jgyanshou',
                name: 'jgyanshou',
                component: Jgyanshou
            },
            {
                path: '/jgysjieguo',
                name: 'jgysjieguo',
                component: Jgysjieguo
            },
            {
                path: '/jgysmingxi',
                name: 'jgysmingxi',
                component: JgysMingxi
            },
            {
                path: '/jgysjgdetail',
                name: 'jgysjgdetail',
                component: JgysjgDetail
            },
        ]
    }
];
export default routers;