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
import CzbConfirm from "../views/yekuo/czbiao/confirm";

import XcJlscheme from "../views/yekuo/czbiao/hedui/jlscheme";
import XcJlschemeTabs from "../views/yekuo/czbiao/hedui/jlschemetabs";
import MeasurementInfo from "../views/yekuo/czbiao/hedui/jlschemes/measurementinfo";
import PaymentInfo from "../views/yekuo/czbiao/hedui/jlschemes/paymentinfo";
import PaymentRela from "../views/yekuo/czbiao/hedui/jlschemes/paymentrela";
import MeasurementPoint from "../views/yekuo/czbiao/hedui/jlschemes/measurementpoint";
import MpointUsage from "../views/yekuo/czbiao/hedui/jlschemes/mpointusage";
import UsageDetail from "../views/yekuo/czbiao/hedui/jlschemes/usagedetail";
import EnergyMeter from "../views/yekuo/czbiao/hedui/jlschemes/energymeter";
import EnergyMeterDetail from "../views/yekuo/czbiao/hedui/jlschemes/energymeterdetail";
import HgqScheme from "../views/yekuo/czbiao/hedui/jlschemes/hgqscheme";
import HgqSchemeDetail from "../views/yekuo/czbiao/hedui/jlschemes/hgqschemedetail";
import MeteringBox from "../views/yekuo/czbiao/hedui/jlschemes/meteringbox";
import MeteringBoxDetail from "../views/yekuo/czbiao/hedui/jlschemes/meteringboxdetail";
import MeteringCabinet from "../views/yekuo/czbiao/hedui/jlschemes/meteringcabinet";

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
            {
                path: '/czbconfirm',
                name: 'czbconfirm',
                component: CzbConfirm,
                meta: { requireAuth: true }
            },
            {
                path: '/czbjlscheme',
                name: 'czbjlscheme',
                component: XcJlscheme,
                meta: { requireAuth: true }
            },
            {
                path: '/czbjlschemetabs',
                name: 'czbjlschemetabs',
                component: XcJlschemeTabs,
                meta: { requireAuth: true }
            },
            {
                path: '/czbjlschemetabs/:id',
                name: 'czbjlschemeedit',
                component: XcJlschemeTabs,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeasurementinfo',
                name: 'czbmeasurementinfo',
                component: MeasurementInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/czbpaymentinfo',
                name: 'czbpaymentinfo',
                component: PaymentInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/czbpaymentrela',
                name: 'czbpaymentrela',
                component: PaymentRela,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeasurementpoint',
                name: 'czbmeasurementpoint',
                component: MeasurementPoint,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmpointusage',
                name: 'czbmpointusage',
                component: MpointUsage,
                meta: { requireAuth: true }
            },
            {
                path: '/czbusagedetail',
                name: 'czbusagedetail',
                component: UsageDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbusagedetail/:id',
                name: 'czbusagedetailedit',
                component: UsageDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbenergymeter',
                name: 'czbenergymeter',
                component: EnergyMeter,
                meta: { requireAuth: true }
            },
            {
                path: '/czbenergymeterdetail',
                name: 'czbenergymeterdetail',
                component: EnergyMeterDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbenergymeterdetail/:id',
                name: 'czbenergymeterdetailedit',
                component: EnergyMeterDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbhgqscheme',
                name: 'czbhgqscheme',
                component: HgqScheme,
                meta: { requireAuth: true }
            },
            {
                path: '/czbhgqschemedetail',
                name: 'czbhgqschemedetail',
                component: HgqSchemeDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbhgqschemedetail/:id',
                name: 'czbhgqschemedetailedit',
                component: HgqSchemeDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeteringbox',
                name: 'czbmeteringbox',
                component: MeteringBox,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeteringboxdetail',
                name: 'czbmeteringboxdetail',
                component: MeteringBoxDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeteringboxdetail/:id',
                name: 'czbmeteringboxdetailedit',
                component: MeteringBoxDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeteringcabinet',
                name: 'czbmeteringcabinet',
                component: MeteringCabinet,
                meta: { requireAuth: true }
            },
            {
                path: '/czbmeteringcabinet/:id',
                name: 'czbmeteringcabinetedit',
                component: MeteringCabinet,
                meta: { requireAuth: true }
            },
        ]
    }
];
export default router;