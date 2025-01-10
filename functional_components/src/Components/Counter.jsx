import React from 'react'
import "../Styles/Counter.css"
const Counter = (props) => {

  return (
    <div id='counter'>
      <h1>Counter</h1>
      <div>
          <button onClick={()=> props.decrement()}>-</button>
          <span>{props.count}</span>
          <button onClick={() =>props.increment()}>+</button>
          <button onClick={() =>props.reset()}>reset</button>
      </div>
    </div>
  )
}

export default Counter
