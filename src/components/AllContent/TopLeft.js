import React from 'react';
import ShowMethod from './ShowMethod';

const TopLeft = () => {
    return (
        <div className="col-lg-4 col-12 content-left p-0 mt-2 my-lg-2 mx-0">
            <div className="overlay h-100 mx-2 mx-md-2 ml-lg-3">
                <p>حدد طريقة العرض</p>
                <div className="row text-center">
                    <ShowMethod labelClass={'label-half'} inputId={'customCheck-half'}/>
                    <ShowMethod labelId={'label-bar'} smallType={'checkbox-small-bar'} labelClass={'label-bar'} inputId={'customCheck-bar'}/>
                    <ShowMethod labelClass={'label-line'} inputId={'customCheck-line'}/>
                    <ShowMethod labelClass={'label-circle'} inputId={'customCheck-circle'}/>
                </div>
            </div>
        </div>
    )}
export default TopLeft