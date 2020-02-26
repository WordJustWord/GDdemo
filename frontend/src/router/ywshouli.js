//业务受理
import List from "../views/yekuo/yewu";
import Profile from "../views/yewu/profile";
import Contact from "../views/yewu/contact";
import Financial from "../views/yewu/financial";
import ContactDetail from "../views/yewu/contactdetail";
const routers = [
    {
        path: '/yewulist/:id',
        name: 'yewulist',
        component: List,
        meta: { requireAuth: true },
        // children: [
        //     {
        //         path: '/ywprofile/:id',
        //         name: 'ywprofile',
        //         component: Profile,
        //         meta: { requireAuth: true }
        //     },
        // ]
    },
    {
        path: '/ywprofile/:id',
        name: 'ywprofile',
        component: Profile,
        meta: { requireAuth: true }
    },
    {
        path: '/ywcontact/:id',
        name: 'ywcontact',
        component: Contact,
        meta: { requireAuth: true }
    },
    {
        path: '/ywfinancial/:id',
        name: 'ywfinancial',
        component: Financial,
        meta: { requireAuth: true }
    },
    {
        path: '/contactdetail/:id',
        name: 'contactdetail',
        component: ContactDetail,
        meta: { requireAuth: true }
    },
];

export default routers;