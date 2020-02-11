import Tsdinfo from "../views/yekuo/tsdian/index";
import TsdWarning from "../views/yekuo/tsdian/warning";
import TsdProfile from "../views/yekuo/tsdian/hedui/profile";
import TsdHedui from "../views/yekuo/tsdian/hedui/hedui";
import TsdSdqjiancha from "../views/yekuo/tsdian/sdqjiancha/sdqjiancha";
import TsdXxluru from "../views/yekuo/tsdian/xxluru/xxluru";
import TsdSdhjiancha from "../views/yekuo/tsdian/sdhjiancha/sdhjiancha";

const router = [
    {
        path: '/tsdinfo/:id',
        name: 'tsdinfo',
        component: Tsdinfo,
        redirect: { name: "tsdwarning" },
        children: [
            {
                path: '/tsdprofile/:id',
                name: 'tsdprofile',
                component: TsdProfile
            },
            {
                path: '/tsdwarning',
                name: 'tsdwarning',
                component: TsdWarning
            },
            {
                path: '/tsdhedui',
                name: 'tsdhedui',
                component: TsdHedui
            },
            {
                path: '/tsdsdqjc',
                name: 'tsdsdqjc',
                component: TsdSdqjiancha
            },
            {
                path: '/tsdxxlu',
                name: 'tsdxxlu',
                component: TsdXxluru
            },
            {
                path: '/tsdsdhjc',
                name: 'tsdsdhjc',
                component: TsdSdhjiancha
            },
        ]
    }
];

export default router;