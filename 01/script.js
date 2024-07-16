const button = document.getElementById("search-weather")
let input = document.getElementById("city-name")

let county = document.getElementById("county-name")
let temp = document.getElementById("temp")
let Humidity = document.getElementById("Humidity")
let Cloud = document.getElementById("Cloud")

async function getdata(cityName) {
 const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8a34115891214380ab281115241305&q=${cityName}&aqi=yes`)
 return promise.json()

}

button.addEventListener('click', async ()=>{
    const value = input.value
    console.log(value)
    const result = await getdata(value)
    county.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    Humidity.innerText = `${result.current.humidity}`
    Cloud.innerText = `${result.current.cloud}`
    console.log(result)
})