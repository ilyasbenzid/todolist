import React, { useState } from 'react'

const AddTsk = ({fnc}) => {
    const [newtask, setnewtask] = useState({name:"", done:false});
  return (
    <div>
      <input type="text" placeholder='add your task' onChange={(e)=>(setnewtask({name:e.target.value}))}/>
      <button onClick={()=>fnc(newtask)}> ADD </button>
    </div>
  )
}

export default AddTsk
