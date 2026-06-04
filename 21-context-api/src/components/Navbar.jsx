import { useContext } from 'react'
import Navbar2 from './Navbar2'
import ThemeDataContext from '../context/ThemeDataContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext) 
    
  return (
    <div className={theme}>
      <h1>Sheryians</h1>
      <Navbar2 />
    </div>
  )
}   

export default Navbar
