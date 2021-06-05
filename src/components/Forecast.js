import React from 'react';

const Forecast = (props)=>{
    const arr = props.foreCast.list;
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return(
        <>
            <div className="forecast">

                { arr.map((val,index)=>{
                    return(
                        <>
                            <div className="card" key={index}>
                                <div className="forecast-weather">
                                    <p>{Math.trunc(val.main.temp)}&deg;C</p>
                                    <img className="forecastweather-img" src={process.env.PUBLIC_URL+`/images/${val.weather[0].icon}.png`} alt="Notfound"/>
                                    <p>{val.weather[0].description}</p>
                                </div>
                                <div className="day-time">
                                    <p>{ days[new Date(val.dt * 1000).getDay()] }</p>
                                    <p>{new Date(val.dt * 1000).toLocaleTimeString('en-IN')}</p>
                                </div>
                            </div>
                        </>
                    );
                }) }

            </div>
        </>
    );
};

export default Forecast;