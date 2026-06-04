import React, { useContext } from 'react'
import ThemeDataContext from '../context/ThemeDataContext'

const Button = () => {

  const [theme, setTheme] = useContext(ThemeDataContext)
  
  return (
    <div>
      <button onClick={()=>{
        setTheme(theme === "light" ? "dark" : "light")}}
      >Change Theme {theme}</button>
    </div>
  )
}

export default Button
