
let div1=document.createElement('div');
div1.setAttribute('class','p-4 bg-primary text-center text-bg-dark border border-dark justify-content-center');
div1.innerText="Restcountries and Weather Using Fetch API";


let div2=document.createElement('div');
div2.setAttribute('class','container p-5 mt-4 rounded-2 bg-light text-center text-bg-dark border border-dark justify-content-center');
div2.setAttribute('style','width:40rem');

let div3=document.createElement('div');
div3.setAttribute('class','search-wrapper d-inline');

let input1=document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('id','country-input');
input1.setAttribute('class','p-2 m-2 border none outline none border-bottom 2px solid blue rounded-3');
input1.setAttribute('style','width:275px');
input1.setAttribute('placeholder','Enter the country name (example:china)');
div3.appendChild(input1);

let button1=document.createElement('button');
button1.setAttribute('id','search-btn');
button1.setAttribute('class','p-2 m-2 bg-primary text-center text-bg-dark  rounded-4 border primary');
button1.setAttribute('style','width:100px')
button1.innerText='Search'
div3.appendChild(button1);
div2.appendChild(div3);

let div4=document.createElement('div');
div4.setAttribute('id','result');
div4.setAttribute('class','flag-img bg-light text-dark');
div2.appendChild(div4);

let div5=document.createElement('div');
div5.setAttribute('id','main');
div5.setAttribute('class','bg-light text-dark');
let button2=document.createElement('button');
button2.setAttribute('id','weather-btn');
button2.setAttribute('class','p-2 m-2 bg-primary text-center text-bg-dark  rounded-4 border primary');
button2.setAttribute('style','width:200px')
button2.innerText='Check Weather Here'
div5.appendChild(button2);

let div6=document.createElement('div');
div6.setAttribute('id','weatherInfo');
div6.setAttribute('class','bg-light text-dark');

div5.appendChild(div6);
div2.appendChild(div5);

div1.appendChild(div2);
document.body.appendChild(div1);


let searchBtn=document.getElementById("search-btn");
let countryInput=document.getElementById("country-input");
console.log(countryInput.value);

searchBtn.addEventListener("click",() =>{
    let countryName=countryInput.value;
    let finalURL=`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    
    fetch(finalURL)
        .then((response) =>response.json())
        .then((data)=>{
            console.log(data[0]);
            console.log(data[0].name.common);
            console.log(data[0].flags.png);

            console.log(data[0].capital[0]);
            console.log(data[0].region);
            console.log(data[0].car.signs[0]);

            result.innerHTML=`
                <h2 class="m-3 text-center bg-light text-dark">${data[0].name.common}</h2>
                <img src="${data[0].flags.png}">
                <div>
                    <h5 class="m-3">Capital:<span>${data[0].capital[0]}</span></h5>
                </div>
                <div class="data-wrapper">
                    <h5 class="m-3">Region:<span>${data[0].region}</span></h5>
                </div>
                <div class="m-3">
                    <h5 class="m-3">Country Code:<span>${data[0].car.signs[0]}</span></h5>
                </div>
           `;
     });
});
console.log(countryInput.value);

const apiKey='38b051fcb3dc9f29dd478eb0985483b3';
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let weatherBtn=document.getElementById("weather-btn");
weatherBtn.addEventListener("click",() =>checkWeather())

async function checkWeather(){
    var cityName=countryInput.value;
    console.log(cityName);
    const response=await fetch(apiUrl + `${cityName}&appid=${apiKey}`);
    var data1=await response.json();
    console.log(data1)
        weatherInfo.innerHTML=`
                
                <div>
                <div>
                <h5 class="m-3">Weather:<span> ${data1.weather[0].description}</span></h2>
                </div>
                <h5 class="m-3">Temp:<span> ${data1.main.temp}°C</span></h2>
                </div>
                <div>
                <h5 class="m-3">Humidity:<span> ${data1.main.humidity}%</span></h2>
                </div>
                <div>
                <h5 class="m-3">Wind:<span> ${data1.wind.speed} Km/hr </span></h2>
                
                </div>`;
}
