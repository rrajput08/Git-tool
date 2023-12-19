// import Counter from "./componants/Counter";
import { useState } from "react";
import InputContainer from "./componants/InputContainer";
import TaskContainer from "./componants/TaskContainer";

function App(){

  const [input,setInput] = useState("");
  
  let styleObj = {width:"400px",height:"500px", backgroundColor:"black"}
  


  return (
    <div style={styleObj}>
      {/* <Counter/> */}
      <InputContainer setInput={setInput}/>
      <TaskContainer task={input}/>
      </div>
    )
}

export default App;