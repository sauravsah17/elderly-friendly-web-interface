const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7b2babf32bmshcbbaad991635e50p1eeb90jsn4c75581c1b2e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function convertUnixTimestamp(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
}

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct').innerHTML = response.cloud_pct;
            document.getElementById('temp').innerHTML = response.temp;
            document.getElementById('temp_2').innerHTML = response.temp;
            document.getElementById('feels_like').innerHTML = response.feels_like;
            document.getElementById('humidity').innerHTML = response.humidity;
            document.getElementById('humidity_2').innerHTML = response.humidity;
            document.getElementById('min_temp').innerHTML = response.min_temp;
            document.getElementById('max_temp').innerHTML = response.max_temp;
            document.getElementById('wind_speed').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees').innerHTML = response.wind_degrees;
            document.getElementById('sunrise').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather1 = (city1) => {
    cityName1.innerHTML = city1
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city1, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct1').innerHTML = response.cloud_pct;
            document.getElementById('temp1').innerHTML = response.temp;
            document.getElementById('feels_like1').innerHTML = response.feels_like;
            document.getElementById('humidity1').innerHTML = response.humidity;
            document.getElementById('min_temp1').innerHTML = response.min_temp;
            document.getElementById('max_temp1').innerHTML = response.max_temp;
            document.getElementById('wind_speed1').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees1').innerHTML = response.wind_degrees;
            document.getElementById('sunrise1').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset1').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather2 = (city2) => {
    cityName2.innerHTML = city2
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city2, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct2').innerHTML = response.cloud_pct;
            document.getElementById('temp2').innerHTML = response.temp;
            document.getElementById('feels_like2').innerHTML = response.feels_like;
            document.getElementById('humidity2').innerHTML = response.humidity;
            document.getElementById('min_temp2').innerHTML = response.min_temp;
            document.getElementById('max_temp2').innerHTML = response.max_temp;
            document.getElementById('wind_speed2').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees2').innerHTML = response.wind_degrees;
            document.getElementById('sunrise2').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset2').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather3 = (city3) => {
    cityName3.innerHTML = city3
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city3, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct3').innerHTML = response.cloud_pct;
            document.getElementById('temp3').innerHTML = response.temp;
            document.getElementById('feels_like3').innerHTML = response.feels_like;
            document.getElementById('humidity3').innerHTML = response.humidity;
            document.getElementById('min_temp3').innerHTML = response.min_temp;
            document.getElementById('max_temp3').innerHTML = response.max_temp;
            document.getElementById('wind_speed3').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees3').innerHTML = response.wind_degrees;
            document.getElementById('sunrise3').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset3').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather4 = (city4) => {
    cityName4.innerHTML = city4
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city4, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct4').innerHTML = response.cloud_pct;
            document.getElementById('temp4').innerHTML = response.temp;
            document.getElementById('feels_like4').innerHTML = response.feels_like;
            document.getElementById('humidity4').innerHTML = response.humidity;
            document.getElementById('humidity4').innerHTML = response.humidity;
            document.getElementById('min_temp4').innerHTML = response.min_temp;
            document.getElementById('max_temp4').innerHTML = response.max_temp;
            document.getElementById('wind_speed4').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees4').innerHTML = response.wind_degrees;
            document.getElementById('sunrise4').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset4').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather5 = (city5) => {
    cityName5.innerHTML = city5
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city5, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct5').innerHTML = response.cloud_pct;
            document.getElementById('temp5').innerHTML = response.temp;
            document.getElementById('feels_like5').innerHTML = response.feels_like;
            document.getElementById('humidity5').innerHTML = response.humidity;
            document.getElementById('humidity5').innerHTML = response.humidity;
            document.getElementById('min_temp5').innerHTML = response.min_temp;
            document.getElementById('max_temp5').innerHTML = response.max_temp;
            document.getElementById('wind_speed5').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees5').innerHTML = response.wind_degrees;
            document.getElementById('sunrise5').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset5').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

const getWeather6 = (city6) => {
    cityName6.innerHTML = city6
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city6, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)

            document.getElementById('cloud_pct6').innerHTML = response.cloud_pct;
            document.getElementById('temp6').innerHTML = response.temp;
            document.getElementById('feels_like6').innerHTML = response.feels_like;
            document.getElementById('humidity6').innerHTML = response.humidity;
            document.getElementById('humidity6').innerHTML = response.humidity;
            document.getElementById('min_temp6').innerHTML = response.min_temp;
            document.getElementById('max_temp6').innerHTML = response.max_temp;
            document.getElementById('wind_speed6').innerHTML = response.wind_speed;
            document.getElementById('wind_degrees6').innerHTML = response.wind_degrees;
            document.getElementById('sunrise6').innerHTML = convertUnixTimestamp(response.sunrise);
            document.getElementById('sunset6').innerHTML = convertUnixTimestamp(response.sunset);
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
    getWeather1(city1.value)
    getWeather2(city2.value)
    getWeather3(city3.value)
    getWeather4(city4.value)
    getWeather5(city5.value)
    getWeather6(city6.value)
})

getWeather("Delhi");
getWeather1("Kathmandu");
getWeather2("Delhi");
getWeather3("Beijing");
getWeather4("London");
getWeather5("Tokyo");
getWeather6("Canberra");