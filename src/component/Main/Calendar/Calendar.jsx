import s from './Calendar.module.css'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import ruLocale from 'date-fns/locale/ru';



function Calendar(props) {

  const [value, setValue] = React.useState(Date());
  const [locale, setLocale] = React.useState('ru');

  const maskMap = {
    ru: '__.__.____',
  };

  console.log(maskMap.ru)


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
      <DatePicker
        mask='__.__.____'
        label="Дата вылета"
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
