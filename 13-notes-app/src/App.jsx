import React from 'react'
import { useState } from 'react'

const App = () => {

  const [heading, setHeading] = useState('')
  const [notes, setNotes] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    if (!heading.trim() || !notes.trim()) {
     alert("Please fill all fields");
    return;
    }
    // const copyTask = [...task]
    // copyTask.push({heading, notes})
    // setTask(copyTask)

    // setTask([...task, { heading, notes }]);

    setTask(prev => [...prev, { heading, notes }]);

    setHeading('')
    setNotes('')
  }

  const deleteNote = (index) => {
    const copyTask = [...task]
    copyTask.splice(index, 1)
    setTask(copyTask)
  }

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form 
        onSubmit={(e)=>{submitHandler(e)}} 
        className="flex flex-col gap-4 lg:w-1/2 items-start p-10"
      >
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          {/* INPUT FOR HEADING */}
          <input 
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            type="text" 
            placeholder="Enter Notes Heading" 
            className="px-5 w-full font-medium py-2 border-2 outline-none rounded" 
          />
          {/* INPUT FOR NOTES */}
          <textarea 
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Write your notes here..." 
            className="px-5 h-32 w-full font-medium py-2 flex flex-row items-start border-2 outline-none rounded"
          ></textarea>
          <button 
            type="submit" 
            className="bg-white text-black active:scale-95 font-medium w-full outline-none px-5 py-2 rounded"
          >Add Note</button>
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap hide-scrollbar items-start justify-start gap-5 mt-6  h-[90%] overflow-auto'>
          {task.map((elem, index) => (
            <div key={index} className='relative flex flex-col justify-between items-start h-52 w-40 pt-9 pb-4 px-4 rounded-xl text-black bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] bg-cover'>
              <div>
                <h3 className='leading-tight font-bold text-lg break-all'>{elem.heading}</h3>
                <p className='mt-2 h-24 overflow-y-auto hide-scrollbar text-gray-600 text-sm font-medium wrap-anywhere leading-tight'>{elem.notes}</p>
              </div>
              <button onClick={() => deleteNote(index)} className='w-full bg-red-500 text-white py-1 text-xs font-bold rounded cursor-pointer active:scale-95'>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
