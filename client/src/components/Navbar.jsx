import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">📝 Notes App</div>
      <div className="navbar__actions">
        <Link to="/login">
          <button className="navbar__btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="navbar__btn navbar__btn--primary">Register</button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
