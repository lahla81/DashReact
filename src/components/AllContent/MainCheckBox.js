import React from 'react';

const MainCheckBox = ({cTitle, data_value, data_label, value, inputid}) => {
    return (
        <div className="checkbox-main">
            <label className="custom-control-label custom-control-label-notary"
                data-value={data_value}
                data-label={data_label}
                htmlFor={inputid}> {cTitle}
                <input type="radio" name="notary"
                    className="custom-control-input" value={value}
                    id={inputid} />
                <span className="checkmark-main"></span>
            </label>
        </div>
    )
}

export default MainCheckBox;