// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(event){

let takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener("click", function(event){
    let shuttleConfirm = window.confirm("Confirm the shuttle is ready for takeoff.");
    if (shuttleConfirm){
    flightStatus.innerHTML = "Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    spaceShuttleHeight.innerHTML =Number(spaceShuttleHeight.innerHTML) + 10000;

}
});

let landButton = document.getElementById("landing");
landButton.addEventListener("click", function(event){
    window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    
});

let missionAbort = document.getElementById("missionAbort");
missionAbort.addEventListener("click", function(event){
    let missionAbortConfirm = window.confirm("Confirm that you want to abort the mission.");
    if (missionAbortConfirm){
        flightStatus.innerHTML = "Mission Aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
    }
});

let rocketImage = document.getElementById("rocket");
rocketImage.style.position = "relative";
rocketImage.style.top = "20px";
rocketImage.style.left = "20px";
rocketImage.style.visibility="visible";
let vertPosString = rocketImage.style.top;
let vertPos = Number(vertPosString.split("px")[0]);
let horizonPosString = rocketImage.style.left;
let horizPos = Number(horizonPosString.split("px")[0]);


let leftButton = document.getElementById("leftButton");
leftButton.addEventListener("click", function(event){
    // rocket.style.marginLeft = "-10px";
    if  (horizPos > -160) horizPos -= 10;
        rocketImage.style.left = `${horizPos}px`;
});

let rightButton = document.getElementById("rightButton");
rightButton.addEventListener("click", function(event){
    // rocket.style.marginLeft = "10px";
    if (horizPos < 160) horizPos +=10;
    rocketImage.style.left = `${horizPos}px`;

});

let upButton = document.getElementById("upButton");
upButton.addEventListener("click", function(event){
// rocket.style.marginTop = "-10px";
if (vertPos > -10) vertPos -=10;
rocketImage.style.top = `${vertPos}px`;
spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;

});

let downButton = document.getElementById("downButton");
downButton.addEventListener("click", function(event){
    if (vertPos < 250) vertPos +=10;
    rocketImage.style.top = `${vertPos}px`;
    // rocket.style.marginTop = "10px";
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;
});

});