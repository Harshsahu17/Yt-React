import { useState } from 'react'
import ThemeDataContext from './ThemeDataContext'

const ThemeContext = (props) => {
    
    const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
