function digitalClock() {
  var date = new Date();
  var hours = date.getHours() + "";
  var mins = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";
  var day = date.getDay();
  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (mins.length < 2) {
    mins = "0" + mins;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }
  var weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var clock = weekdays[day] + " " + hours + ":" + mins + ":" + seconds;

  document.getElementById("clock").innerHTML = clock;
}

digitalClock();
setInterval(digitalClock, 1000);

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function myChange() {
  var x = document.getElementById("myDIV");
  x.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function myFunction2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
