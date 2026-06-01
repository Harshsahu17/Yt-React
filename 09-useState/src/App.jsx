import React from 'react'
import { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  function increase(){
    setcount(count+10);
  }
  function decrease(){
    setcount(count-10);
  }

  return (
    <div>
      <div>Count : {count}</div>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>  
    </div>
  )
}

export default App
