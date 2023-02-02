import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg'
import Boton from './components/Boton';

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img
          src={ freeCodeCampLogo }
          className='freecodecamp-logo'
          alt='Logo de FreeCodecCamp'
        />
      </div>

      <div className='calculator-container'>
        <div className='file'>
          <Boton>1</Boton>
          <Boton>1</Boton>
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className='file'></div>
        <div className='file'></div>
        <div className='file'></div>
        <div className='file'></div>
      </div>
    </div>
  );
}

export default App;
