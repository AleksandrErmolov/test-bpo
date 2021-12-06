import s from './Calendar.module.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';



function Calendar(props) {
  
  const [value, setValue] = React.useState(new Date());


  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(value) => {
          setValue(value);
          props.onChange(value)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

  );
}

export default Calendar;
