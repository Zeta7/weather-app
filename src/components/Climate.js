import React from "react";
import { useState} from "react";


const Climate = ({name, temp, windSpeed, clouds, pressure, icon}) => {
    
    const centigrade = (temp - 273.15).toFixed(2);
    const fahrenheit = ((centigrade*1.8)+32).toFixed(2);
   
    const [temperature, setTemperature] = useState(centigrade+" °C");
    const [bool, setBool] = useState(true);

    const view = () =>{
        if(bool === true){
            setTemperature(fahrenheit+" °F")
            setBool(false);
        }else{
            setTemperature(centigrade+" °C")
            setBool(true);
        }
    }

    return(
        <div className="contendClimate">
            <h1>Wheather App</h1>
            <h3 >{name}</h3>
            <div className="contendImgData">
                <div className="cont_temp">
                   <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <h2>{(temperature=="NaN °C")?centigrade+" °C": temperature}</h2>
                </div>
                <div className="data_climate">
                    <h3><i className="fa-solid fa-wind"></i> Wind Speed: {windSpeed} m/s</h3>
                    <h3><i className="fa-solid fa-cloud"></i> Clouds: {clouds} %</h3>
                    <h3><i className="fa-solid fa-temperature-full"></i> Pressure: {pressure} mb</h3>
                </div>
            </div>
            <input type='button' value='Degrees °F / °C' onClick={view}/>
        </div>

    );
};

export default Climate;