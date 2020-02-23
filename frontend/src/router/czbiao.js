import Czbinfo from "../views/yekuo/czbiao/index";
import CzbWarning from "../views/yekuo/czbiao/warning";
import CzbHedui from "../views/yekuo/czbiao/hedui/hedui";
import CzbProfile from "../views/yekuo/czbiao/hedui/profile";
import CzbContact from "../views/yekuo/czbiao/hedui/contact";
import CzbSgdfangan from "../views/yekuo/czbiao/sgdfangan/sgdfangan";
import CzbSddfaDetail from "../views/yekuo/czbiao/sgdfangan/sddfadetail";
import CzbJlzcxinxi from "../views/yekuo/czbiao/jlzcxinxi/jlzcxinxi";
import CzbDnengbiao from "../views/yekuo/czbiao/jlzcxinxi/dnengbiao";
import CzbDnbDetail from "../views/yekuo/czbiao/jlzcxinxi/dnbdetail";

const router = [
    {
        path: '/czbinfo/:id',
        name: 'czbinfo',
        component: Czbinfo,
        meta: { requireAuth: true },
        redirect: { name: "czbwarning" },
        children: [
            {
                path: '/czbwarning',
                name: 'czbwarning',
                component: CzbWarning,
                meta: { requireAuth: true }
            },
            {
                path: '/czbhedui',
                name: 'czbhedui',
                component: CzbHedui,
                meta: { requireAuth: true }
            },
            {
                path: '/czbprofile/:id',
                name: 'czbprofile',
                component: CzbProfile,
                meta: { requireAuth: true }
            },
            {
                path: '/czbcontact',
                name: 'czbcontact',
                component: CzbContact,
                meta: { requireAuth: true }
            },
            {
                path: '/czbsgdfangan',
                name: 'czbsgdfangan',
                component: CzbSgdfangan,
                meta: { requireAuth: true }
            },
            {
                path: '/czbsddfadetail/:id',
                name: 'czbsddfadetail',
                component: CzbSddfaDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/jlzcxinxi',
                name: 'jlzcxinxi',
                component: CzbJlzcxinxi,
                meta: { requireAuth: true }
            },
            {
                path: '/czbdnengbiao',
                name: 'czbdnengbiao',
                component: CzbDnengbiao,
                meta: { requireAuth: true }
            },
            {
                path: '/czbdnbdetail/:id',
                name: 'czbdnbdetail',
                component: CzbDnbDetail,
                meta: { requireAuth: true }
            },
        ]
    }
];
export default router;