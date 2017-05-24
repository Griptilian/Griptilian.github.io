var send = document.getElementById("send");
var today = document.getElementById("today");
var fiveDays = document.getElementById("five_days");
var map = document.getElementById("map");
var weatherToday = document.getElementById("weatherToday");
var weatherFiveDays = document.getElementById("weatherFiveDays");
var weatherMap = document.getElementById("weatherMap");

send.addEventListener("click", function() {
	cityname = document.getElementById("cityname").value;
	document.getElementById("cityname").value = " ";
	request(cityname, "weather", "today");
}, false);

today.addEventListener("click", function() {
	today.style.background = "#FFCA86";
	fiveDays.style.background = "#0095B6";
	map.style.background = "#0095B6";
	weatherToday.style.display = "block";
	weatherFiveDays.style.display = "none";
	weatherMap.style.display = "none";
	request(cityname, "weather", "today");
}, false);

fiveDays.addEventListener("click", function() {
	today.style.background = "#0095B6";
	fiveDays.style.background = "#FFCA86";
	map.style.background = "#0095B6";
	weatherToday.style.display = "none";
	weatherFiveDays.style.display = "block";
	weatherMap.style.display = "none";
	request(cityname, "forecast", "fiveDays");
}, false);

map.addEventListener("click", function() {
	today.style.background = "#0095B6";
	fiveDays.style.background = "#0095B6";
	map.style.background = "#FFCA86";
	weatherToday.style.display = "none";
	weatherFiveDays.style.display = "none";
	weatherMap.style.display = "block";
}, false);