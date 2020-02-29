import Tsdinfo from "../views/yekuo/tsdian/index";
import TsdWarning from "../views/yekuo/tsdian/warning";
import TsdProfile from "../views/yekuo/tsdian/hedui/profile";
import TsdHedui from "../views/yekuo/tsdian/hedui/hedui";
import TsdSdqjiancha from "../views/yekuo/tsdian/sdqjiancha/sdqjiancha";
import TsdXxluru from "../views/yekuo/tsdian/xxluru/xxluru";
import TsdSdhjiancha from "../views/yekuo/tsdian/sdhjiancha/sdhjiancha";
import Tsdconfirm from "../views/yekuo/tsdian/confirm";


import SdDeviceMenu from "../views/yekuo/tsdian/hedui/sddeviceinfo/sddevicemenu";
import DeviceInfo from "../views/yekuo/tsdian/hedui/sddeviceinfo/deviceinfo";
import Nameplate from "../views/yekuo/tsdian/hedui/sddeviceinfo/nameplate";

const router = [
    {
        path: '/tsdinfo/:id',
        name: 'tsdinfo',
        component: Tsdinfo,
        meta: { requireAuth: true },
        redirect: { name: "tsdwarning" },
        children: [
            {
                path: '/tsdprofile/:id',
                name: 'tsdprofile',
                component: TsdProfile,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdwarning',
                name: 'tsdwarning',
                component: TsdWarning,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdhedui',
                name: 'tsdhedui',
                component: TsdHedui,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdsdqjc',
                name: 'tsdsdqjc',
                component: TsdSdqjiancha,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdxxlu',
                name: 'tsdxxlu',
                component: TsdXxluru,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdsdhjc',
                name: 'tsdsdhjc',
                component: TsdSdhjiancha,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdconfirm',
                name: 'tsdconfirm',
                component: Tsdconfirm,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdsddevicemenu',
                name: 'tsdsddevicemenu',
                component: SdDeviceMenu,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdsddevicemenu/:id',
                name: 'tsdsddevicemenuedit',
                component: SdDeviceMenu,
                meta: { requireAuth: true }
            },
            {
                path: '/tsddeviceinfo',
                name: 'tsddeviceinfo',
                component: DeviceInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/tsdnameplate',
                name: 'tsdnameplate',
                component: Nameplate,
                meta: { requireAuth: true }
            },
        ]
    }
];

export default router;