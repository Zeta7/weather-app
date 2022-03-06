import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Climate from './components/Climate';
import Loading from './components/Loading';



const apikey = 'afc2ea43398312c9e0a851330a9c3fb9';

const App = () => {

  const [locationClimate, setLocationClimate] = useState({});
  const [loading, setLoading] = useState(true);
  function success (pos) {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${apikey}`)
      .then(res=>{
        setLocationClimate(res.data);
      });
  };
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success);
  },[]);

  setTimeout(() =>{
    setLoading(false);
  }, 4000)
  if(loading){
    return  <div className="contend_loading"><Loading /></div>
  }else{
  return (
    <div className="App">
      
      <Climate name={locationClimate.name +", "+locationClimate.sys?.country}
      temp = {locationClimate.main?.temp}
      windSpeed = {locationClimate.wind?.speed}
      clouds = {locationClimate.clouds?.all}
      pressure = {locationClimate.main?.pressure}
      icon = {locationClimate.weather?.[0].icon}
      />
    </div>
  );
}
}

export default App;
