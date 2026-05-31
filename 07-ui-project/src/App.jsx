import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users = 
  [
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'royalblue',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1747741744095-609572aa59ad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'lightseagreen',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'teal',
      tag:'Underbanked'
    },
    {
      img:'https://images.unsplash.com/photo-1600275668999-f423597ec2a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%35b82cd15e29',
      intro:'',
      color:'black',
      tag:'Underprocess'
    },
    {
      img:'https://images.unsplash.com/photo-1620828771830-fb3fa87866b6?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      color:'gray',
      tag:'Unsatisfied'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
