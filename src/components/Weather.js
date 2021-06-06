import React from 'react';

const Weather = (props)=>{
    
    return(
        <>
            <div className="main">
                <div className="main-header">
                    <i className="fas fa-map-marker-alt"></i>
                    <p className="location">{props.weatherData.name},{ props.weatherData.sys.country}</p>
                    <i className="fas fa-sync-alt" onClick={props.reloadButton}></i>
                </div>
                <div className="main-weather">
                    <p>{Math.trunc(props.weatherData.main.temp)}&deg;C</p>
                    <img className="weather-img" src={process.env.REACT_APP_ICON_URL+`/${props.weatherData.weather[0].icon}.png`} alt="Notfound"/>
                    <p>{props.weatherData.weather[0].description}</p>
                </div>
                <div className="flex">
                    <p className="details">Min Temp : {Math.trunc(props.weatherData.main.temp_min)}&deg;C</p>
                    <p className="details">Max Temp : {Math.trunc(props.weatherData.main.temp_max)}&deg;C</p>
                 </div>
                 <div className="flex">
                    <p className="details">Real fell : {Math.trunc(props.weatherData.main.feels_like)}&deg;C</p>
                    <p className="details">Pressure : {props.weatherData.main.pressure}mbar</p>
                </div>
                 <div className="flex">
                    <p className="details">Wind Speed : {props.weatherData.wind.speed} Km/h</p>
                    <p className="details">Humidity: {props.weatherData.main.humidity} %</p>
                </div>

                <div className="flex">
                    <p className="sunrise-sunset">Sunrise: {new Date(props.weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                    <p className="sunrise-sunset">Sunset: {new Date(props.weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                 </div>
            </div>
        </>
    );
}

export default Weather;