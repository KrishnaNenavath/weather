
const username = document.getElementById("user-input")
const button = document.getElementById("button")
const uname = document.getElementById("user")



button.addEventListener('click', () =>{
    const value = username.value
    localStorage.setItem('name', value)
    location.reload()
})
window.addEventListener('load', ()=>{
    const name = localStorage.getItem('name');
    console.log("name", name)
    uname.innerText = name
})