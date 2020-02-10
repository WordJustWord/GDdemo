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
        redirect: { name: "czbwarning" },
        children: [
            {
                path: '/czbwarning',
                name: 'czbwarning',
                component: CzbWarning
            },
            {
                path: '/czbhedui',
                name: 'czbhedui',
                component: CzbHedui
            },
            {
                path: '/czbprofile/:id',
                name: 'czbprofile',
                component: CzbProfile
            },
            {
                path: '/czbcontact',
                name: 'czbcontact',
                component: CzbContact
            },
            {
                path: '/czbsgdfangan',
                name: 'czbsgdfangan',
                component: CzbSgdfangan
            },
            {
                path: '/czbsddfadetail/:id',
                name: 'czbsddfadetail',
                component: CzbSddfaDetail
            },
            {
                path: '/jlzcxinxi',
                name: 'jlzcxinxi',
                component: CzbJlzcxinxi
            },
            {
                path: '/czbdnengbiao',
                name: 'czbdnengbiao',
                component: CzbDnengbiao
            },
            {
                path: '/czbdnbdetail/:id',
                name: 'czbdnbdetail',
                component: CzbDnbDetail
            },
        ]
    }
];
export default router;