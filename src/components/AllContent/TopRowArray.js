let TopRowArray = [
    {
        name: 'look',
        type: '0',
        key: '0',
        title: 'مركز رؤية المحضونين ',
        labels:["اجمالي الملفات المتداولة" , "اجمالي الملفات الغير متداولة" , "العدد الاجمالي للملفات"],
        customCheckData: [
            {
                cTitle: 'مركز الرؤية  -  فرع ابوظبي',
                data_value: [50, 10, 60],
                value: "0",
                inputid: "customCheck_id0",
            },
            {
                cTitle: 'مركز الرؤية -  فرع العين',
                data_value: [40, 12, 52],
                value: "1",
                inputid: "customCheck_id1",
            },
            {
                cTitle: 'الإجمالي',
                data_value: [90, 22, 112],
                value: "2",
                inputid: "customCheck_id2",
            }
        ],
    },
    {
        name: 'advertise',
        type: '0',
        key: '1',
        title: 'إحصائية إعلانات قسم المعلنين خلال مدة زمنية',
        labels:["المتبقية من الشهر السابق" , "الواردة خلال الشهر" , "المجموع" , "وردت نهاية الشهر ولم يتم تداولها" , "المجموع" , "المنفذ من الإعلانات الواردة" , "إنتظار المدعي للإرشاد", "وردت نهاية الشهر ولم يتم تداولها" , "المتبقي للشهر اللاحق" , "نسبة الإنجاز %" ],    
        customCheckData: [
            {
                cTitle: 'إعلانات واردة من محكمة النـقـض',
                data_value: "[20 , 6 , 31 , 34 , 37 , 29 , 26 , 25 ]",
                value: "0",
                inputid: "customCheck_id0",
            },
            {
                cTitle: 'إعلانات المناطق الداخلية في محكمة أبــوظـبي',
                data_value: "[25 , 12 , 8 , 20 , 22 , 14 , 17 , 19 ]",
                value: "1",
                inputid: "customCheck_id1",
            },
            {
                cTitle: 'إعلانات واردة من المحكمة التجارية',
                data_value: "[27 , 31 , 34 , 37 , 29 , 26 , 25 , 32]",
                value: "2",
                inputid: "customCheck_id2",
            },
            {
                cTitle: 'إعلانات واردة من المحكمة العـمالــية',
                data_value: "[8 , 15 , 17 , 12 , 20 , 22 , 18 , 16]",
                value: "3",
                inputid: "customCheck_id3",
            },
            {
                cTitle: 'إعلانات المناطق الخارجية في محكمة أبوظبي (بنـي يـاس سابقاً)',
                data_value: "[21 , 6 , 5 , 31 , 34 , 37 , 29 , 26 ]",
                value: "4",
                inputid: "customCheck_id4",
            },
            {
                cTitle: 'إعلانات واردة من لجنة فض المنازعات الإيجارية',
                data_value: "[23 , 6 , 5 , 31 , 34 , 37 , 29 , 26]",
                value: "5",
                inputid: "customCheck_id5",  
            },
            {
                cTitle: 'إعلانات وحدة الإعلان في محكمة العـيـن',
                data_value: "[22 , 6 , 5 , 31 , 34 , 37 , 29 , 26 ]",
                value: "6",
                inputid: "customCheck_id6",
            },
            {
                cTitle: 'إعلانات وحدة الإعلان في محكمة الـيــحــر',
                data_value: "[28 , 6 , 5 , 31 , 34 , 37 , 29 , 32]",
                value: "7",
                inputid: "customCheck_id7",
            },
            {
                cTitle: 'إعلانات وحدة الإعلان في محكمة الظـفـرة',
                data_value: "[24 , 6 , 5 , 31 , 34 , 37 , 25 , 28]",
                value: "8",
                inputid: "customCheck_id8",
            },
            {
                cTitle: 'إعلانات وحدة الإعلان في محكمة الرويس والسلع',
                data_value: "[26 , 6 , 5 , 31 , 29 , 26 , 25 , 30]",
                value: "9",
                inputid: "customCheck_id9",  
            },
        ]   
    },
]

export default TopRowArray;