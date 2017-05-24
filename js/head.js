var APPID = "978505c286a16b4f4e85b22078187676";
var cityname = "ivano-frankivsk";

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

function fiveDaysProcessing(JsonObjArray) {
	console.log(JsonObjArray);

	/* for (var i = 0; i < 40; i++) {

	} */
}

function dataProcessing(jsonText, blockId) {
	var JsonObj = JSON.parse(jsonText);
	
	if (blockId == "fiveDays") {
		fiveDaysProcessing(JsonObj);
	} 
	else {
		var temperature = Math.round(JsonObj.main.temp - 273.15);
		var pressure = Math.round(JsonObj.main.pressure * 0.75006375541921);
		
		document.getElementById(blockId + "Selectedcity").innerHTML = JsonObj.name
		document.getElementById(blockId + "Temp").innerHTML = temperature;
		document.getElementById(blockId + "Cloudimg").setAttribute('src', 'http://openweathermap.org/img/w/' + JsonObj.weather[0].icon + '.png');
		document.getElementById(blockId + "Clouddescr").innerHTML = JsonObj.weather[0].description;
		document.getElementById(blockId + "Pressure").innerHTML = pressure;
		document.getElementById(blockId + "Humidity").innerHTML = JsonObj.main.humidity;
		document.getElementById(blockId + "Windspeed").innerHTML = JsonObj.wind.speed;	
	}
}


function request(city, weatherId, cityId) {
	var url = "http://api.openweathermap.org/data/2.5/" + weatherId + "?q=" + city + "&APPID=" + APPID;
	var xhr = getXHR();
	xhr.onreadystatechange = function () {	
		if (xhr.readyState == 4) {
		   	if (xhr.status == 200) {
				dataProcessing(xhr.responseText, cityId);
			}
			else
			{
				alert("На жаль, погоди для " + city + " на сайті немає" + xhr.status);
				return;
			}
		}
	}
	xhr.open('GET', url, true);
	xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
	request("kiev", "weather", "kiev");
	request(cityname, "weather", "today");
}, false);









