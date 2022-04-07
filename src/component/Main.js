import Timer from "./Timer";
import './Main.css'
import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import {  PauseCircle, PlayCircle } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
function Main() {
  const [minute,setMinute]=useState(0)

const [timer,setTimer]=useState({sec:0,min:minute})

const [interv,setInterv]=useState()
const [status,setStatus]=useState(3)
const [speed,setSpeed]=useState({speed:1000})
var updatedspeed = speed.speed;
const start = (spe)=>{
  if(updatedmin==0&&updatedsec==0) return
 Math.floor(updatedmin)
  setStatus(1)
 
  run();
  setInterv(setInterval(run,spe))
}
useEffect(()=>{
  if(updatedmin===0 && updatedsec===0){
    clearInterval(interv)
  }
})

const run = () =>{
  if(updatedsec===0){
    updatedmin--;
    updatedsec=60
  }
  if(updatedmin<=0 && updatedsec===0){
    clearInterval(interv)
  }
  updatedsec--;
  return setTimer({sec:updatedsec,min:updatedmin});
}

const speed_interval = (sp) =>{

  clearInterval(interv)
 start(sp)
}
const stop = () =>{
  setStatus(2)
  clearInterval(interv)
}
const resume = () =>{
  setStatus(1)
  start(1000)
}
var updatedsec = timer.sec , updatedmin = timer.min;

  return (
    <div className="App">
       <Typography variant="h5" component="h2">
  Countdown:
</Typography>
<TextField id="value" label="(MIN)"  value={minute} onChange={(e)=>
  {
   
   (e.target.value<0)? setMinute(1):
  setMinute(e.target.value)
  
}
}
 type="number" variant="outlined"  />

{(status!=1&&status!=2)?    <button onClick={()=>{
          updatedmin=minute
          start(1000)
         
        }} >Start</button>:"" }
     
    
    <Timer timer={timer} min={minute} updatedmin={updatedmin} status={status} updatedsec={updatedsec}/>
    {(status==1) ? <IconButton onClick={stop}>
    <PauseCircle color='secondary'/>
</IconButton>:""}
{(status==2) ? <IconButton onClick={resume}>
    <PlayCircle color='secondary'/>
</IconButton>:""}
<Button variant='outlined' onClick={()=>
  { 
  speed_interval(1000)}}>1x</Button>
<Button variant='outlined' onClick={()=> { 

  speed_interval(500)
}}>1.5x</Button>
<Button variant='outlined' onClick={()=> { 

 speed_interval(100)}}>2x</Button>
    </div>
  );
}

export default Main;
