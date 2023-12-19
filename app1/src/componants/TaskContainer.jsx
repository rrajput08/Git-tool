import React from 'react'
import SingleTask from './SingleTask'
let arr =["do some cooking","read some books","go for a walk","do some exercise","do your homework"] 
const TaskContainer = ({task}) => {

  arr.push(task)
  // let obj = {key : "value", key2 :" value2" , key3 : "value3"}

  return (
    <div style={{border:"5px", marginTop:"50px"}}>

      {arr.map(function(ele, index){
        return <SingleTask task={ele} taskno={index+1}/>
      })}
      {/* <SingleTask task={arr[0]} taskno={1}/>
      <SingleTask task={arr[1]} taskno={2} />
      <SingleTask task={arr[2]} taskno={3}/>
      <SingleTask task={arr[3]} taskno={4}/> */}
    </div>
  )
}

export default TaskContainer