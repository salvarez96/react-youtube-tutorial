import React from "react";
import fccLogo from '../images/fcc_primary_large.png';
import '../styles/Header.css';

function Header() {
  return(
    <div className='logo-contenedor'>
      <img 
        className='logo__freecodecamp' 
        src={fccLogo} 
        alt='Logo de FreeCodeCamp' />
    </div>
  );
}

export default Header;