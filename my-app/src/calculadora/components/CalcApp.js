import React from 'react';
import fccLogo from '../images/fcc_primary_large.png';
import '../styles/CalcApp.css';

function CalcApp() {
  return (
    <section className='calculadora-contenedor'>
      <div className='logo-contenedor'>
        <img 
          className='logo__freecodecamp' 
          src={fccLogo} 
          alt='Logo de FreeCodeCamp' />
      </div>
    </section>
  );
}

export default CalcApp;