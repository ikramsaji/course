import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
function Logout(){
  window.localStorage.removeItem("email")
}
function Header() {
  return (
    <div className='conainer'>
    <header>
    <nav>
  <Link to="/Home">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>

  {!window.localStorage.getItem("email") ? (
    <div> 
      <Link to="/SignUp">Register</Link>
      <Link to="/Login">Login</Link>
    </div>
  ) : (
    <Link to="/Logout" onClick={Logout}>Logout</Link> /* ✅ Correction ici */
  )}
</nav>

    </header>
</div>
  );
}

export default Header;
