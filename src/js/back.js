export const API_KEY = 'c8066bf9271818b773cd0e7f9d156722';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'




const GeoOk  = async (position) => {
    const lat =position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    console.log(url);
    

    const weatherUrl = `http://api.openweathermap.org/geo/1.0/direct?q=Seoul&limit=5&appid=${API_KEY}`

    
    const data = await (
        await fetch(url)).json();
        console.log(data.main.temp);
        
        const weatherIcon = data.weather[0].icon;
        const weatherTemp = `${data.main.temp}'C`;
        const cityName = `000님 현재 위치는  ${data.name} 입니다.`
        const TodoList = document.getElementById('TodoList');
        
        const getweatherIcon =  `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
                

        const promise = new Promise((resolve, reject) => {
            resolve(fetch(url));
        })


        promise.then(response => response.json()).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log("net work suck..")
        })

       


    

        const img = document.createElement('img');
        img.src = getweatherIcon;
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        span.innerText = weatherTemp ;
        TodoList.appendChild(img);
        TodoList.appendChild(span);
        TodoList.appendChild(span2);

        // const fetchAPI  = async () => {
        //     const data = await (
        //        await fetch(weatherUrl)
        //     ).json();
        //     console.log(data);
        //     span2.innerText = data[0].name;
        // }

        // fetchAPI();
    
    
    
        

            
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].icon;
    const city = document.getElementById('city');
    city.innerText = cityName;
    
    
    
}

const GeoError = () => {
    console.log("can not access to the data ")

}



navigator.geolocation.getCurrentPosition(GeoOk,GeoError);