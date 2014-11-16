function redirectTransmission () {
	var transmissionIP = document.getElementById('ipn');
	var transmissionPort = document.getElementById('portn');

	var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
	var portnumber = "9091";

	if (transmissionIP.value.match(ipformat)) {
		ipnumber = transmissionIP.value;
	}
	else {
		alert("You have entered an invalid IP address!\nRight format: 255.255.255.255\nValid IP example: 192.168.0.1");
		return false;
	}
	if (transmissionPort.value) {
		if (transmissionPort.value >= 1 && transmissionPort.value <= 65535) {
		portnumber = transmissionPort.value;
		}
		else {
			alert("You have entered an invalid Port!\nRange of Port: 1 - 65535\nValid Port example: 8081");
			return false;
		}
	}
	var urlFinale = "http://" + ipnumber + ":" + portnumber;

	console.log(urlFinale); //Just for debugging purposes

	window.location.href = urlFinale;
}