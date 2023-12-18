// import Counter from "./componants/Counter";
import InputContainer from "./componants/InputContainer";
import TaskContainer from "./componants/TaskContainer";

function App(){
  let styleObj = {width:"400px",height:"500px", backgroundColor:"black"}


  return (
    <div style={styleObj}>
      {/* <Counter/> */}
      <InputContainer/>
      <TaskContainer/>
      </div>
    )
}

export default App;