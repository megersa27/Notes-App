import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">📝 Notes App</div>
      <div className="navbar__actions">
        <button className="navbar__btn">Login</button>
        <button className="navbar__btn navbar__btn--primary">Register</button>
      </div>
    </nav>
  )
}

export default Navbar
