import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card name="Harsh Sahu" img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" description="Harsh Sahu is a software developer with a passion for creating innovative solutions." />
      <Card name="John Doe" img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" description="John Doe is a marketing specialist with experience in digital campaigns." />
      <Card name="Jane Smith" img="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" description="Jane Smith is a graphic designer with a focus on brand identity." />
    </div>
  )
}

export default App
