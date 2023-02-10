import './header.css';
import logo from './../../assets/img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="pd">
      <div className="header_logo">
        <Link to="/"><img src={logo} /> </Link>
      </div>
      <div className="header_noauth_links">
        <Link to="" >Services</Link>
        <Link to="" >Blogs</Link>
        <Link to="/contact-us" >Contact Us</Link>
        <Link to="/login"  className="header_login_btn">Login</Link>
      </div>
    </header>
  );
}

export default Header;
