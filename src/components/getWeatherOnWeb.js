import "./GetWeatherOnWeb.css";
import { useState, useEffect } from "react";
import { weatherCity } from "./weather";

export function GetWeatherOnWeb(props) {
  const [weather, setWeather] = useState("");
  
  useEffect(() => {
    if (props.city != undefined && props.select != "") {
      weatherCity(props.city, props.select)
        .then((data) => {
          setWeather(data.list);
        })
        .catch((err) => {console.log(err);});
    }
  }, [props.city, props.select]);

  return (
    <div className="mainOfWeater">
     {Array.isArray(weather) && <div className="todayWeater">
       <h2>{props.city}</h2>
        <h2> today  {new Date(weather[0].dt*1000).toLocaleDateString()}</h2>
        <span className="current">{`${Math.round(weather[0].main.temp)}°${props.cel}`}</span>
        <h2 >{`feels like: ${Math.round(weather[0].main.feels_like)}° description: ${weather[0].weather[0].description}`}</h2>
        <h2>{`${Math.round(weather[0].main.temp_min)}° / ${Math.round(weather[0].main.temp_max)}°`}</h2>
      </div>}

      <div className="allWeather">
        { Array.isArray(weather) && [weather[8], weather[16], weather[24],weather[32]].map((item,index)=>{
        return <div key = {index} className="oneWeather">
        <h2> {new Date(item.dt*1000).toLocaleDateString()}</h2>
        <h1>{`${Math.round(item.main.temp)}°${props.cel}`}</h1>
        <p >{`feels like: ${Math.round(item.main.feels_like)}° cdescription: ${item.weather[0].description}`}</p>
        <h2>{`min ${Math.round(item.main.temp_min)}° / max ${Math.round(item.main.temp_max)}°`}</h2>
      </div>
      })
    }
    </div>
     </div>
  );
}
