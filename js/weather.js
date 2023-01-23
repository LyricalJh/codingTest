const API_KEY = 'c8066bf9271818b773cd0e7f9d156722';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'

const GeoOk  = async (position) => {
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    console.log(url);

    const data = await (
        await fetch(url)).json();
        console.log(data);
        
    const weather = document.getElementById('weather');
    weather.innerText = data.main.temp;
    

    
}

const GeoError = () => {
    console.log("can not access to the data ")

}



navigator.geolocation.getCurrentPosition(GeoOk,GeoError);