import { useState } from "react";
import ButtonComponet from "./component/ButtonComponet";
import Timer from "./component/Timer";

function App() {
const [timer,setTimer]=useState({sec:10,min:10})
const start = ()=>{
  run();
  setInterval(run,1000)
}
const run = () =>{
  if(updatedsec===0){
    updatedmin--;
    updatedsec=60
  }
  updatedsec--;
  return setTimer({sec:updatedsec,min:updatedmin});
}
var updatedsec = timer.sec , updatedmin = timer.min;
  return (
    <div className="App">
      <ButtonComponet start={start}/>
    <Timer timer={timer}/>
    
    </div>
  );
}

export default App;
