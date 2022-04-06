import React from 'react'
import Input from './Input'

export default function ButtonComponet(props) {
  return (
    <div>
        <Input/>
        <button onClick={props.start}>Start</button>
    </div>
  )
}
