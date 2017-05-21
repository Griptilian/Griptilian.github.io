function getXHR() {
    var xhrobj;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xhrobj = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xhrobj = new ActiveXObject('Microsoft.XMLHTTP');
    }
    return xhrobj;
}

var APPID = "6dd5d55e84742b720ad18912a82e4c96";

var cityname;
var url;

var jsonToday = {};

document.addEventListener("DOMContentLoaded", function() {
	var cityname = "Kiev";
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&APPID=" + APPID;
	var xhr = getXHR();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4){
			if (xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				document.getElementById('kiev_clouddescr').innerHTML = data.weather[0].description;
				document.getElementById('kiev_cloudimg').setAttribute('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'); 
				document.getElementById('kiev_temp').innerHTML = Math.round(data.main.temp - 273.15);
				document.getElementById('kiev_pressure').innerHTML = Math.round(data.main.pressure * 0.75006375541921);
				document.getElementById('kiev_humidity').innerHTML = data.main.humidity;
				document.getElementById('kiev_windspeed').innerHTML = data.wind.speed;
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