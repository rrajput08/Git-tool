import React from 'react'

const SingleTask = ({task,}) => {
  // let task = props.task;
  return (
    <div style={{marginTop:"10px",textAlign:"center",border:"5px solid pink",color:"white", fontSize:"24px"}}>
      
      {task}
    
      <button>delete</button>
    </div>
  )
}

export default SingleTask