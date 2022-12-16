import './auth.css';
import googleicon from './../../assets/img/social_icons/google.png';
import fbicon from './../../assets/img/social_icons/facebook.png';
import {Link} from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="auth_container">
      <h2>Login</h2>
      <form>
        <input type="email"  placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <a href="forgot_password" className="forgot_password">Forgot Password ?</a>
        <button type="submit">Login</button>
      </form>
      <div className="other_auth_options_container">
        <span>or sign in with</span>
        <div className="other_auth_options">
          <a><img src={googleicon} /></a>
          <a><img src={fbicon} /></a>
        </div>
      </div>
      <span className="auth_nav_message">Don't have an account? <Link to="/signup">Sign up.</Link></span>
    </div>
  )
}


export default LoginPage;
