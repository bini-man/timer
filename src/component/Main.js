import Timer from "./Timer";
import './Main.css'
import React, { useEffect, useState } from 'react'
import { TextField, Typography,Button, IconButton } from '@mui/material'
import {  PauseCircle, PlayCircleFilledWhite } from '@mui/icons-material';
function Main() {
  const [minute,setMinute]=useState(0)
  const [timer,setTimer]=useState({sec:0,min:minute})
  const [interv,setInterv]=useState()
  const [status,setStatus]=useState(3)
  const [speed,setSpeed]=useState({speed:1000})
  const [disabel,setDisable]=useState(true)
  const [changed,setChanged]=useState(false)
  const style={
        backgroundColor:'#4A4A4A'
  }
  const start = (spe)=>{
        clearInterval(interv)
        if(updatedmin===0&&updatedsec===0) return
        Math.round(updatedmin)
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
        return setTimer({sec:updatedsec,min: Math.round(updatedmin)});
}
  const speed_interval = (sp) =>{
        clearInterval(interv)
        setSpeed({speed:sp})
        start(sp)
}
  const stop = () =>{
        setDisable(true)
        setStatus(2)
        clearInterval(interv)
}
  const resume = () =>{
        setDisable(false)
        setStatus(1)
        start(speed.speed)
}
  var updatedsec = timer.sec , updatedmin = timer.min;
  return (
    <div className="App">
       <section id="first-col" >
          <Typography id='countdown' variant="h5" component="h2">Countdown:</Typography>
          <TextField id="value" label="(MIN)"  value={minute} onChange={(e)=>
              {
                      (e.target.value<0)? setMinute(1):
                      setMinute(e.target.value)
              }
            } type="number" variant="outlined"  />
          <button id="button" onClick={()=>
              {
                      if(status===1) setChanged(true)
                      updatedmin=minute
                      start(speed.speed)
                      setDisable(false)
              }} >Start</button>    
       </section>
         <Timer timer={timer} min={minute} changed={changed} updatedmin={updatedmin} status={status} updatedsec={updatedsec}/>
       <section id="control">
           {(status===1) ? <IconButton onClick={stop} ><PauseCircle color='inherit' sx={{ fontSize: 40 }} /></IconButton>:""}
           {(status===2) ? <IconButton onClick={resume}><PlayCircleFilledWhite color='inherit' sx={{ fontSize: 40 }} /></IconButton>:""}
            <Button style={(speed.speed===1000)? style:null} disabled={disabel} variant='outlined' onClick={()=>speed_interval(1000)}>1x</Button>
            <Button style={(speed.speed===500)? style:null}  disabled={disabel} variant='outlined' onClick={()=> speed_interval(500)}>1.5x</Button>
            <Button style={(speed.speed===100)? style:null}  disabled={disabel} variant='outlined' onClick={()=> speed_interval(100)}>2x</Button>
       </section>
    </div>
  );
}
export default Main;