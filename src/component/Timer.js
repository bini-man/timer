
import {  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';

export default function Timer(props) {
  const [texts,setTexts]=useState('')
  useEffect(()=>{
    if(props.min/2>=props.updatedmin && props.updatedmin!=0){
      setTexts("More than half way there")
    }
    if(props.updatedmin==0&&props.updatedsec==0&&props.min!=0&&props.status!=3){
      setTexts("Times Up")
    }
    if(props.updatedmin==0&&props.updatedsec==20){
      console.log("color red")
    }
  })
 return (
    <div>
    
<Typography variant="h5" component="h2"> { texts }</Typography>
<Typography fontWeight="fontWeightBold" variant="h5" component="h2"> {props.timer.min}:{props.timer.sec}</Typography>

    </div>
  )
}
