
import ButtonComponet from "./component/ButtonComponet";
import Timer from "./component/Timer";
import React, { useEffect, useState } from 'react'
import { TextField, Typography } from '@mui/material'
import {  PauseCircle, PlayCircle } from '@mui/icons-material';
import { Button, IconButton } from '@mui/material';
function App() {
  const [minute,setMinute]=useState(0)

const [timer,setTimer]=useState({sec:0,min:minute})
const [interv,setInterv]=useState()
const [status,setStatus]=useState(3)
const [speed,setSpeed]=useState(100)
const start = ()=>{
  setStatus(1)
 
  run();
  setInterv(setInterval(run,speed))
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
  if(updatedmin===0 && updatedsec===0){
    clearInterval(interv)
  }
  updatedsec--;
  return setTimer({sec:updatedsec,min:updatedmin});
}
const stop = () =>{
  setStatus(2)
  clearInterval(interv)
}
const resume = () =>{
  setStatus(1)
  start()
}
var updatedsec = timer.sec , updatedmin = timer.min;
  return (
    <div className="App">
       <Typography variant="h5" component="h2">
  Countdown:
</Typography>
<TextField id="value" label="(MIN)"  value={minute} onChange={(e)=>setMinute(e.target.value)} type="number" variant="outlined"  />


        <button onClick={()=>{
          updatedmin=minute
          start()
         
        }} >Start</button>
    
    <Timer timer={timer} min={minute} updatedmin={updatedmin} status={status} updatedsec={updatedsec}/>
    {(status==1) ? <IconButton onClick={stop}>
    <PauseCircle color='secondary'/>
</IconButton>:""}
{(status==2) ? <IconButton onClick={resume}>
    <PlayCircle color='secondary'/>
</IconButton>:""}
<Button variant='outlined' onClick={()=>
  { console.log("normal speed")
  setSpeed(1000)}}>1x</Button>
<Button variant='outlined' onClick={()=> { console.log("medium speed")
setSpeed(1500)}}>1.5x</Button>
<Button variant='outlined' onClick={()=> { console.log("fast speed")
setSpeed(2000)}}>2x</Button>
    </div>
  );
}

export default App;
