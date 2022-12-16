import {useState} from 'react'
import './auth.css';
import googleicon from './../../assets/img/social_icons/google.png';
import fbicon from './../../assets/img/social_icons/facebook.png';
import {Link} from 'react-router-dom';

const ChangePasswordPage = () => {
  return (
    <div className="auth_container">
      <h2>Enter Password</h2>
      <form>
        <input type="password"  placeholder="New Password" required/>
        <input type="password"  placeholder="Confirm New Password" required/>
        <button type="submit">Change Password</button>
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


export default ChangePasswordPage;
