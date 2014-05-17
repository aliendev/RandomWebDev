/*

author and info block

create a predefined snippet code for this. make it for js/python/html/php/sql. try to make it auto 
    add the date. and maybe a place for a link to github for revision checking. :) 

*/


var connections            = true,       // true: connected to net and power. false: not connected.
    yourSoftwareVersion    = 1.3432,     // Your CameraClient version number.
    currentSoftwareVersion = 2.6424,     // Your CameraClient version number.
    camType                = "MJPEG",    // does your camera use MJPEG or H264 video compression.
    camTypeMessage         = "Your camera\'s video compression is type: " + camType
;


if ( connections === true ) { 
    console.log( "Connections: " + connections );
    console.log( "Connections are live, good job!" );

    if ( yourSoftwareVersion === currentSoftwareVersion ) { 
    	console.log( "Your CameraClient software is on version: " + yourSoftwareVersion );
        console.log( "Your software is up to date. Good Job!!!" );

        if ( camType === "MJPEG" ) { 
        	console.log( camTypeMessage );
            console.log( "Please verify and fix the setting for: IP Address" );
            console.log( "Please verify and fix the setting for: port (Should be set to your HTTP Port)" );
            console.log( "Please verify and fix the setting for: user password" );
            console.log( "Please verify and fix the setting for: password" );

        } else if ( camType === "H264" ) {
        	console.log( camTypeMessage );
            console.log( "Please verify and fix the setting for: IP Address" );
            console.log( "Please verify and fix the setting for: port (Should be set to your Media Port)" );
            console.log( "Please verify and fix the setting for: user password" );
            console.log( "Please verify and fix the setting for: password" );

        } else {
            console.log( "Your camera is not supported by this software" );

        };
    } else {
        console.log( "Your software is out of date. The software is " +
        			 (currentSoftwareVersion - yourSoftwareVersion) + " versions different. Please update now.");

    };
} else {
    console.log( "Please plug-in the camera and make sure it is connected to the network" );
    
};



alert("JavaScript works!");