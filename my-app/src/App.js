import './App.css';
import Testimonio from './testimonios-fcc/components/Testimonio';
import data from './testimonios-fcc/datos-testimonio';

function App() {
  return (
    <main className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      <Testimonio
      imagen={data[0].imagen}
      nombre={data[0].nombre}
      pais={data[0].pais}
      cargo={data[0].cargo}
      empresa={data[0].empresa}
      testimonio={data[0].testimonio} />
      <Testimonio
      imagen={data[1].imagen}
      nombre={data[1].nombre}
      pais={data[1].pais}
      cargo={data[1].cargo}
      empresa={data[1].empresa}
      testimonio={data[1].testimonio} />
      <Testimonio
      imagen={data[2].imagen}
      nombre={data[2].nombre}
      pais={data[2].pais}
      cargo={data[2].cargo}
      empresa={data[2].empresa}
      testimonio={data[2].testimonio} />
    </main>
  );
}

export default App;
