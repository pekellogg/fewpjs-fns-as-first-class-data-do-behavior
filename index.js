document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

// twentyFourHourTime in HH:MM format
function greet(twentyFourHourTime) {
  let hour = parseInt(twentyFourHourTime.split(":")[0]);
  let result;
  if (hour < 12) {result = "Good Morning";} 
  else if (hour >= 12 && hour <= 17) {result = "Good Afternoon";}
  else if (hour > 17) {result = "Good Evening";}
  else {result = "Something went wrong!"}
  return result;
}

function displayMessage(stringArg) {
  document.getElementById("greeting").textContent = stringArg;
}