const button = document.getElementById("location")
let county = document.getElementById("county-name")
let temp = document.getElementById("temp")
let Humidity = document.getElementById("Humidity")
let Cloud = document.getElementById("Cloud")

async function getlocation(position){
    console.log(position)
    const result = await getdata(position.coords.latitude, position.coords.longitude)
    console.log("results",result)
    county.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    Humidity.innerText = `${result.current.humidity}`
    Cloud.innerText = `${result.current.cloud}`


}
function faildgetlocation(){
    console.log("somthing went wrong!")
}

async function getdata(lat, log) {
 const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=8a34115891214380ab281115241305&q=${lat},${log}&aqi=yes`)
 return promise.json()

}

button.addEventListener('click', async ()=>{
const location = await navigator.geolocation.getCurrentPosition(getlocation,faildgetlocation)

})