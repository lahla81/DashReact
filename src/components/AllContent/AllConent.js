import React from 'react';
import TopLeft from './TopLeft';
import TopRight from './TopRight';
import ChartsRow from './ChartsRow';

const AllContent = () => {
    return (
        <div className="row content-top-row">
            <TopRight />
            <TopLeft />
           <ChartsRow />
        </div>
    )}
export default AllContent