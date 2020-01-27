import React from 'react';
import TimePeriod from './TimePeriod';
import MainCheckBox from './MainCheckBox';
const TopRight = () => {
    return (
        <div className="col-12 col-lg-8 content-header p-0 mt-1 my-lg-2 mx-0">
            <div className="overlay mx-2 mx-md-2 ml-lg-2 mr-lg-3 mb-5 h-100">
                <div className="text-center">
                    <h2 className="text-secondary font-bold font-bold">مركز رؤية المحضونين</h2>
                </div>
                <TimePeriod />
                <MainCheckBox cTitle= {'مركز الرؤية  -  فرع ابوظبي'} data_value= {"[50 , 10]"} data_label={'["اجمالي الملفات المتداولة" , "اجمالي الملفات الغير متداولة" , "العدد الاجمالي للملفات"]'} value={'0'} inputid={"customCheck_id0"} />
                <MainCheckBox cTitle= {'مركز الرؤية  -  فرع العين'} data_value= {"[40 , 12]"} value={'1'} inputid={"customCheck_id1"} />
                <MainCheckBox cTitle= {'الإجمالي'} data_value= {"[90 , 22]"}  value={'2'} inputid={"customCheck_id2"} />                        
            </div>
        </div>
    )}
export default TopRight