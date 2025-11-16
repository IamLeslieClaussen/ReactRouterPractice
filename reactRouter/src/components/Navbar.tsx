import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <img src="" alt="" />
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        
        
      </ul>
      <button>Get started</button>
    </div>
  );
};

export default Navbar;