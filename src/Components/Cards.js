import React from 'react'

const Cards = ({task}) => {
  return (
    <div>
      <h1>{task.name}</h1>
      <h3>{task.done? "done" : "not done"}</h3>
    </div>
  )
}

export default Cards
