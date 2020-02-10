import React, { Component } from 'react';
import TimePeriod from './TimePeriod';
import MainCheckBox from './MainCheckBox';

class TopRight extends Component{
    render(){
        const {pageArray, onChangeDataValue} = this.props;
        const customCheckData = pageArray[0].customCheckData;
        const mainPage = customCheckData.map(page => {
            return  <MainCheckBox
                        key={page.value}
                        cTitle={page.cTitle}
                        data_value = {page.data_value}
                        inputid={page.inputid}
                        onChangeDataValue = {onChangeDataValue}
                    />
        })
        return (
            <div className="col-12 col-lg-8 content-header p-0 mt-1 my-lg-2 mx-0">
                <div className="overlay mx-2 mx-md-2 ml-lg-2 mr-lg-3 mb-5 h-100">
                    <div className="text-center">
                        <h2 className="text-secondary font-bold font-bold">{pageArray[0].title}</h2>
                    </div>
                    <TimePeriod />
                    {mainPage}
                </div>
            </div>
        )}    
    }
    
export default TopRight