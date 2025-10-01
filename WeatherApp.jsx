import "./WeatherApp.css"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        
        city: "india",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.85,
        humidity: 47,
        weather: "haze"
    });

    let updateInfo =(newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
       <div className="WeatApp">
        <h2>Weather App by Mohd Gulfam</h2>
        <SearchBox updateInfo ={updateInfo}/>
        <InfoBox info={weatherInfo}/>
       </div>

    )
}