import './App.css';
import {useState} from 'react';
import {GetWeatherOnWeb} from './components/getWeatherOnWeb';
import { GetCityes } from './components/cityes';

function App() {

  const [city, setCity] = useState(undefined);
  const [select, setSelect] = useState("");
  const [cel, setCel] = useState("");
  
  return (
    <div className="App">
      <div className='header'>Welcome to the weather forecast website</div>
        <GetCityes city={city} funcCity={setCity} funcCel={setCel} funcSelect={setSelect}/>
        <GetWeatherOnWeb city={city} cel={cel} select={select}/>
        <p style={{textAlign: "center", fontsize: 25, color: "white",  marginBottom: 10}}>Built and designed by Yitzhak Frankel ifr83697@gmail.com</p>
    </div>
  );
}

export default App;
