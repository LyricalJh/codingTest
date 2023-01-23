

const person = {
    id: 'wndgks49',
    name: 'sojunghan',
    age: 31,
    canSpeak(name){
        console.log(`hello my name is ${name}`)
    },
    birthDay: Date.now()
}

console.log(person);



const sendBacktoClient = JSON.parse(sendToBackend, sendToBackend.birthDay);

console.log(typeof(sendBacktoClient.birthDay) );


const BASE_URL = 'https://api.coinpaprika.com/v1';

s

const LoginName = document.getElementById('inputValue');
const Username = LoginName.innerText;


const fetchAPI = async(url, Username) => {
   const CoinData = await (
    await fetch("https://shopping.naver.com/luxury/home", {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({Username})
    })).json()
   console.log(CoinData);
}

 const data = fetchAPI(BASE_URL,Username );

 console.log(data);

