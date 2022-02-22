
let currentDay = new Date();    // creating a date object
let h = document.getElementById("hour");  // hour id
let m = document.getElementById("minute"); // minute id
let s = document.getElementById("second"); // second id
let interval; // interval to count seconds;
let interval2;  // interval to count minutes;
let seconds = 0;
let abbrev = document.getElementById("timeday");  // A.M or P.M
h.innerHTML = currentDay.getHours();  // the hours displayed
m.innerHTML = currentDay.getMinutes();  // the minutes displayed
let minutes = currentDay.getMinutes();
let hours = currentDay.getHours();
let realHour = currentDay.getHours() - 12;

function increaseTime() { // Function to calculate time
  seconds++;
  if(seconds > 9) {
    s.innerHTML = seconds;
  }
  if(seconds <= 9) {
    s.innerHTML = "0" + seconds;
  }
  if(seconds === 60) {
    seconds = 0;
    s.innerHTML = "0" + seconds;
    minutes++;
  }
  if(minutes > 9) {
    m.innerHTML = minutes;
  }
  if(minutes <= 9) {
    m.innerHTML = "0" + minutes;
  }
  if(minutes === 60) {
    m.innerHTML = "0" + minutes;
  }
  if(h.innerHTML >= 12) {
      if(h.innerHTML >= 20) {
        h.innerHTML = realHour;
      }
    h.innerHTML = "0" + realHour;
    abbrev.innerHTML = "PM";
  }
  if(currentDay.getHours < 12) {
    h.innerHTML = hours;
    abbrev.innerHTML = "AM";
  }
}

interval = setInterval(increaseTime, 1000);
