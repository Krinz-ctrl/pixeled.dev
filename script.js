function openWindow(id){
  document.getElementById(id).style.display = "block";
}

function closeWindow(id){
  document.getElementById(id).style.display = "none";
}
function updateClock(){
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // add leading zero
  if(minutes < 10) minutes = "0" + minutes;
  if(seconds < 10) seconds = "0" + seconds;

  const timeString = hours + ":" + minutes + ":" + seconds;

  document.getElementById("clock").textContent = timeString;
}

// update every second
setInterval(updateClock,1000);
updateClock();

