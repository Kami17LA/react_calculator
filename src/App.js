import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg'
import Boton from './components/botones/Boton';
import Pantalla from './components/screen/Pantalla';
import ClearBoton from './components/boton_clear/ClearBoton';
import { useState } from 'react'; 

function App() {

const [input, setInput] = useState(''); 

  const addInput = val => {
    setInput(input + val);
  }
 

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
        <Pantalla inputPantalla={input}/>
        <div className='file'>
          <Boton manageClick={addInput}>1</Boton>
          <Boton manageClick={addInput}>2</Boton>
          <Boton manageClick={addInput}>3</Boton>
          <Boton manageClick={addInput}>+</Boton>
        </div>
        <div className='file'>
          <Boton manageClick={addInput}>4</Boton>
          <Boton manageClick={addInput}>5</Boton>
          <Boton manageClick={addInput}>6</Boton>
          <Boton manageClick={addInput}>-</Boton>
        </div>
        <div className='file'>
          <Boton manageClick={addInput}>7</Boton>
          <Boton manageClick={addInput}>8</Boton>
          <Boton manageClick={addInput}>9</Boton>
          <Boton manageClick={addInput}>*</Boton>
        </div>
        <div className='file'>
          <Boton manageClick={addInput}>=</Boton>
          <Boton manageClick={addInput}>0</Boton>
          <Boton manageClick={addInput}>.</Boton>
          <Boton manageClick={addInput}>/</Boton>
        </div>
        <div className='file'></div>
        <ClearBoton manejarClear={() => setInput('')}>
          Clear
        </ClearBoton>
      </div>
    </div>
  );
}

export default App;
