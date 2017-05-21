


/* var selectedcity = document.getElementById('selectedcity');
var clouddescr = document.getElementById('clouddescr');
var cloudimg = document.getElementById('cloudimg');
var temp = document.getElementById('temp');
var pressure = document.getElementById('pressure');
var humidity = document.getElementById('humidity');
var windspeed = document.getElementById('windspeed'); */

var send = document.getElementById('send');
send.addEventListener('click', function() {
	cityname = document.getElementById('cityname').value;
	if (cityname == "") {alert("Введіть назву міста"); return;};
	url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityname + '&APPID=' + APPID;
	var xhr = getXHR();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
		   	if (xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				selectedcity.innerHTML = data.name;
				clouddescr.innerHTML = data.weather[0].description;
				cloudimg.setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'); 
				temp.innerHTML = Math.round(data.main.temp - 273.15);
				pressure.innerHTML = Math.round(data.main.pressure * 0.75006375541921);
				humidity.innerHTML = data.main.humidity;
				windspeed.innerHTML = data.wind.speed;

			}
			else
			{
				alert("На жаль, погоди для " + cityname + " на сайті немає");
				return;
			}
		}
	}
	xhr.open('GET', url, true);
	xhr.send();
	
}, false);
