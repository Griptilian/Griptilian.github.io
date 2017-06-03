var APPID = "978505c286a16b4f4e85b22078187676";
	
function request(city, bufferId) {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APPID;
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		
		if (xhr.readyState == 4) {
		   	if (xhr.status == 200) {
				var data = JSON.parse(xhr.responseText);
				document.getElementById(bufferId).innerHTML = xhr.responseText;
			}
			else
			{
				alert("На жаль, погоди для " + city + " на сайті немає");
				return;
			}
		}
	}
	xhr.open('GET', url, true);
/* 	console.log(xhr);
	console.log(window.location.protocol); */
	xhr.send();
}

var send = document.getElementById("send");
send.addEventListener("click", function() {
	var cityname = document.getElementById('cityname').value;
	request(cityname, "bufferToday");	
}, false);














