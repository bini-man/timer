import { Pause, PauseCircle } from '@mui/icons-material';
import { Button, IconButton, TextField, Typography } from '@mui/material';
import React from 'react';

export default function Timer(props) {
   
 return (
    <div>
    
<Typography variant="h5" component="h2"> More than a half way</Typography>
<Typography fontWeight="fontWeightBold" variant="h5" component="h2"> {props.timer.min}:{props.timer.sec}</Typography>
<IconButton onClick={()=>console.log("bini")}>
    <PauseCircle color='secondary'/>
</IconButton>
<Button variant='outlined'>1x</Button>
<Button variant='outlined'>1.5x</Button>
<Button variant='outlined'>2x</Button>
    </div>
  )
}
