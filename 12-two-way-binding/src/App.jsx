import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  function submitHandler(e){
    e.preventDefault()
    console.log("form submitted")
    setTitle('') // clear the input field after submission
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input 
          type="text" 
          placeholder="enter your name" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}      
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
