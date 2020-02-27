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
import XcGdscheme from "../views/yekuo/kancha/xckancha/gdscheme";
import XcGdschemeEdit from "../views/yekuo/kancha/xckancha/gdschemeedit";
import XcYhPayScheme from "../views/yekuo/kancha/xckancha/yhpayscheme";
import XcPricingStrategyEdit from "../views/yekuo/kancha/xckancha/pricingstrategyedit";
import XcPriceSchemeEdit from "../views/yekuo/kancha/xckancha/priceschemeedit";
import XcJlscheme from "../views/yekuo/kancha/xckancha/jlscheme";
import XcJlschemeTabs from "../views/yekuo/kancha/xckancha/jlschemetabs";
import MeasurementInfo from "../views/yekuo/kancha/xckancha/jlschemes/measurementinfo";
import PaymentInfo from "../views/yekuo/kancha/xckancha/jlschemes/paymentinfo";
import PaymentRela from "../views/yekuo/kancha/xckancha/jlschemes/paymentrela";
import MeasurementPoint from "../views/yekuo/kancha/xckancha/jlschemes/measurementpoint";
import MpointUsage from "../views/yekuo/kancha/xckancha/jlschemes/mpointusage";
import UsageDetail from "../views/yekuo/kancha/xckancha/jlschemes/usagedetail";
import EnergyMeter from "../views/yekuo/kancha/xckancha/jlschemes/energymeter";
import EnergyMeterDetail from "../views/yekuo/kancha/xckancha/jlschemes/energymeterdetail";
import HgqScheme from "../views/yekuo/kancha/xckancha/jlschemes/hgqscheme";
import HgqSchemeDetail from "../views/yekuo/kancha/xckancha/jlschemes/hgqschemedetail";
import MeteringBox from "../views/yekuo/kancha/xckancha/jlschemes/meteringbox";
import MeteringBoxDetail from "../views/yekuo/kancha/xckancha/jlschemes/meteringboxdetail";
import MeteringCabinet from "../views/yekuo/kancha/xckancha/jlschemes/meteringcabinet";
import SdDeviceInfo from "../views/yekuo/kancha/xckancha/sddeviceinfo";
import SdDeviceMenu from "../views/yekuo/kancha/xckancha/sddeviceinfo/sddevicemenu";
import DeviceInfo from "../views/yekuo/kancha/xckancha/sddeviceinfo/deviceinfo";
import Nameplate from "../views/yekuo/kancha/xckancha/sddeviceinfo/nameplate";
import Templates from "../views/yekuo/kancha/templates";
import Biaodan from "../views/yekuo/kancha/biaodan";
import hdContactDetail from "../views/yewu/contactdetail";
import KcConfirm from "../views/yekuo/kancha/confirm";

const routers = [
    {
        path: '/kcinfo/:id',
        name: 'kcinfo',
        component: Kcinfo,
        meta: { requireAuth: true },
        redirect: { name: "kcwarning" },
        children: [{
            path: '/kcprofile/:id',
            name: 'kcprofile',
            component: KcProfile,
            meta: { requireAuth: true }
        },
        {
            path: '/kcwarning',
            name: 'kcwarning',
            component: KcWarning,
            meta: { requireAuth: true }
        },
        {
            path: '/kchedui',
            name: 'kchedui',
            component: KcHedui,
            meta: { requireAuth: true }
        },
        {
            path: '/kccontact',
            name: 'kccontact',
            component: KcContact,
            meta: { requireAuth: true }
        },
        {
            path: '/hdcontactdetail/:id',
            name: 'hdcontactdetail',
            component: hdContactDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/kcfeikong',
            name: 'kcfeikong',
            component: KcFeikong,
            meta: { requireAuth: true }
        },
        {
            path: '/kcfinancial',
            name: 'kcfinancial',
            component: KcFinancial,
            meta: { requireAuth: true }
        },
        {
            path: '/kcmaterial',
            name: 'kcmaterial',
            component: KcMaterial,
            meta: { requireAuth: true }
        },
        {
            path: '/kcfangan',
            name: 'kcfangan',
            component: KcScheme,
            meta: { requireAuth: true }
        },
        {
            path: '/fagdinfo',
            name: 'fagdinfo',
            component: FaGdinfo,
            meta: { requireAuth: true }
        },
        {
            path: '/fackinfo',
            name: 'fackinfo',
            component: FaCkinfo,
            meta: { requireAuth: true }
        },
        {
            path: '/xckancha',
            name: 'xckancha',
            component: XcKancha,
            meta: { requireAuth: true }
        },
        {
            path: '/sdscheme',
            name: 'sdscheme',
            component: XcSdscheme,
            meta: { requireAuth: true }
        },
        {
            path: '/sdschemeadd',
            name: 'sdschemeadd',
            component: XcSdschemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/sdschemeedit/:id',
            name: 'sdschemeedit',
            component: XcSdschemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/sdgdscheme',
            name: 'sdgdscheme',
            component: XcGdscheme,
            meta: { requireAuth: true }
        },
        {
            path: '/gdschemeadd',
            name: 'gdschemeadd',
            component: XcGdschemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/gdschemeedit/:id',
            name: 'gdschemeedit',
            component: XcGdschemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/yhpayscheme',
            name: 'yhpayscheme',
            component: XcYhPayScheme,
            meta: { requireAuth: true }
        },
        {
            path: '/pricingstrategyadd',
            name: 'pricingstrategyadd',
            component: XcPricingStrategyEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/pricingstrategyedit/:id',
            name: 'pricingstrategyedit',
            component: XcPricingStrategyEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/priceschemeadd',
            name: 'priceschemeadd',
            component: XcPriceSchemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/priceschemeedit/:id',
            name: 'priceschemeedit',
            component: XcPriceSchemeEdit,
            meta: { requireAuth: true }
        },
        {
            path: '/jlscheme',
            name: 'jlscheme',
            component: XcJlscheme,
            meta: { requireAuth: true }
        },
        {
            path: '/jlschemetabs',
            name: 'jlschemetabs',
            component: XcJlschemeTabs,
            meta: { requireAuth: true }
        },
        {
            path: '/jlschemetabs/:id',
            name: 'jlschemeedit',
            component: XcJlschemeTabs,
            meta: { requireAuth: true }
        },
        {
            path: '/measurementinfo',
            name: 'measurementinfo',
            component: MeasurementInfo,
            meta: { requireAuth: true }
        },
        {
            path: '/paymentinfo',
            name: 'paymentinfo',
            component: PaymentInfo,
            meta: { requireAuth: true }
        },
        {
            path: '/paymentrela',
            name: 'paymentrela',
            component: PaymentRela,
            meta: { requireAuth: true }
        },
        {
            path: '/measurementpoint',
            name: 'measurementpoint',
            component: MeasurementPoint,
            meta: { requireAuth: true }
        },
        {
            path: '/mpointusage',
            name: 'mpointusage',
            component: MpointUsage,
            meta: { requireAuth: true }
        },
        {
            path: '/usagedetail',
            name: 'usagedetail',
            component: UsageDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/usagedetail/:id',
            name: 'usagedetailedit',
            component: UsageDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/energymeter',
            name: 'energymeter',
            component: EnergyMeter,
            meta: { requireAuth: true }
        },
        {
            path: '/energymeterdetail',
            name: 'energymeterdetail',
            component: EnergyMeterDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/energymeterdetail/:id',
            name: 'energymeterdetailedit',
            component: EnergyMeterDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/hgqscheme',
            name: 'hgqscheme',
            component: HgqScheme,
            meta: { requireAuth: true }
        },
        {
            path: '/hgqschemedetail',
            name: 'hgqschemedetail',
            component: HgqSchemeDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/hgqschemedetail/:id',
            name: 'hgqschemedetailedit',
            component: HgqSchemeDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/meteringbox',
            name: 'meteringbox',
            component: MeteringBox,
            meta: { requireAuth: true }
        },
        {
            path: '/meteringboxdetail',
            name: 'meteringboxdetail',
            component: MeteringBoxDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/meteringboxdetail/:id',
            name: 'meteringboxdetailedit',
            component: MeteringBoxDetail,
            meta: { requireAuth: true }
        },
        {
            path: '/meteringcabinet',
            name: 'meteringcabinet',
            component: MeteringCabinet,
            meta: { requireAuth: true }
        },
        {
            path: '/meteringcabinet/:id',
            name: 'meteringcabinetedit',
            component: MeteringCabinet,
            meta: { requireAuth: true }
        },
        {
            path: '/sddeviceinfo',
            name: 'sddeviceinfo',
            component: SdDeviceInfo,
            meta: { requireAuth: true }
        },
        {
            path: '/sddevicemenu',
            name: 'sddevicemenu',
            component: SdDeviceMenu,
            meta: { requireAuth: true }
        },
        {
            path: '/sddevicemenu/:id',
            name: 'sddevicemenuedit',
            component: SdDeviceMenu,
            meta: { requireAuth: true }
        },
        {
            path: '/deviceinfo',
            name: 'deviceinfo',
            component: DeviceInfo,
            meta: { requireAuth: true }
        },
        {
            path: '/nameplate',
            name: 'nameplate',
            component: Nameplate,
            meta: { requireAuth: true }
        },
        {
            path: '/templates',
            name: 'templates',
            component: Templates,
            meta: { requireAuth: true }
        },
        {
            path: '/biaodan/:id',
            name: 'biaodan',
            component: Biaodan,
            meta: { requireAuth: true }
        },
        {
            path: '/kcconfirm',
            name: 'kcconfirm',
            component: KcConfirm,
            meta: { requireAuth: true }
        },
        ]
    }
];
export default routers;