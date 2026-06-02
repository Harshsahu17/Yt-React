import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num1, setnum1] = useState(0)
  const [num2, setnum2] = useState(100)

  function aChanging() {
    console.log('a ki value change ho gyi')
  }
  function bChanging() {
    console.log('b ki value change ho gyi')
  }

  useEffect(() => {
    aChanging()
    console.log('useEffect called')
  }, [num1])

  useEffect(() => {
    bChanging()
    console.log('useEffect called')
  }, [num2])

  return (
    <div>
      <h1>num1 is {num1}</h1>
      <h1>num2 is {num2}</h1>
      <button onClick={() => setnum1(num1 + 1)}>change A</button>
      <button onClick={() => setnum2(num2 + 10)}>change B</button>
    </div>
  )
}

export default App
