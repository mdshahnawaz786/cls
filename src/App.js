import { useState } from 'react';
import './App.css';
import Input from './component/Input';
import Text from './component/Text';
import Image from './Image';


function App() {
  const [inp, setInp] = useState(false)
  const [img, setImg] = useState(false)
  return (
    <div className="App">
      { inp && <Input/> }
      <Text/>
      {img && <Image/>}

      <button onClick={(()=>{
        setInp(true)
        setImg(false)
      })}>input</button>
      <button onClick={(()=>{
        setInp(false)
        setImg(true)
      })}>image</button>

    </div>
  );
}

export default App;
