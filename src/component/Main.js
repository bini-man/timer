import Timer from "./Timer";
import './Main.css'
import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import {  PauseCircle, PlayCircleFilledWhite } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
function Main() {
  const [minute,setMinute]=useState(0)

const [timer,setTimer]=useState({sec:0,min:minute})

const [interv,setInterv]=useState()
const [status,setStatus]=useState(3)
const [speed,setSpeed]=useState({speed:1000})
var updatedspeed = speed.speed;
const useStyle=makeStyles({
        button: {
              backgroundColor:'#54B8A1'
          }
  });
  const style={
    backgroundColor:'#4A4A4A'
  }
const start = (spe)=>{
    clearInterval(interv)
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
  setSpeed({speed:sp})
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
const classes=useStyle()

  return (
    <div className="App">
        <section id="first-col" >
       <Typography id='countdown' variant="h5" component="h2">
  Countdown:
</Typography><TextField id="value" label="(MIN)"  value={minute} onChange={(e)=>
  {
   
   (e.target.value<0)? setMinute(1):
  setMinute(e.target.value)
  
}
}
 type="number" variant="outlined"  />

   <button id="button" onClick={()=>{
          updatedmin=minute
          start(1000)
         
        }} >Start</button>
     
     </section>
    <Timer timer={timer} min={minute} updatedmin={updatedmin} status={status} updatedsec={updatedsec}/>
   <section id="control">
    {(status==1) ? <IconButton onClick={stop} >
    <PauseCircle color='inherit' sx={{ fontSize: 40 }} />
</IconButton>:""}
{(status==2) ? <IconButton onClick={resume}>
    <PlayCircleFilledWhite color='inherit' sx={{ fontSize: 40 }} />
</IconButton>:""}
<Button style={(speed.speed==1000)? style:null} variant='outlined' onClick={()=>
  { 
  speed_interval(1000)}}>1x</Button>
<Button style={(speed.speed==500)? style:null}  variant='outlined' onClick={()=> { 

  speed_interval(500)
}}>1.5x</Button>
<Button style={(speed.speed==100)? style:null}  variant='outlined' onClick={()=> { 

 speed_interval(100)}}>2x</Button>
 </section>
    </div>
  );
}

export default Main;
