import React from 'react';

const TimePeriod = () => {
    return (
        <form>
            <div className="">
                <h3 className="text-indigo font-bold my-3 mr-2">حدد الفترة الزمنية</h3>
            </div>
            <div className="text-center shadow-around rounded-lg p-3 m-2">
                <div className="form-group row w-100">
                    <div className="col-12 col-sm-6">
                        <label className="text-primary mt-2" htmlFor="from-date">من</label>
                        <input type="date" className="text-primary border-primary rounded-lg form-control mb-3" id="from-date" required />
                    </div>
                    <div className="col-12 col-sm-6">
                        <label className="text-light-red mt-2" htmlFor="to-date">إلي</label>
                        <input type="date" className="text-light-red border-light-red rounded-lg form-control mb-3" id="to-date" required />
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn-primary btn m-3 mr-auto rounded-lg">تم التحديد</button>
                </div>
            </div>
        </form>
    )
}

export default TimePeriod;