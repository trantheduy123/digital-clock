window.addEventListener("load", calculateTime);
function calculateTime() {
  var date = new Date();
  var dayNumber = date.getDay();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var ampm = hour >= 12 ? "PM" : "AM";
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour ? 12 : "12";
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("day").innerHTML = dayNames[dayNumber];
  document.getElementById("hour").inertHTML = hour;
  document.getElementById("minute").inertHTML = minute;
  document.getElementById("ampm").inertHTML = ampm;

  setTimeout(calculateTime, 200);
}
