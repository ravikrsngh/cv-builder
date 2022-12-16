import {useState} from 'react'
import './auth.css';
import googleicon from './../../assets/img/social_icons/google.png';
import fbicon from './../../assets/img/social_icons/facebook.png';
import {Link, useNavigate} from 'react-router-dom';

const ForgotPasswordPage = () => {
  let [otpSent, setOtpSent] = useState(false)
  let navigate = useNavigate()

  const sendOTPtoEmail = () => {
    setOtpSent(true)
  }
  const onSubmitEmailOTPHandler = () => {
    navigate('/change_password')
  }
  return (
    <div className="auth_container">
      { !otpSent? <h2>Enter Email</h2> : <h2>Verify OTP</h2> }
      <form onSubmit={onSubmitEmailOTPHandler}>
        <input type="email"  placeholder="Email" required/>
        {otpSent && <input type="text"  placeholder="OTP" required/> }
        {otpSent? <button type="submit">Verify</button> : <button type="button" onClick={sendOTPtoEmail}>Get OTP</button> }
      </form>
      <div className="other_auth_options_container">
        <span>or sign in with</span>
        <div className="other_auth_options">
          <a><img src={googleicon} /></a>
          <a><img src={fbicon} /></a>
        </div>
      </div>
      <span className="auth_nav_message">Already a member? <Link to='/login'>Login.</Link></span>
    </div>
  )
}


export default ForgotPasswordPage;
