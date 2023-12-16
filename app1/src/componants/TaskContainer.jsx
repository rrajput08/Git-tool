import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div style={{border:"5px solid blue", marginTop:"50px"}}>
      <SingleTask task="go to gym"/>
      <SingleTask task="read some books"/>
      <SingleTask task="cook your meal"/>
      <SingleTask task="read newspaper"/>
    </div>
  )
}

export default TaskContainer