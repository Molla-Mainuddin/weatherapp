(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(6),s=a.n(c),r=(a(11),a(3)),i=a.n(r),o=a(5),j=a(2),l=a(0),d=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"main",children:[Object(l.jsxs)("div",{className:"main-header",children:[Object(l.jsx)("i",{className:"fas fa-map-marker-alt"}),Object(l.jsxs)("p",{className:"location",children:[e.weatherData.name,",",e.weatherData.sys.country]}),Object(l.jsx)("i",{className:"fas fa-sync-alt",onClick:e.reloadButton})]}),Object(l.jsxs)("div",{className:"main-weather",children:[Object(l.jsxs)("p",{children:[Math.trunc(e.weatherData.main.temp),"\xb0C"]}),Object(l.jsx)("img",{className:"weather-img",src:"https://openweathermap.org/img/w"+"/".concat(e.weatherData.weather[0].icon,".png"),alt:"Notfound"}),Object(l.jsx)("p",{children:e.weatherData.weather[0].description})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsxs)("p",{className:"details",children:["Min Temp : ",Math.trunc(e.weatherData.main.temp_min),"\xb0C"]}),Object(l.jsxs)("p",{className:"details",children:["Max Temp : ",Math.trunc(e.weatherData.main.temp_max),"\xb0C"]})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsxs)("p",{className:"details",children:["Real fell : ",Math.trunc(e.weatherData.main.feels_like),"\xb0C"]}),Object(l.jsxs)("p",{className:"details",children:["Pressure : ",e.weatherData.main.pressure,"mbar"]})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsxs)("p",{className:"details",children:["Wind Speed : ",e.weatherData.wind.speed," Km/h"]}),Object(l.jsxs)("p",{className:"details",children:["Humidity: ",e.weatherData.main.humidity," %"]})]}),Object(l.jsxs)("div",{className:"flex",children:[Object(l.jsxs)("p",{className:"sunrise-sunset",children:["Sunrise: ",new Date(1e3*e.weatherData.sys.sunrise).toLocaleTimeString("en-IN")]}),Object(l.jsxs)("p",{className:"sunrise-sunset",children:["Sunset: ",new Date(1e3*e.weatherData.sys.sunset).toLocaleTimeString("en-IN")]})]})]})})},h=function(e){var t=e.foreCast.list,a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"forecast",children:t.map((function(e,t){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsxs)("div",{className:"forecast-weather",children:[Object(l.jsxs)("p",{children:[Math.trunc(e.main.temp),"\xb0C"]}),Object(l.jsx)("img",{className:"forecastweather-img",src:"https://openweathermap.org/img/w"+"/".concat(e.weather[0].icon,".png"),alt:"Notfound"}),Object(l.jsx)("p",{children:e.weather[0].description})]}),Object(l.jsxs)("div",{className:"day-time",children:[Object(l.jsx)("p",{children:a[new Date(1e3*e.dt).getDay()]}),Object(l.jsx)("p",{children:new Date(1e3*e.dt).toLocaleTimeString("en-IN")})]})]},t)})}))})})},u=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"navbar",children:Object(l.jsxs)("div",{className:"nav-item",children:[Object(l.jsx)("h1",{className:"logo",children:"Weather App"}),Object(l.jsxs)("div",{className:"from-item",children:[Object(l.jsx)("input",{type:"text",placeholder:"Enter City Name",className:"input-field",value:e.inputVaue,onChange:e.searchfunc}),Object(l.jsx)("button",{className:"search-button",onClick:e.buttonFunc,children:"Search"})]})]})})})},m=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"footer-content",children:[Object(l.jsx)("h6",{className:"text",children:"\xa9 Copyright 2021, Designed by Molla Mainuddin"}),Object(l.jsx)("a",{href:"https://github.com/Molla-Mainuddin",children:Object(l.jsx)("i",{className:"fab fa-github"})}),Object(l.jsx)("a",{href:"https://linkedin.com/in/molla-mainuddin",children:Object(l.jsx)("i",{className:"fab fa-linkedin"})})]})})})},b=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("p",{children:"Loading..."})})})},p=function(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"date-time",children:Object(l.jsx)("h2",{className:"date",children:e.currentDate})})})},f=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"not-found",children:[Object(l.jsx)("i",{className:"far fa-frown"}),Object(l.jsx)("p",{children:"Sorry, City Not Found"})]})})},x=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),x=r[0],O=r[1],w=Object(n.useState)([]),N=Object(j.a)(w,2),g=N[0],y=N[1],v=Object(n.useState)([]),D=Object(j.a)(v,2),S=D[0],F=D[1],M=Object(n.useState)(""),C=Object(j.a)(M,2),k=C[0],T=C[1],A=Object(n.useState)([]),I=Object(j.a)(A,2),J=I[0],E=I[1],L=function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),O(e.coords.longitude)})),e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather/?lat=").concat(a,"&lon=").concat(x,"&units=metric&APPID=").concat("e96ba17118f35418c34868b720af05e7")).then((function(e){return e.json()})).then((function(e){y(e)}));case 3:return e.next=5,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast?lat=").concat(a,"&lon=").concat(x,"&units=metric&appid=").concat("e96ba17118f35418c34868b720af05e7")).then((function(e){return e.json()})).then((function(e){F(e),console.log(e)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){L(),function(){var e=new Date,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";var a=new Array;a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December";var n=e.getDate(),c=t[e.getDay()]+" "+n+" "+a[e.getMonth()];T(c)}()}),[a,x,J]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"body",children:[Object(l.jsx)(u,{searchfunc:function(e){E(e.target.value)},inputValue:J,buttonFunc:function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""==J){e.next=7;break}return e.next=3,fetch("".concat("https://api.openweathermap.org/data/2.5","/weather?q=").concat(J,"&units=metric&appid=").concat("e96ba17118f35418c34868b720af05e7")).then((function(e){return e.json()})).then((function(e){y(e)}));case 3:return e.next=5,fetch("".concat("https://api.openweathermap.org/data/2.5","/forecast?q=").concat(J,"&units=metric&appid=").concat("e96ba17118f35418c34868b720af05e7")).then((function(e){return e.json()})).then((function(e){F(e)}));case 5:e.next=8;break;case 7:alert("Enter Valid City Name");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}}),Object(l.jsx)(p,{currentDate:k}),Object(l.jsx)("div",{className:"app",children:"city not found"===g.message?Object(l.jsx)(f,{}):"undefined"!==typeof g.main&&"undefined"!==typeof S.list?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{weatherData:g,reloadButton:function(){window.location.reload()}}),Object(l.jsx)(h,{foreCast:S})]}):Object(l.jsx)(b,{})})]}),Object(l.jsx)(m,{})]})};s.a.render(Object(l.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d4f198f3.chunk.js.map