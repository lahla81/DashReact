import React from 'react';

const ShowMethod = ({labelClass, inputId, smallType, labelId}) => {
    return (
        <div className="col-sm-6 col-lg-12 col-xl-6 p-1">
            <div className={`checkbox-small ${smallType}`}>
                <label className={`custom-control-label label-sm ${labelClass} mb-2`}
                    htmlFor={inputId} id={labelId}>
                    <input type="radio" name="checkbox-small"
                        className="custom-control-input"
                        id={inputId} checked/>
                    <span className="checkmark-small"></span>
                </label>                                            
            </div>
        </div>
    )
}

export default ShowMethod;