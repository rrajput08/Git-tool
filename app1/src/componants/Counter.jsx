import React, { useState } from 'react'

const Counter = () => {
    const [val,setVal] = useState (1)
    function incHandlar(){
        setVal(val+1)
        console.log(val);
    }
    function decHandlar(){
        setVal(val-1)
        console.log(val);
    }
  return (
    <div>
      <h1 style={{color:'white',fontSize:70,textAlign:'center'}}>Counter</h1>
      <h2 style={{color:'white',fontSize:70,textAlign:'center'}}>{val}</h2>
      <button style={{padding:30}} onClick={incHandlar}>Inc</button>
      <button style={{padding:30}} onClick={decHandlar}>Dec</button>


    </div>
  )
}

export default Counter
