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

const routers = [
    {
        path: '/kcinfo/:id',
        name: 'kcinfo',
        component: Kcinfo,
        redirect: { name: "kcwarning" },
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
        {
            path: '/sdgdscheme',
            name: 'sdgdscheme',
            component: XcGdscheme
        },
        {
            path: '/gdschemeadd',
            name: 'gdschemeadd',
            component: XcGdschemeEdit
        },
        {
            path: '/gdschemeedit/:id',
            name: 'gdschemeedit',
            component: XcGdschemeEdit
        },
        {
            path: '/yhpayscheme',
            name: 'yhpayscheme',
            component: XcYhPayScheme
        },
        {
            path: '/pricingstrategyadd',
            name: 'pricingstrategyadd',
            component: XcPricingStrategyEdit
        },
        {
            path: '/pricingstrategyedit/:id',
            name: 'pricingstrategyedit',
            component: XcPricingStrategyEdit
        },
        {
            path: '/priceschemeadd',
            name: 'priceschemeadd',
            component: XcPriceSchemeEdit
        },
        {
            path: '/priceschemeedit/:id',
            name: 'priceschemeedit',
            component: XcPriceSchemeEdit
        },
        {
            path: '/jlscheme',
            name: 'jlscheme',
            component: XcJlscheme
        },
        {
            path: '/jlschemetabs',
            name: 'jlschemetabs',
            component: XcJlschemeTabs
        },
        {
            path: '/jlschemetabs/:id',
            name: 'jlschemeedit',
            component: XcJlschemeTabs
        },
        {
            path: '/measurementinfo',
            name: 'measurementinfo',
            component: MeasurementInfo
        },
        {
            path: '/paymentinfo',
            name: 'paymentinfo',
            component: PaymentInfo
        },
        {
            path: '/paymentrela',
            name: 'paymentrela',
            component: PaymentRela
        },
        {
            path: '/measurementpoint',
            name: 'measurementpoint',
            component: MeasurementPoint
        },
        {
            path: '/mpointusage',
            name: 'mpointusage',
            component: MpointUsage
        },
        {
            path: '/usagedetail',
            name: 'usagedetail',
            component: UsageDetail
        },
        {
            path: '/usagedetail/:id',
            name: 'usagedetailedit',
            component: UsageDetail
        },
        {
            path: '/energymeter',
            name: 'energymeter',
            component: EnergyMeter
        },
        {
            path: '/energymeterdetail',
            name: 'energymeterdetail',
            component: EnergyMeterDetail
        },
        {
            path: '/energymeterdetail/:id',
            name: 'energymeterdetailedit',
            component: EnergyMeterDetail
        },
        {
            path: '/hgqscheme',
            name: 'hgqscheme',
            component: HgqScheme
        },
        {
            path: '/hgqschemedetail',
            name: 'hgqschemedetail',
            component: HgqSchemeDetail
        },
        {
            path: '/hgqschemedetail/:id',
            name: 'hgqschemedetailedit',
            component: HgqSchemeDetail
        },
        {
            path: '/meteringbox',
            name: 'meteringbox',
            component: MeteringBox
        },
        {
            path: '/meteringboxdetail',
            name: 'meteringboxdetail',
            component: MeteringBoxDetail
        },
        {
            path: '/meteringboxdetail/:id',
            name: 'meteringboxdetailedit',
            component: MeteringBoxDetail
        },
        {
            path: '/meteringcabinet',
            name: 'meteringcabinet',
            component: MeteringCabinet
        },
        {
            path: '/meteringcabinet/:id',
            name: 'meteringcabinetedit',
            component: MeteringCabinet
        },
        {
            path: '/sddeviceinfo',
            name: 'sddeviceinfo',
            component: SdDeviceInfo
        },
        {
            path: '/sddevicemenu',
            name: 'sddevicemenu',
            component: SdDeviceMenu
        },
        {
            path: '/sddevicemenu/:id',
            name: 'sddevicemenuedit',
            component: SdDeviceMenu
        },
        {
            path: '/deviceinfo',
            name: 'deviceinfo',
            component: DeviceInfo
        },
        {
            path: '/nameplate',
            name: 'nameplate',
            component: Nameplate
        },
        {
            path: '/templates',
            name: 'templates',
            component: Templates
        },
        ]
    }
];
export default routers;