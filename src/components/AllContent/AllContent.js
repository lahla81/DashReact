import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';

const AllContent = ({pageArray, onChangeDataValue}) => {
    return (
        <div className="row content-top-row">
            <TopRight 
                pageArray={pageArray} 
                onChangeDataValue={onChangeDataValue}
            />
            <TopLeft />
        </div>
    )}
export default AllContent