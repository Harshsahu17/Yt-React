import Styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <h2>This is a navbar</h2>
      <button className={Styles.btn}>Home</button>
    </div>
  )
}

export default Navbar
