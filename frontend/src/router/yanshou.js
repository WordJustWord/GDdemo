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
import YsConfirm from "../views/yekuo/yanshou/confirm";


import XcSdscheme from "../views/yekuo/yanshou/hedui/xckancha/sdscheme";
import XcSdschemeEdit from "../views/yekuo/yanshou/hedui/xckancha/sdschemeedit";
import XcGdscheme from "../views/yekuo/yanshou/hedui/xckancha/gdscheme";
import XcGdschemeEdit from "../views/yekuo/yanshou/hedui/xckancha/gdschemeedit";
import XcYhPayScheme from "../views/yekuo/yanshou/hedui/xckancha/yhpayscheme";
import XcPricingStrategyEdit from "../views/yekuo/yanshou/hedui/xckancha/pricingstrategyedit";
import XcPriceSchemeEdit from "../views/yekuo/yanshou/hedui/xckancha/priceschemeedit";
import XcJlscheme from "../views/yekuo/yanshou/hedui/xckancha/jlscheme";
import XcJlschemeTabs from "../views/yekuo/yanshou/hedui/xckancha/jlschemetabs";
import MeasurementInfo from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/measurementinfo";
import PaymentInfo from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/paymentinfo";
import PaymentRela from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/paymentrela";
import MeasurementPoint from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/measurementpoint";
import MpointUsage from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/mpointusage";
import UsageDetail from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/usagedetail";
import EnergyMeter from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/energymeter";
import EnergyMeterDetail from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/energymeterdetail";
import HgqScheme from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/hgqscheme";
import HgqSchemeDetail from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/hgqschemedetail";
import MeteringBox from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/meteringbox";
import MeteringBoxDetail from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/meteringboxdetail";
import MeteringCabinet from "../views/yekuo/yanshou/hedui/xckancha/jlschemes/meteringcabinet";
import SdDeviceInfo from "../views/yekuo/yanshou/hedui/xckancha/sddeviceinfo";
import SdDeviceMenu from "../views/yekuo/yanshou/hedui/xckancha/sddeviceinfo/sddevicemenu";
import DeviceInfo from "../views/yekuo/yanshou/hedui/xckancha/sddeviceinfo/deviceinfo";
import Nameplate from "../views/yekuo/yanshou/hedui/xckancha/sddeviceinfo/nameplate";


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
            {
                path: '/ysconfirm',
                name: 'ysconfirm',
                component: YsConfirm,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsdscheme',
                name: 'xxsdscheme',
                component: XcSdscheme,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsdschemeadd',
                name: 'xxsdschemeadd',
                component: XcSdschemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsdschemeedit/:id',
                name: 'xxsdschemeedit',
                component: XcSdschemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsdgdscheme',
                name: 'xxsdgdscheme',
                component: XcGdscheme,
                meta: { requireAuth: true }
            },
            {
                path: '/xxgdschemeadd',
                name: 'xxgdschemeadd',
                component: XcGdschemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxgdschemeedit/:id',
                name: 'xxgdschemeedit',
                component: XcGdschemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxyhpayscheme',
                name: 'xxyhpayscheme',
                component: XcYhPayScheme,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpricingstrategyadd',
                name: 'xxpricingstrategyadd',
                component: XcPricingStrategyEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpricingstrategyedit/:id',
                name: 'xxpricingstrategyedit',
                component: XcPricingStrategyEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpriceschemeadd',
                name: 'xxpriceschemeadd',
                component: XcPriceSchemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpriceschemeedit/:id',
                name: 'xxpriceschemeedit',
                component: XcPriceSchemeEdit,
                meta: { requireAuth: true }
            },
            {
                path: '/xxjlscheme',
                name: 'xxjlscheme',
                component: XcJlscheme,
                meta: { requireAuth: true }
            },
            {
                path: '/xxjlschemetabs',
                name: 'xxjlschemetabs',
                component: XcJlschemeTabs,
                meta: { requireAuth: true }
            },
            {
                path: '/xxjlschemetabs/:id',
                name: 'xxjlschemeedit',
                component: XcJlschemeTabs,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeasurementinfo',
                name: 'xxmeasurementinfo',
                component: MeasurementInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpaymentinfo',
                name: 'xxpaymentinfo',
                component: PaymentInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/xxpaymentrela',
                name: 'xxpaymentrela',
                component: PaymentRela,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeasurementpoint',
                name: 'xxmeasurementpoint',
                component: MeasurementPoint,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmpointusage',
                name: 'xxmpointusage',
                component: MpointUsage,
                meta: { requireAuth: true }
            },
            {
                path: '/xxusagedetail',
                name: 'xxusagedetail',
                component: UsageDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxusagedetail/:id',
                name: 'xxusagedetailedit',
                component: UsageDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxenergymeter',
                name: 'xxenergymeter',
                component: EnergyMeter,
                meta: { requireAuth: true }
            },
            {
                path: '/xxenergymeterdetail',
                name: 'xxenergymeterdetail',
                component: EnergyMeterDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxenergymeterdetail/:id',
                name: 'xxenergymeterdetailedit',
                component: EnergyMeterDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxhgqscheme',
                name: 'xxhgqscheme',
                component: HgqScheme,
                meta: { requireAuth: true }
            },
            {
                path: '/xxhgqschemedetail',
                name: 'xxhgqschemedetail',
                component: HgqSchemeDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxhgqschemedetail/:id',
                name: 'xxhgqschemedetailedit',
                component: HgqSchemeDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeteringbox',
                name: 'xxmeteringbox',
                component: MeteringBox,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeteringboxdetail',
                name: 'xxmeteringboxdetail',
                component: MeteringBoxDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeteringboxdetail/:id',
                name: 'xxmeteringboxdetailedit',
                component: MeteringBoxDetail,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeteringcabinet',
                name: 'xxmeteringcabinet',
                component: MeteringCabinet,
                meta: { requireAuth: true }
            },
            {
                path: '/xxmeteringcabinet/:id',
                name: 'xxmeteringcabinetedit',
                component: MeteringCabinet,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsddeviceinfo',
                name: 'xxsddeviceinfo',
                component: SdDeviceInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsddevicemenu',
                name: 'xxsddevicemenu',
                component: SdDeviceMenu,
                meta: { requireAuth: true }
            },
            {
                path: '/xxsddevicemenu/:id',
                name: 'xxsddevicemenuedit',
                component: SdDeviceMenu,
                meta: { requireAuth: true }
            },
            {
                path: '/xxdeviceinfo',
                name: 'xxdeviceinfo',
                component: DeviceInfo,
                meta: { requireAuth: true }
            },
            {
                path: '/xxnameplate',
                name: 'xxnameplate',
                component: Nameplate,
                meta: { requireAuth: true }
            },
        ]
    }
];
export default routers;