import DatosPersonales from './componentes/DatosPersonales';
import Estudios from './componentes/Estudios';
import Herramientas from './componentes/Herramientas';
import Deportes from './componentes/Deportes';
import Formulario from './componentes/FormularioRegistro'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lenin Taco</h1>
      </header>
      <main>
        <DatosPersonales />
        <Estudios />
        <Herramientas />
        <Deportes />
        <Formulario />
      </main>
    </div>
  );
}

export default App;