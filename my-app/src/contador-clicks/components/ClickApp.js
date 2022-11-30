import React from 'react';
import fccLogo from '../images/fcc_primary_large.png'
import '../styles/ClickApp.css'
import Boton from './Boton';
import Contador from './Contador';
import { useState } from 'react';

function ClickApp() {

  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    setContador(contador + 1);
  }
  const reinicarClick = () => {
    if (contador > 0){
      setContador(0);
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
        <Contador
          conteo={contador} />
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