import React from 'react';

const MainCheckBox = ({cTitle, data_value, value, inputid, onChangeDataValue}) => {
    return (
        <div className="checkbox-main">
            <label className="custom-control-label custom-control-label-notary"
                data-value={data_value}
                htmlFor={inputid}> {cTitle}
                <input type="radio" name="notary"
                    className="custom-control-input" 
                    value={value}
                    id={inputid}
                    onClick={() =>  onChangeDataValue(`${data_value}`)}
                />
                <span className="checkmark-main"></span>
            </label>
        </div>
    )
}

export default MainCheckBox;