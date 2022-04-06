import { TextField, Typography } from '@mui/material';
import React from 'react';

export default function Input(props) {
   
 return (
    <div>
     <Typography variant="h5" component="h2">
  Countdown:
</Typography>
<TextField id="value" label="(MIN)" type="number" variant="outlined"  />


    </div>
  )
}
