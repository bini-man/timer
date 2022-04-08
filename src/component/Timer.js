import './Timer.css'
import {  Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { makeFalse } from "../redux/counter"
export default function Timer(props) {
      const [texts,setTexts]=useState('')
      const [text_color,setText_color]=useState('black')
      const [display,setDisplay]=useState('none')
      const [displayOrg,setDisplayOrg]=useState('')
      const dispatch=useDispatch()
      const {value}=useSelector(state=>state.counter)
      const style={
        color:'#FF0000',
        display:display,
      }
      const styleOrginal={
        display:displayOrg
      }
      const useStyle=makeStyles((theme)=>{
        return{
          root:{
            display: "flex",
            color:text_color
              }
          }
      })
      const classes=useStyle()
      useEffect(()=>{
            if(props.min===1&&props.updatedsec===30){
              setTexts("More than half way there!")
            }
            if(props.min/2>=props.updatedmin && props.updatedmin!==0&&props.updatedsec===0){
              setTexts("More than half way there!")
            }
            if(props.updatedmin<=0&&props.updatedsec===0&&props.min!==0&&props.status!==3){
              setTexts("Time's Up!!")
            }
            if(props.updatedmin===0&&props.updatedsec===20){
              setText_color('red')
            }
            if(props.updatedmin===0&&props.updatedsec <= 10&&props.status!==3){
              setDisplay('')
              setDisplayOrg('none')
            }
            if(value===true){
              setDisplay('none')
              setText_color('black')
              setTexts("")
              setDisplayOrg("")
              dispatch(makeFalse())
            }
  },[props.updatedsec,props.min, props.status,props.updatedmin,dispatch,value])
 return (
    <div>
            <Typography id="notification" variant="h5" component="h2">{texts}</Typography>
      <section id='counter'>
            <Typography style={styleOrginal} fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>{(props.timer.min<10)?<Typography fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>0</Typography>:null}{props.timer.min}:{(props.timer.sec<10)?<Typography fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>0</Typography>:null}{props.timer.sec}</Typography>
            <Typography id='blink' style={style} fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>{(props.timer.min<10)?<Typography style={style} fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>0</Typography>:null}{props.timer.min}:{(props.timer.sec<10)?<Typography style={style}  fontWeight="fontWeightBold" variant="h1" component="h2" className={classes.root}>0</Typography>:null}{props.timer.sec}</Typography>
      </section>
    </div>
  )
}