
import {   Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Blink from 'react-blink-text';
export default function Timer(props) {
  const [texts,setTexts]=useState('')
  const[text_color,setText_color]=useState('black')
  const[opacity,setOpacity]=useState(1)
  const useStyle=makeStyles((theme)=>{
    return{
      root:{
        display: "flex",
        color:text_color
            },
            blink:{
              visibility:'hidden',
              color:'red' 
            }

  }
  })
  const classes=useStyle()
  useEffect(()=>{
    if(props.min==1&&props.updatedsec==30){
      setTexts("More than half way there")
    }
    if(props.min/2>=props.updatedmin && props.updatedmin!=0&&props.updatedsec==0){
      setTexts("More than half way there")
    }
    if(props.updatedmin==0&&props.updatedsec==0&&props.min!=0&&props.status!=3){
      setTexts("Times Up")
    }
    if(props.updatedmin==0&&props.updatedsec==20){
      setText_color('red')
    }
    if(props.updatedmin==0&&props.updatedsec <= 10&&props.status!=3){
     
    }
  })
 return (
    <div>
    
<Typography variant="h5" component="h2"> { texts }</Typography>
<Typography fontWeight="fontWeightBold" variant="h5" component="h2" className={classes.root}> {props.timer.min}:{props.timer.sec}</Typography>
<Blink style="color:red;" text= { props.timer.min +':' + props.timer.sec } fontSize='1.6em'>
          </Blink>
          </div>
  )
}
