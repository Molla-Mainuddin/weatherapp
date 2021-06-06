import React, { useEffect, useState } from 'react';
import Weather from './components/Weather';
import Forecast from './components/Forecast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Datetime from './components/Datetime';
import DataNotfound from './components/DataNotfound';
import Connection from './components/Connection';

const App = ()=> {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [forecastData,setforecastData] = useState([]);
  const [date,setDate] = useState("");
  const [city,setCity] = useState([]);

  const refresh = ()=>{
     window.location.reload();
  };

  const searchData = (e)=>{
      setCity(e.target.value);
  };

  const buttonClicked = ()=>{
    const fetchCityData = async ()=>{
      if(city!=""){
          await fetch(`${process.env.REACT_APP_API_URL}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then((res)=> res.json())
          .then((result3)=>{
            setData(result3);
          }); 

          await fetch(`${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
          .then((res)=> res.json())
          .then((result4)=>{
              setforecastData(result4);
          });  
      }else{
          alert("Enter Valid City Name");
      }
    };
    fetchCityData();
  };

 
  const DataTime = ()=>{
      let date = new Date();
      let weekday = new Array(7);
      weekday[0] = "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

      var month = new Array();
      month[0] = "January";
      month[1] = "February";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";
      let todaydate = date.getDate();
      let today = weekday[date.getDay()]+" "+todaydate+" "+month[date.getMonth()];
      setDate(today);
  };
  
  const fetchcurrentlocationData = async () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    .then((res)=> res.json())
    .then((result1)=>{
      setData(result1);
    });

    await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
    .then((res)=> res.json())
    .then((result2)=>{
      setforecastData(result2);
      console.log(result2);
    });
  };

  useEffect(() => {
    fetchcurrentlocationData();
    DataTime();
  },[lat,long,city]);



  if(!navigator.onLine){
    return <Connection />;
  }


  return (
      <>
         <Navbar searchfunc={searchData} inputValue={city} buttonFunc={buttonClicked}/>

          <div className="body">
            <Datetime currentDate={date} />
            <div className="app">

                { (data.message === "city not found") ? <DataNotfound /> : (typeof data.main !== 'undefined' && typeof forecastData.list!=='undefined') ?  (
                      <>
                        <Weather weatherData={data} reloadButton={refresh}/>
                        <Forecast foreCast={forecastData}/>
                      </>
                    ) : (

                      <Loading />
                    )}  
            </div>
          </div>
             
         <Footer /> 
      </>
  );
}

export default App;
