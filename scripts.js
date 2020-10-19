// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(event){

let takeOffButton = document.getElementById("takeoff");
takeOffButton.addEventListener("click", function(event){
    let shuttleConfirm = window.confirm("Confirm the shuttle is ready for takeoff.");
    if (shuttleConfirm){
    flightStatus.innerHTML = "Shuttle in flight.";
    shuttleBackground.style.backgroundColor = "blue";
    spaceShuttleHeight.innerHTML = "10,000";

}
});

let landButton = document.getElementById("landing");
landButton.addEventListener("click", function(event){
    window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
        rocket.style.marginTop = "10px";
    
});

let missionAbort = document.getElementById("missionAbort");
missionAbort.addEventListener("click", function(event){
    let missionAbortConfirm = window.confirm("Confirm that you want to abort the mission.");
    if (missionAbortConfirm){
        flightStatus.innerHTML = "Mission Aborted.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerHTML = "0";
        rocket.style.marginTop = "10px";
    }
});

let leftButton = document.getElementById("leftButton");
leftButton.addEventListener("click", function(event){
    rocket.style.marginLeft = "-10px";
});

let rightButton = document.getElementById("rightButton");
rightButton.addEventListener("click", function(event){
    rocket.style.marginLeft = "10px";
});

let upButton = document.getElementById("upButton");
upButton.addEventListener("click", function(event){
rocket.style.marginTop = "-10px";
spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
});

let downButton = document.getElementById("downButton");
downButton.addEventListener("click", function(event){
    rocket.style.marginTop = "10px";
    spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000;
});

});