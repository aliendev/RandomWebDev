var yb = {
	// Strings

	strVarifyIfPhoneNumber: function (str) {
		// Does a string follow a 123-456-7890 pattern like a phone number?
		// regex cheat sheet: http://www.regular-expressions.info/reference.html
		var reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return reg.test(str); // returning boolean, missing in project 3
	},

	strVarifyIfEmail: function (str) {
		// Does a string follow an aaa@bbb.ccc pattern like an email address?
		// got regex expression from 
		// http://ntt.cc/2008/05/10/over-10-useful-javascript-regular-expression-functions-to-improve-your-web-applications-efficiency.html
		var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return reg.test(str); // returning boolean, missing in project 3
	},

	strVarifyIfURL: function (str) {
		// Is the string a URL? (Does it start with http: or https:?)
		// I only used http or https :// on this one. if you add the domain check or tld check it will 
		// return false on IP addreses. Personally I use a lot of them, so It is important for myself to keep it open 
		var reg = /^(https?):\/\/.*$/;
		return reg.test(str); // returning boolean, missing in project 3
	},

	strTitleCase: function (str) {
		// Title-case a string (split into words, then uppercase the first letter of each word)
		// this one was fun. So this returns the string and passes it threw the function at the same time. 
		// the first return is whree the words are split
		// The second return is the key part, it takes the first character (char 0) and puts it in upper 
		// case, and the rest of the word in lower case 
		return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	},

	strCsvChangeDelimiter: function (str,oldDelimiter,newDelimiter) {
		/*
		Given a string that is a list of things separated by a given string, as well 
		as another string separator, return a string with the first separator changed to
		the second: "a,b,c" + "," + "/" → "a/b/c".
		*/
		return str.replace(/oldDelimiter/g, newDelimiter);
	},

	// Numbers

	numDecimalPlaces: function (num,decPlaces) {
		// Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
		// take number, format it to decimal places
		// I have had to use this on several occasions. This is good to have in a library. 
		return num.toFixed(decPlaces);
	},

	numFuzzyMatch: function (num1, num2, percentage) {
		// Fuzzy-match a number: is the number above or below a number within a certain percent?
		// is the number1 above or below number2 within percentage

		return num1;
	},

	numDatesDiff: function (d1, d2, modifier) {
		// Find the number of hours or days difference between two dates.
		//diff between two dates in minutes, 
		var milliseconds = 1000;

		// new is pretty important here. without it, it returns todays date. getTime also makes it into a number 
		// that we can work with. We are dealing with miliseconds which is the reason we went so small in the above var. 
		var date1 = new Date(d1).getTime();
		var date2 = new Date(d2).getTime();

		// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Math
		// Returns absolute value
		var difference 	= Math.round(Math.abs(date1 - date2) / milliseconds);
		var minutes 	= Math.round(difference / 60);
		var hours 		= Math.round(minutes / 60);
		var days 		= Math.round(hours / 24);

		//console.log("difference: " + difference);
		//console.log("minutes: " + minutes);
		//console.log("hours: " + hours);
		//console.log("days: " + days);

		if (modifier === 'm') {
			return minutes;
		} else if (modifier === 'h') {
			return hours;
		} else if (modifier === 'd') {
			return days;
		} else {
			console.log("Please identify a modifier of either m, h, or d");
		};	
	},


	numStringToNumber: function (str) {
		/* 
		Given a string version of a number such as "42", return the value as an actual Number, such as 42.

		I cannot take credit for just knowing isNaN(). I remembered it but I cannot for the life of remember where 
		I saw it, so I will give Moz the credit. 
		*/
		var num = parseInt(str); // parse string to intager
		if (isNaN(num)) {    	 // check to see if the argument was actualy not a number.
			console.log('The argument for stringToNumber must be a number in string form.'); // error log
		} else {             	 // else, it has to be a number, return it
			return num;     	 // return what is now a number
		};
	},

	// Arrays

	arrSmallestValue: function (array,min) {
		var arr = new Array();
		// Find the smallest value in an array that is greater than a given number
		for (i=0,len=array.length; i < len; i++) {
			if (array[i] <= min) {
				arr.push(array.splice(i,1));
			}
		}

		var smallest = Math.min.apply(Math, arr);
		//take array, find smallest value above min
		return smallest;
	},

	arrTotalValue: function (array) {
		// Find the total value of just the numbers in an array, even if some of the items are not numbers.
		// var total = all numbers in array. use parseInt()
		var total = 0;
		for (i=0,len=array.length; i < len; i++) {
			var num = yb.numStringToNumber(array[i]);
			total += num;
		};
		return total;
	},

	arrSortObject: function (array, key) {
		/*
		Given an array of objects and the name of a key, return the array sorted by the value of that 
		key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
		*/
		//sort array of keyed objects
		return array;
	}

};



var tests = function() {
	//var numarr = [4,6,8,42,24,245]
	//console.log(yb.arrSmallestValue(numarr, 10));
	console.log(yb.numDatesDiff('02/14/2012', '02/15/2012', 'm'));
	console.log(yb.numDatesDiff());
	var numArray = [4,2,"42","5dollars"];
	console.log(yb.arrTotalValue(numArray));
	var sampleEmail = 'michael.youngblood@gmail.com';
	var samplePhone = '253-861-8596';
	var sampleURL = 'http://192.168.11.1';
	var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
	var csvlorem = "Lorem,ipsum,dolor,sit,amet,consectetur,adipisicing,elit";
	returning boolean, missing in project 3
	console.log(sampleEmail + " is an email address: " + yb.strVarifyIfEmail(sampleEmail));
	console.log(samplePhone + " is an phone number: " + yb.strVarifyIfPhoneNumber(samplePhone));
	console.log(sampleURL + " is an URL: " + yb.strVarifyIfURL(sampleURL));
	console.log();
	console.log('Title Case: ' + yb.strTitleCase(lorem));
	console.log('csv: ' + yb.strCsvChangeDelimiter(csvlorem, ",", "/"));
	console.log(yb.numStringToNumber("42"));   	// number as string 
	console.log(yb.numStringToNumber("24 dollars")); 	
	console.log();
	console.log();
	console.log(yb.numDecimalPlaces(234, 2));
	console.log("End of Script. For testing purposes, comment out before using in production.");
}; 
tests();



/* 

numFuzzyMatch, arrSmallestValue, arrSortObject

*/


