const start = document.getElementById("start")
const Restart = document.getElementById("Restart")
const Stop = document.getElementById("Stop")
const time = document.getElementById("stop-watch")

  let timerInterval;
        let startTime;
        let elapsedTime = 0;

function start(){
    if(!timerInterval){
   const startTme = Date.now() - elapsedTime
   timerInterval = setInterval(updateStopwatch, 1000);
   time.innerText = timerInterval
}
}

