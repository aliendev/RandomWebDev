/*

Author: Michael Youngblood
Date: 2012/05/12
Class: SDI 1202
Project: Assignment3

*/

var isCameraConnected = function(fArg) {
	if (fArg === 'yes') {
		console.log('Camera is connected and ready to go!');
	} else {
		console.log('Camera is not connected. Please connect the camera now');
	};
};



var troubleshootCameras = function() {
	var yourCameraType = "MJPEG";
	var breathers = 3;
	var authParams = ['admin', 'fakePass'];

	var isSoftwareUpToDate = function (fOsVers, fSoftwarVers) {
		if (fOsVers === 'Win7 SP1' && fSoftwarVers === '1.0.9.30') {
			console.log('Software is up to date');
			return true;
		} else {
			console.log('Please update your software');
			return false;
		};
	};

	var isUserUsingCorrectAddress = function (fIPAddress, fPort) {
		var ipAddress = fIPAddress;
		var portNum = fPort;
		var urlForCamera = 'http://' + ipAddress + ':' + portNum;
		return urlForCamera;
	};


	var authenticateUser = function (fWaitTime, fAuth) {
		// I made this function a little smarter using else if's and nested conditionals
		for (i = fWaitTime; i < 0; i-=7) {
			console.log(i);
		};
		if (fAuth[0] === 'admin' && fAuth[1] === 'NULL') { 
			var authAnswer = ['Correct', 'Correct'];
			return authAnswer;
		} else {
			if (fAuth[0] === 'admin') {
				var authAnswer = ['Correct','Wrong'];
				return authAnswer;
			} else if (fAuth[1] === 'NULL') {
				var authAnswer = ['Wrong','Correct'];
				return authAnswer;
			} else {
				var authAnswer = ['Wrong','Wrong'];
				return authAnswer;				
			}
		};
	};

	isCameraConnected('yes');
	console.log( 'The user\'s software is up to date:  ' + isSoftwareUpToDate('Win7 SP1','1.0.9.30') );
	console.log( 'The user should be using this URL: ' + isUserUsingCorrectAddress('10.0.1.42','8020') );	
	var authed = authenticateUser( 42, authParams );
	console.log( 'Authenticate User:  ' + authParams[0] + ': ' + authed[0] + ' and ' + authParams[1] + ': ' + authed[1] + '.');
};
	


// Here is my math function, displaying the use of real math now
var buyCameraSystem = function(fBudget) {
	var wallet = fBudget;
	var cams = 0;
	var price = 99;
	while (wallet >= price) {
		cams+=1;
		wallet-=price;
	};
	//console.log to test answer
	//console.log(cams);
	return cams;
};


var setupCameras = function(fCams,fIPRange) {

	for (i = 0; i > fCams; i++) {
		var newCam = {
			id:   function(n) { var cname = 'cam' + n; return cname; }, 
			addr: function(n) { var ip = fIPRange + n; return ip; }, 
			http: function(n) { var p = 8060; p += n; return p; }, 
			user: 'admin', 
			pass: 'NULL'
		};	
		console.log(newCam.id(i));


	};



	return ipCams;
};

var testCameras = function(objectArg) {


};

var cheerForVideoSecurity = function() {
	// FTW = For the win
	console.log('woots, cheers, we are done! Video Security FTW!');
};


/* Global Variables */
var cameraBudget = 300;
var localIPRange = '10.0.1.';
var ipCams = {};

var main = function(){
	/* local variables */
	var numberOfCams = buyCameraSystem(cameraBudget);
	console.log('With the budget of ' + cameraBudget + ', you were able to buy ' + buyCameraSystem(cameraBudget) + ' IP cameras.');
	console.log(setupCameras(numberOfCams));
	testCameras();
	troubleshootCameras();
	cheerForVideoSecurity();
};


main();


