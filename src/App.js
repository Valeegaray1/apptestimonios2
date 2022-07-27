
import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros clientes de nosotros</h1>
     <Testimonio 
     nombre='Ian Bostian'
     pais='Suecia'
     imagen='ian'
     cargo='Ingeniero de Sofware'
     empresa='Spotify'
     testimonio='Una experiencia increíble y única, fácil acceso y respuesta de inmediato.'    
     />
     <Testimonio 
     nombre='Joshep Wang'
     pais='China'
     imagen='joseph'
     cargo='Ingeniero de Sofware'
     empresa='ChatDesk'
     testimonio='Sin dudas cumplió todas mis expectativas y volvería a elegir esta opción.'
     />
     <Testimonio 
     nombre='Emma Chima'
     pais='Suecia'
     imagen='michael'
     cargo='Ingeniera de Software'
     empresa='Amazon'
     testimonio='Me transmitio seguridad y todo se manejo en un ambiiente muy profesional.'
     />
     
     </div>
    </div>
  );
}

export default App;
