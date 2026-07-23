import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="auth-page">
      <h2>Register</h2>
      <p>Register form coming soon...</p>
      <Link to="/login">Already have an account? Login</Link>
    </div>
  )
}

export default Register
