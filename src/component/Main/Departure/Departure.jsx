import s from './Departure.module.css'
import store from '../../../mock/Data.js'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Departure(props) {


  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={store.city}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={props.city} />}
      />
    </div>
  );
}

export default Departure;
