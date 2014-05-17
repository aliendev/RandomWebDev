/*

Author: Michael Youngblood
Date: 2012/05/07
Class: SDI 1202
Project: Assignment2

*/

var yourCameraType = "MJPEG";
var breathers = 3;
var authParams = ['fakeUser', 'fakePass'];


var isCameraConnected = function(fArg) {
	if (fArg === 'yes') {
		console.log('Camera is connected and ready to go!');
	} else {
		console.log('Camera is not connected. Please connect the camera now');
	};
};


var isSoftwareUpToDate = function (fOsVers, fSoftwarVers) {
	if (fOsVers === 'Win7 SP1' && fSoftwarVers === '1.0.9.30') {
		console.log('Software is up to date');
		return true;
	} else {
		console.log('Please update your software');
		return false;
		
	};
};

var stayCalm = function (numArg) {
	var message = 'Assure the customer you don\'t think they are stupid. Breath, relax, what\'s next?';
	i = numArg;
	while (i > 0) {
		console.log(message);
		i--;
	};
	return 42;
};

var isUserUsingCorrectAddress = function (fIPAddress, fPort) {
	var ipAddress = fIPAddress;
	var portNum = fPort;
	var urlForCamera = 'http://' + ipAddress + ':' + portNum;
	return urlForCamera;
};


var authenticateUser = function (waitTime, auth) {
	for (i = waitTime; i < 0; i-=7) {
		console.log(i);
	};
	if (auth[0] === 'fakeUser' && auth[1] === 'fakePass') { 
		var authAnswer = ['Correct', 'Correct'];
		return authAnswer;
	}
};



var main = function() {
	isCameraConnected('yes');
	console.log( 'The user\'s software is up to date:  ' + isSoftwareUpToDate('Win7 SP1','1.0.9.30') );

	console.log( 'Throw some humor in there and remember they are the reason you have a job. Oh! The answer to life is: ' + stayCalm(breathers) );

	console.log( 'The user should be using this URL: ' + isUserUsingCorrectAddress('10.0.1.42','8020') );	
	
	var authed = authenticateUser( 42, authParams );
	console.log( 'Authenticate User:  ' + authParams[0] + ': ' + authed[0] + ' and ' + authParams[1] + ': ' + authed[1] + '.');

	console.log('By this time you should have a picture and can close your call.');
	console.log('If the customer is in a good mood, be sure to take a stab at an upsell.');
	console.log('Fin!');
};


main();


/* alert("JavaScript works!"); */