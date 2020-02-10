import MainImg  from './icons/icon_home.png'
import ProjectsImg  from './icons/Union_8.png'
import ArrangeImg  from './icons/Path_102.png'
import LookImg  from './icons/Union_9.png'
import ServicesImg  from './icons/Union_10.png'
import PeopleservImg  from './icons/Union_11.png'
import LawyerImg  from './icons/Path_149.png'
import AuthImg  from './icons/Path_107.png'
import SittingImg  from './icons/Path_108.png'

const SideBarList = [
    {
      key: 0,
      many: false,
      title: 'الرئيسية',
      mainHref: 'index',
      img: MainImg,
      href:[],
      sub:[],
    },
    {
      key: 1,
      many: true,
      title: 'مشاريع القطاع',
      mainHref: 'projects',
      sub: [
        {
          sub0: 'مشاريع ادارة خدمات المحاكم',
          mainLink: 'project',
          list: 1,
          subList: [
            {
              title: 'تحسينات نظام ادارة القضايا ( الملف الالكتروني)',
              link: 'improvement'
            },
            {
              title: 'المنصه الرقمية للطلبات الايجارية',
              link: 'digital'
            },
            {
              title: 'نظام رؤية المحضونين',
              link: 'looking'
            },
            {
              title: 'الحلول البديله ( التوفيق والمصالحة - التوجيه الاسري )',
              link: 'alternative'
            },
            {
              title: 'رقم الأسرة الموحد',
              link : 'integrater'
            },
            {
              title:'الملف المالي ( التركات )',
              link: 'financFile'
            },
            {
              title: 'ربط نظام التراسل بنظام ادارة القضايا',
              link: 'join'
            }
          ],
        },
        { 
          sub0: 'مشاريع ادارة الخدمات العدلية والتوثيقات',
          mainLink: 'currentProjects',
          list: 1,
          subList:
          [
            {
              title: 'ادراج توثيق نماذج المنصة الرقمية',
              link: 'insert'
            },
            {
              title: 'ربط الإعلام الوراثي مع صندوق المعاشات',
              link: 'joint'
            },
            {
              title: 'دفتر وثيقة الطلاق',
              link: 'fghhjjk'
            },
            {
              title: 'طلبات التحسينات علي أنظمة قسم الكاتب العدل',
              link: 'aedaaw'
            },
            {
              title: 'التحسينات علي صفحة المتابعة',
              link: 'lijo'
            },
            {
              title: 'مشروع دمح أنظمة قسم التوثيقات في نظام واحد',
              link: 'wert'
            },
            {
              title: 'تحسينات عقود الزواج',
              link: 'iop'
            },
            {
              title: 'تحسينات علي أتمتة الإجراءات ( المرحلة الثانية )',
              link: 'jkl'
            },
            {
              title: 'تحسينات علي المنصة الرقمية للتوثيقات',
              link: 'bnm'
            },
            {
              title: 'تحسينات الخدمات الإلكترونية للتوثيقات',
              link: 'kjbv'
            },
            {
              title: 'تحسينات إشهار الإسلام',
              link: 'iumnb'
            },
            {
              title: 'مشروع آلية التدقيق وحجز المأذونين علي نظام عقود الزواج والخدمة الإلكترونية والمنصة',
              link: 'asdbbn'
            },
            {
              title: 'ادراج خدمات الكاتب العدل والتوثيق في منصة واحدة',
              link: 'xcvblk'
            },
            {
              title: 'ربط برنامج التوجيه الأسري والتوثيقات',
              link: 'kjvc'
            },
          ]
        },
        {
          sub0: 'مشاريع ادارة إسعاد المتعاملين',
          mainLink: 'currentProject',
          list: 1,
          subList : [
            {
              title: 'مشروع مكاتب الطباعة الجديد ( نيابة - توثيقات - كاتب عدل )',
              link: 'wrt',
            },
            {
              title: 'استبيان رضا المتعاملين لخدمات الدائرة',
              link: 'ytre',
            },
            {
              title: 'تعهيد فرع إنجاز العين مول',
              link: 'oiu',
            },
            {
              title: 'تعهيد فرع إنجاز مصفح',
              link: 'okjmnb',
            },
            {
              title: 'تحسينات نظام الشكاوي المرحلة الثالثة',
              link: 'ok',
            },
            {
              title: 'إدخال التقارير في نظام ساس ( للمراكز الخارجية والداخلية )',
              link: 'mnbv',
            },
            {
              title: 'نموذج تسجيل الشكاوي والمقترحات والثناء علي الأيباد',
              link: 'edfg',
            },
            {
              title: 'تحسينات علي نظام إدارة الإيرادات',
              link: 'bvf',
            },
            {
              title: 'إستبدال نظام الشكاوي ( أي في أر )',
              link: 'bgttr',
            },
            {
              title: 'مشروع تفعيل خدمات المحاكم الرقمية',
              link: 'ikmjh',
            },
            {
              title: 'تحسينات علي خدمات المحاكم الرقمية',
              link: 'dfui',
            },
            {
              title: 'مشروع محكمة بني ياس الجديدة',
              link: 'mnbf',
            },
          ]
        }
      ],
      img: ProjectsImg
    },
    {
      key: 2,
      many: false,
      title: 'مكتب التنسيق الاداري',
      mainHref: 'arrange',
      href:[],
      sub:[],
      img: ArrangeImg,
    },
    {
      key: 3,
      many: false,
      title: 'قسم رقابة رسوم وتأمينات القضايا',
      mainHref: 'control',
      href:[],
      sub:[],
      img: LookImg
    },
    {
      key: 4,
      many: false,
      title: 'مركز رؤية المحضونين',
      mainHref: 'look',
      href:[],
      sub:[],
      img: LookImg
    },
    {
      key: 5,
      many: true,
      sections: 7,
      title: 'ادارة خدمات المحاكم',
      mainHref: 'service',
      sub: [
        {
          sub0: 'قسم رقابة الإجراءات',
          mainLink: 'inspection',
          list: 1,
          subList: [
            {
              title: 'تقرير الدعاوى المتداوله في المحاكم',
              link: 'inspection'
            },
            {
              title: 'تقرير الخبرة',
              link: 'experts_report'
            }
          ]
        }, 
        {
          sub0: 'قسم المعلنين',
          mainLink: 'advertises',
          list: 1,
          subList: [
            {
              title: 'إحصائية إعلانات خلال شهر',
              link: 'advertise'
            },
            {
              title: 'إحصائية إعلانات حسب النوع',
              link: 'advertiseType'
            }
          ]
        },
        {
          sub0:'قسم متطلبات الأعمال',
          mainLink: 'business_req',
          list: 0
        },
        {
          sub0:'قسم التراسل والحفظ',
          mainLink: 'comm_save',
          list: 0
        },
        {
          sub0: 'قسم الترجمة',
          mainLink: 'trans_section',
          list: 1,
          subList: [
            {
              title: 'الإحصائية التحريرية',
              link: 'translater1'
            },
            {
              title: 'الإحصائية الشفوية للدوائر',
              link: 'translater_oral_circle'
            },
            {
              title: 'الإحصائية الشفوية للغات',
              link: 'translater_oral'
            }
          ]
        }
      ],
      img: ServicesImg
    },
    {
      key: 6,
      many: true,
      title: 'ادارة إسعاد المتعاملين',
      mainHref: 'peopleserv',
      sub: [ 
        {
          sub0:'وحدة تطوير الخدمات',
          mainLink: 'servic_dev',
          list: 0
        }, 
        {
          sub0:'قسم مراكز خدمة وإسعاد المتعاملين',
          mainLink: 'audiance_inq',
          list: 0
        }, 
        {
          sub0:'قسم مركز الإتصال وشكاوي المتعاملين',
          mainLink: 'audiance_comm',
          list: 0
        } 
      ],
      img: PeopleservImg
    },
    {
      key: 7,
      many: true,
      title: 'ادارة شؤون المحاماة والخبراء',
      mainHref: 'lawyer',
      sub: [
        {
          sub0:'قسم قيد ومتابعة شؤون المحامين',
          mainLink: 'enroll_lawyer',
          list:0
        }, 
        {
          sub0:'قسم المساعدات القانونية',
          mainLink: 'law_assist1',
          list:0
        },  
        {
          sub0:'قسم القيد ومتابعة شؤون الخبراء',
          mainLink: 'expertiser',
          list: 1,
          subList:[
            {
              title: 'إحصائية حسب نوع الخبرة',
              link: 'enroll_expert'
            },
            {
              title:'إحصائية حــســب المحاكم',
              link: 'enroll_expert_gudic'
            }
          ]
        },
        {
          sub0:'قسم شؤون الحراسة والتصفية القضائية',
          mainLink: 'guarding',
          list: 0
        },
        {
          sub0:'قسم شؤون لجان الخبرة المتخصصة',
          mainLink: 'experts',
          list: 0
        },
        {
          sub0:'المكتب الفني لأعمال الخبرة',
          mainLink: 'expert_tech',
          list: 0
        }
      ],
      img: LawyerImg
    },
    {
      key: 8,
      many: true,
      title: 'ادارة الكاتب العدل والتوثيق',
      mainHref: 'auth',
      sub: [ 
        {
          sub0:'قسم الكاتب العدل',
          mainLink: 'notaries',
          list: 0
        },
        {
          sub0: 'قسم التوثيقات',
          mainLink: 'registration',
          list: 0
        }, 
        {
          sub0:'قسم المتابعة',
          mainLink: 'follow',
          list: 0
        }, 
        {
          sub0:'قسم وصايا غير المسلمين',
          mainLink: 'legacy',
          list: 0
        }, 
        {
          sub0:'قسم الكاتب العدل الخاص',
          mainLink: 'special_notary',
          list: 0
        }
      ],
      img: AuthImg
    },
    {
      key: 9,
      many: false,
      title: 'الاعدادات',
      mainHref: 'sitting',
      href:[],
      sub:[],
      img: SittingImg
    }
  ];

export default SideBarList