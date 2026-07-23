import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="auth-page">
      <h2>Login</h2>
      <p>Login form coming soon...</p>
      <Link to="/register">Don't have an account? Register</Link>
    </div>
  )
}

export default Login
