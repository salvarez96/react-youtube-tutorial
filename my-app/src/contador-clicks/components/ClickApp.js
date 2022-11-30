import React from 'react';
import fccLogo from '../images/fcc_primary_large.png'
import '../styles/ClickApp.css'
import Boton from './Boton';

function ClickApp() {

  let contador = 0;
  const manejarClick = () => {
    contador++;
    console.log(contador);
  }
  const reinicarClick = () => {
    if (contador > 0){
      contador = 0;
      console.log(contador);
    }
  }

  return(
    <section className='click-contenedor'>
      <div className='logo-contenedor'>
        <img 
          className='logo__freecodecamp' 
          src={fccLogo} 
          alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contador'>
        <Boton 
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reinicarClick} />
      </div>
    </section>
  );
}

export default ClickApp