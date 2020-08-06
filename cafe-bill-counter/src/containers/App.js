import React, { useState } from 'react';
import './App.css';
import EquallyInterface from '../components/FirstMode/EquallyInterface/EquallyInterface';
import EachPersonInterface from '../components/SecondMode/EachPersonInterface/EachPersonInterface'

const App = () => {

  let [value,setValue] = useState('');

  const getPorovnu = () =>{
    value = 'first';
    setValue(value);
  }

  const getEach = () =>{
    value = 'second';
    setValue(value);
  }

  let porovnuMode = null;
  let eachMode = null
  if(value === 'first'){
    porovnuMode = <EquallyInterface/>;
  }
  if(value === 'second'){
    eachMode = <EachPersonInterface/>
  }
  return (
    <div className="App">
      <h3>Сумма заказа считается :</h3>
      <p><input type="radio" name="value" checked={value === 'first'} onChange={getPorovnu}/>Поровну между всеми участниками</p>
      <p><input type="radio" name="value" checked={value === 'second'} onChange={getEach}/>Каждому индивидуально</p>

      {porovnuMode}
      {eachMode}
    </div>
  );
}

export default App;
