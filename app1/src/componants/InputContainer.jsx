import React, { useState } from 'react'

const InputContainer = () => {
  let input=""
  // const [data,setData]=useState ("")
  function inputData(ele){
    input = ele.target.value
    console.log (input)
  }
 
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
        <input style={{padding:"20px 30px"}}onChange={inputData}/>
        <button style={{padding:"20px 30px"}}>Add</button>
    </div>
  )
}

export default InputContainer