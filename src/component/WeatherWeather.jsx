import axios from 'axios'
import { useEffect, useState } from 'react' 
import Loader from './Loader'


 const WeatherWeather=()=>{

  
const [climate, setClimate] = useState({})
//lo de el load
const [isLoading, setIsLoading] = useState(true);
//Lo de los grados C y F
const[isCelsium, setCelsiumt]=useState(true)

//api key
const apiKey ='0f40bd8aaf6ec5b75e898ead58710eff';

  useEffect( () => {
    
    
    navigator.geolocation.getCurrentPosition((location) => {
      
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}`)
      .then( (resp) =>  {
        setClimate(resp.data)
        /*Lo del Load */
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch( error => console.error(error))
    })
    
  }, [])

  // cambio de grados
  const changeCelsium=()=>{
    setCelsiumt(!isCelsium)
   }


    return(
      <>
 {isLoading && <Loader />}

 

{/*<section className='sectioTime'> */}
    
<div className="time">
<section className='container'>
   <div className="datatime">
                    {/* Lo de los grados C y F */}
    
    <h2>{isCelsium ? Math.floor(climate.main?.temp-273.15):
    Math.floor(((climate.main?.temp-273.15)*9)/5)+32} 
    {isCelsium ? '°C':'°F'}</h2>
    <h2>{climate.name}</h2>
    <h3>{climate.sys?.country}</h3>
     <h5>🌬VIENTO: {climate.wind?.speed} m/s</h5>   
     <h5>☁ NUBES: {climate.clouds?.all}% </h5>
     <h5>💧HUMEDAD: {climate.main?.humidity}% </h5>
     {/* depende la presion cambia de alta, norma y baja*/}
     <h5>🕛
      PRESIÓN:{climate.main?.pressure>1013 ? 'Alta': climate.main?.pressure===1013 && climate.main?.pressure>=1000? 'Normal': 'Baja'}</h5> 
      </div>
      <div className="imgIcons">
  <img src={climate.weather?.[0].icon+'.svg'}/>
   <h5>{ climate.weather?.[0].description}</h5>
  </div>


</section>
 
    
   {console.log(climate.main?.pressure)}
  
  
</div>
{/*</section>*/}
<section className='footer'>
      <button onClick={changeCelsium}>Cambiar a °F</button>
      </section>
</>
    )
 }

 export default WeatherWeather