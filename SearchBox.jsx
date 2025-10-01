import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
      let [city, setCity] = useState("");
      let [error, setError] = useState(false);

    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "5adf5321a88d1632dd0fba43300d077b";
    
    let getWeatherInfo = async() =>{
        try{
            let resposnse= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponce = await resposnse.json();
            let result = {
            city: city,
            temp: jsonResponce.main.temp,
            tepmMin: jsonResponce.main.temp_min,
            tepmMax: jsonResponce.main.temp_max,
            humdity: jsonResponce.main.humidity,
            feelslike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description

        };
        console.log(result);
        return result;

        }catch(err){
            throw(err);
        }
       
       
    };

    let handleChange = (evt) =>{
        setCity(evt.target.value);
    }

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);

        }catch(err){
          setError(true);
        }
        
    };

 return(
    <div className='Search_box'>
        <form onSubmit={handleSubmit}>
           <TextField id="city" label="City name" variant="outlined" required  value={city} onChange={handleChange}/>
           <br></br><br></br>
           <Button variant="contained" type='submit'>Search</Button>
           {error && <p style={{color: "red"}}>no such place exists!</p>}
        </form>
    </div>
 );

}