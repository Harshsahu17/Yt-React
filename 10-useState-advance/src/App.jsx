// import React, { useState } from "react";

// const App = () => {

//   const [num, setNum] = useState({user: "harsh",age: 21});

//   function btnClicked() {
//     const newNum = {...num}
//     newNum.user='anuj'
//     newNum.age=24
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>
//         {num.user}, {num.age}
//       </h1>
//       <button onClick={btnClicked}>
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  function btnClicked() {
    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
    setnum(prev=>prev+1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClicked}>+</button>
    </div>
  )
}

export default App
