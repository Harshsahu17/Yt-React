import React from 'react'

const App = () => {
  
  function scroll(val){
    console.log(val);
  }
  return (
    <div onWheel={(elem)=>{
      scroll(elem.deltaY)
    }}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default App
