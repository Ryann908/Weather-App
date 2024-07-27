// import { get } from 'lodash';
import './style.css';

const main = document.getElementById('main');
const coverage = document.getElementById('coverage');
const hum = document.getElementById('humidity');
const cloud = document.getElementById('cloudcover');
const wind = document.getElementById('windspeed');

const label = document.getElementById('currents');
const input = document.querySelector('input');
input.value = 'Richmond,VA';
label.textContent = input.value;

async function getData(){
    input.addEventListener('keydown', async (e) =>{
        if (e.keyCode == 13){
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value},USA?key=YH7PQ66BR3UNSX7TBNXJEHGS2`);
            label.textContent = input.value;
            const data1 = await response.json();
            main.textContent = `Temp: ${data1.currentConditions.temp}°F`;
            coverage.textContent = `Coverage: ${data1.currentConditions.conditions}`;
            hum.textContent = `Coverage: ${data1.currentConditions.humidity}`;
            cloud.textContent = `Coverage: ${data1.currentConditions.cloudcover}`;
            wind.textContent = `Coverage: ${data1.currentConditions.windspeed}`;

            

            console.log(data1);

        }
    });
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input.value},USA?key=YH7PQ66BR3UNSX7TBNXJEHGS2`);
    const data1 = await response.json();
    console.log(data1);
    main.textContent = `Temp: ${data1.currentConditions.temp}°F`;
    coverage.textContent = `Coverage: ${data1.currentConditions.conditions}`;
    hum.textContent = `Humidity: ${data1.currentConditions.humidity}`;
    cloud.textContent = `Cloudcover: ${data1.currentConditions.cloudcover}`;
    wind.textContent = `Windspeed: ${data1.currentConditions.windspeed}`;



    
}

getData();













