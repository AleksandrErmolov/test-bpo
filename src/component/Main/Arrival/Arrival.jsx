import s from './Arrival.module.css'
import store from '../../../mock/Data.js'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Arrival(props) {


  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={store.city}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={props.city} />}
        onInputChange={(e, v, r) => { props.onChange(v) }}
      />
    </div>
  );
}

export default Arrival;
