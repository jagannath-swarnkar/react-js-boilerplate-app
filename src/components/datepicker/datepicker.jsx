// import 'moment';
import moment from 'moment';
import React from 'react';
// import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function Datepicker(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date) => {
    // console.log('date', date)
    setSelectedDate(date);
    props.handleChange(moment(date).format('MM/DD/YYYY'))
  };

  React.useEffect(()=>{
    setSelectedDate(props.value)
  },[props])


  return (
    <React.Fragment>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            autoOk
            disablePast
            clearable
            inputVariant="outlined"
            inputMode="none"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
            value={selectedDate}
            onChange={handleDateChange}
            placeholder="MM/DD/YYYY"
            className="datepicker"
            // onClose={handleDateChange}
        />
    </MuiPickersUtilsProvider>
    <style jsx="true">{`
      .datepicker > div{
        height: 38px
      }
    `}</style>
    </React.Fragment>
  );
}