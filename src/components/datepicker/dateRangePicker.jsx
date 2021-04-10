
import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateRangePicker = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);

    useEffect(()=>{
        props.handleDateChange?.({start: startDate, end: endDate})
    },[startDate, endDate])
    return (
        <React.Fragment>
            <div className="row px-2">
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                isClearable
                placeholderText="start date..."
                startDate={startDate}
                endDate={endDate}
                className="daterange__picker"
            />
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                className="daterange__picker"
                startDate={startDate}
                isClearable
                placeholderText="end date..."
                endDate={endDate}
                minDate={startDate}
            />
            </div>
        <style jsx="true">{`
            .daterange__picker{
                height: 38px;
                border-radius: 5px;
                border: 1px solid lightgrey;
                color: black;
                padding-left: 10px;
            }
        `}</style>
        </React.Fragment>
    )
}

export default DateRangePicker

