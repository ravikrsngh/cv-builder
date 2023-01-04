import './auth.css';
import googleicon from './../../assets/img/social_icons/google.png';
import fbicon from './../../assets/img/social_icons/facebook.png';
import {Link} from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="auth_container">
      <h2>Sign Up</h2>
      <form>
      <input type="text"  placeholder="Name" required/>
        <input type="email"  placeholder="Email" required/>
        <input type="password" placeholder="Password" required/>
        <input type="password" placeholder="Confirm Password" required/>
        <button type="submit">Create Account</button>
      </form>
      <div className="other_auth_options_container">
        <span>or sign in with</span>
        <div className="other_auth_options">
          <a><img src={googleicon} /></a>
          <a><img src={fbicon} /></a>
        </div>
      </div>
      <span className="auth_nav_message">Already a member? <Link to="/login">Login.</Link></span>
    </div>
  )
}


export default SignUpPage;
