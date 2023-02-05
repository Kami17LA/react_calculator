import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg'
import Boton from './components/botones/Boton';
import Pantalla from './components/screen/Pantalla';
import ClearBoton from './components/boton_clear/ClearBoton';
/* import { useState } from 'react'; */

function App() {

/*   const [input, setInput] = useState(''); */

  /* const addInput = val => {
    setInput(input + val);
  }
 */

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
        {/* <Pantalla input={input}/> */}
        <div className='file'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className='file'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className='file'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='file'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='file'></div>
        <ClearBoton>
          Clear
        </ClearBoton>
      </div>
    </div>
  );
}

export default App;
