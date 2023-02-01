import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg'

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
        
      </div>
    </div>
  );
}

export default App;
