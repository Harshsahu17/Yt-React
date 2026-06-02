import { useEffect } from 'react'
import { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  
  useEffect(function() {
    async function getData() {
      const response = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      const data = await response.json()
      setUserData(data);  
    }
    getData()
  }, [index])

  let printUserData = <h1 className='text-gray-400 font-semibold text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h1>
  
  if(userData.length > 0){
    printUserData = userData.map((user, idx) => {

      return (
        <div key={idx}>
          <Card user={user} />
        </div>
      )
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen pt-6 p-4 text-white'>
      <div className='flex h-[85%] justify-center flex-wrap p-2 gap-4'>
        {printUserData}
      </div>  
      <div className='flex justify-center items-center p-4 gap-6'>
        <button 
        style={{ opacity: index == 1 ? 0.6 : 1 }}
        onClick={()=>{
          if(index > 1){
            setIndex(index - 1)
            setUserData([]);
          }
        }}
        className='bg-amber-400 px-4 py-2 text-black font-bold rounded cursor-pointer text-sm active:scale-95'
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button 
        onClick={()=> {
          setUserData([]);
          setIndex(index + 1)
        }}
        className='bg-amber-400 px-4 py-2 text-black font-bold rounded cursor-pointer text-sm active:scale-95'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
