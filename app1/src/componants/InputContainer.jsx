import React, { useState } from 'react'

const InputContainer = ({setInput}) => {
  let input ="";
  
  function addHandlar(){
    setInput(input)
  }
 
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
        <input onChange={function(event){
          input=event.target.value;
          console.log(input) }}style={{padding:"20px 30px"}}/>
        <button style={{padding:"20px 30px"}}onClick={addHandlar}>Add</button>
    </div>
  )
}

export default InputContainer