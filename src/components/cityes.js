import { useState } from "react";
import { city } from "./city";

export const GetCityes = (props) => {
  const [city1, setCity1] = useState("");
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  const [autocompleteErr, setAutocompleteErr] = useState("");

  const handleCityChange = async (e) => {
    setCity1(e.target.value);
    if (!city1) return;
    const response = await city(city1);
    !autocompleteCities.includes(e.target.value) &&
      response.features &&
      setAutocompleteCities(response.features.map((place) => place.place_name));
    response.error ? setAutocompleteErr(response.error) : setAutocompleteErr("");
    props.funcCity(e.target.value);
  };

  return (
    <form>
      <div className="radio">
        <div>
        <label className="label">Select a unit of measure</label><br></br>
	    <input label="Celsius" type="radio"  name="gender"  onChange={(e)=>{props.funcSelect("metric"); e.preventDefault(); props.funcCel("C")}}/>
	    <input label="Fahrenheit" type="radio" name="gender" onChange={(e)=>{props.funcSelect("imperial"); e.preventDefault(); props.funcCel("F")}}/><br></br>
      </div>

      <div>
          <label htmlFor="city" className="label">
          Enter a city for a weather forecast
            {autocompleteErr && (<span className="inputError">{autocompleteErr}</span>)}
          </label><br/>
          <input id="inpot" list="places" type="text" onClick={(e)=>props.funcCity(e.target.value)} onChange={handleCityChange} value={city1} pattern={autocompleteCities.join("|")}/>
          <datalist onChange={(e)=>props.funcCity(e.target.value)} id="places">
            {autocompleteCities.map((item, index) => (
              <option  key={index}>{item}</option>
            ))}
          </datalist>
          </div>
      </div>
    </form>
  );
};
