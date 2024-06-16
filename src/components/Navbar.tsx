import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.header}>
        <button className={styles.savebutton}>Save Changes</button>
    </div>
  )
}

export default Navbar