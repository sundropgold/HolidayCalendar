/* js for http://i6.cims.nyu.edu/~sct307/assgn3/calendar.html */ 

/*---------- CALENDAR APPLICATION ----------*/ 

/* Holidays:

	0) 9/5/16: Labor Day - University Holiday
	1) 10/10/16: Fall Recess - No Classes
	2-3) 11/23/16 to 11/27/16: Thanksgiving - University Holiday
	4) 12/13/16: Legislative Day: Classes meet according to a Monday schedule
	5-6) 12/24/16 to 1/22/17: Winter Break - University Holiday
	7) 2/20/17: Presidents' Day - University Holiday
	8) 3/2/17: Flynn's 22 Birthday! - Personal Holiday
	9-10) 3/13/17 to 3/19/17: Spring Recess - No Classes
	11) 5/29/17: Memorial Day - University Holiday
	12) 6/17/17: Legislative Day - for Monday classes, if instructor requested
	13) 7/4/17: Independence Day - University Holiday
	14) 7/29/17: Legislative Day - for Monday classes, if instructor requested

*/

// array of holidays, a holidarray
var holidarray = new Array();

// set up holidays
var holiday0 = new Date(); // labor day
var h0d = holiday0.getUTCDate(5);
var h0m = holiday0.getUTCMonth(8) + 1;
var h0y = holiday0.getUTCFullYear(2016);

var holiday1 = new Date(); // fall recess
var h1d = holiday1.setUTCDate(10);
var h1m = holiday1.setUTCMonth(9) + 1;
var h1y = holiday1.setUTCFullYear(2016);

var holiday2 = new Date(); // thanksgiving start
var h2d = holiday2.getUTCDate(23);
var h2m = holiday2.getUTCMonth(10) + 1;
var h2y = holiday2.getUTCFullYear(2016);

var holiday3 = new Date(); // thanksgiving end
var h3d = holiday3.setUTCDate(27);
var h3m = holiday3.setUTCMonth(10) + 1;
var h3y = holiday3.setUTCFullYear(2016);

var holiday4 = new Date(); // legislative day
var h4d = holiday4.setUTCDate(13);
var h4m = holiday4.setUTCMonth(11) + 1;
var h4y = holiday4.setUTCFullYear(2016);

var holiday5 = new Date(); // winter break start
var h5d = holiday5.setUTCDate(24);
var h5m = holiday5.setUTCMonth(11) + 1;
var h5y = holiday5.setUTCFullYear(2016);

var holiday6 = new Date(); // winter break end
var h6d = holiday6.setUTCDate(22);
var h6m = holiday6.setUTCMonth(0) + 1;
var h6y = holiday6.setUTCFullYear(2017);

var holiday7 = new Date(); // presidents' day
var h7d = holiday7.setUTCDate(20);
var h7m = holiday7.setUTCMonth(1) + 1;
var h7y = holiday7.setUTCFullYear(2017);

var holiday8 = new Date(); // Flynn's 22nd birthday
var h8d = holiday8.setUTCDate(2);
var h8m = holiday8.setUTCMonth(2) + 1;
var h8y = holiday8.setUTCFullYear(2017);

var holiday9 = new Date(); // spring recess start
var h9d = holiday9.setUTCDate(13);
var h9m = holiday9.setUTCMonth(2) + 1;
var h9y = holiday9.setUTCFullYear(2017);

var holiday10 = new Date(); // spring recess end
var h10d = holiday10.setUTCDate(19);
var h10m = holiday10.setUTCMonth(2) + 1;
var h10y = holiday10.setUTCFullYear(2017);

var holiday11 = new Date(); // memorial day
var h11d = holiday11.setUTCDate(29);
var h11m = holiday11.setUTCMonth(4) + 1;
var h11y = holiday11.setUTCFullYear(2017);

var holiday12 = new Date(); // legislative day
var h12d = holiday12.setUTCDate(17);
var h12m = holiday12.setUTCMonth(5) + 1;
var h12y = holiday12.setUTCFullYear(2017);

var holiday13 = new Date(); // independence day
var h13d = holiday13.setUTCDate(4);
var h13m = holiday13.setUTCMonth(6) + 1;
var h13y = holiday13.setUTCFullYear(2017);

var holiday14 = new Date(); // legislative day
var h14d = holiday14.setUTCDate(29);
var h14m = holiday14.setUTCMonth(6) + 1;
var h14y = holiday14.setUTCFullYear(2017);

var output = document.getElementById('output');

var textout = "";

function getholiday() {

	// total holiday array
	holidarray[0] = [holiday0, "Labor Day", "This is an NYU holiday! No classes!"];
	holidarray[1] = [holiday1, "Fall Recess", "This is an NYU holiday! No classes!"];
	holidarray[2] = [holiday2, "Thanksgiving", "This is an NYU holiday! No classes!"];
	holidarray[3] = [holiday3, "Thanksgiving", "This is an NYU holiday! No classes!"];
	holidarray[4] = [holiday4, "Legislative Day", "This is not an NYU holiday. Classes are meeting today."];
	holidarray[5] = [holiday5, "Winter Break", "This is an NYU holiday! No classes!"];
	holidarray[6] = [holiday6, "Winter Break", "This is an NYU holiday! No classes!"];
	holidarray[7] = [holiday7, "President's Day", "This is an NYU holiday! No classes!"];
	holidarray[8] = [holiday8, "Flynn's 22 Birthday", "This is a personal holiday. No classes off, celebrate later!"];
	holidarray[9] = [holiday9, "Spring Recess", "This is an NYU holiday! No classes!"];
	holidarray[10] = [holiday10, "Spring Recess", "This is an NYU holiday! No classes!"];
	holidarray[11] = [holiday11, "Memorial Day", "This is an NYU holiday! No classes!"];
	holidarray[12] = [holiday12, "Legislative Day", "This is not an NYU holiday. Classes will meet on a Monday schedule, if instructors request it."];
	holidarray[13] = [holiday13, "Independence Day", "This is an NYU holiday! No classes!"];
	holidarray[14] = [holiday14, "Legislative Day", "This is not an NYU holiday. Classes will meet on a Monday schedule, if instructors request it."];

	// extract date input value
	var getDateInput = document.forms[0].elements[0].value;
	// var getDateInput = document.getElementById("date").value;
	var myDate = new Date(getDateInput);
	
	// set min and max dates for date selection range
	var dmin = new Date();
	dmin.setDate(1);
	dmin.setMonth(8) + 1;
	dmin.setFullYear(2016);

	var dmax = new Date();
	dmax.setDate(31);
	dmax.setMonth(7) + 1;
	dmax.setFullYear(2017);

	var nullmsg = "Your input is empty. Please enter a date to continue.";

	var errormsg = "Your input is invalid. Please enter another date.";

	// booleans to check if true before continuing on the next step of validation
	var nullvalid = false;
	var errorvalid = false;

	/*-------------------------------------------------------------*/

	// check if the user input a value or if input is null/empty
		
		if (!getDateInput) {

			alert(nullmsg);

		}

		else {

			nullvalid = true;

		}

	/*-------------------------------------------------------------*/

	// check if date is within the range of 9/1/16 and 8/31/17

	if (nullvalid = true) {
	
		if (myDate < dmin || myDate > dmax) {

			// print error message if date is not within range
			console.log(errormsg);
			output.innerHTML = errormsg;
		}

		else if (myDate > dmin && myDate < dmax) {

			// extract date, month, and year from the date object
			// extract date in UTC instead of GMT, so you get date+1
			
			var day = myDate.getUTCDate();

			// extract month and add 1 because months start at zero (0-11)
			var month = myDate.getMonth() + 1;

			// extract full year
			var year = myDate.getFullYear();
			
			errorvalid = true;
	
		}

	}

	/*-------------------------------------------------------------*/

	// check for NYU holidays, personal holidays, and non-holiday dates
	
	for (var i = 0; i < holidarray.length; ++i) {

		if (nullvalid == true && errorvalid == true) {

			// check if date is in long holiday ranges

			if (month == 11 && year == 2016 && day >= 23 && day <= 27) {
				// thanksgiving break range

				textout = " is " + holidarray[2][1] + ". " + holidarray[2][2] + 
						"<br/> <img src = 'imgs/thanksgiving.jpg'>";
				break;

			}

			else if (month == 12 && year == 2016 && day >= 24 &&  day <= 31) {
				// winter break range

				textout = " is " + holidarray[5][1] + ". " + holidarray[5][2] +
						"<br/> <img src = 'imgs/winterbreak.jpg'>";
				break;

			}

			else if (month == 1 && year == 2017 && day >= 1 &&  day <= 22) {
				// winter break range

				textout = " is " + holidarray[6][1] + ". " + holidarray[6][2] +
						"<br/><img src='imgs/winterbreak.jpg'>";
				break;

			}

			else if (month == 3 && year == 2017 && day >= 13 && day <= 16) {
				// spring recess range

				textout = " is " + holidarray[9][1] + ". " + holidarray[9][2] +
						"<br/><img src='imgs/springbreak.jpg'>";
				break;

			}

			// check if date is a one day NYU Holiday/Personal Holiday

			else if (month == 9 && year == 2016 && day == 5 ) {
				// labor day

				textout = " is " + holidarray[0][1] + ". " + holidarray[0][2] +
						"<br/><img src='imgs/laborday.jpg'>";
				break;

			}

			else if (month == 10 && year == 2016 && day == 10 ) {
				// fall recess

				textout = " is " + holidarray[1][1] + ". " + holidarray[1][2] +
						"<br/><img src='imgs/fallbreak.jpg'>";
				break;

			}

			else if (month == 12 && year == 2016 && day == 13 ) {
				// legislative day

				textout = " is " + holidarray[4][1] + ". " + holidarray[4][2] +
						"<br/><img src='imgs/legislativeday.jpg'>";
				break;

			}

			else if (month == 2 && year == 2017 && day == 20 ) {
				// presidents day
			
				textout = " is " + holidarray[7][1] + ". " + holidarray[7][2] +
						"<br/><img src='imgs/presidentsday.jpg'>";
				break;

			}

			else if (month == 3 && year == 2017 && day == 2 ) {
				// flynn's bday

				textout = " is " + holidarray[8][1] + ". " + holidarray[8][2] +
						"<br/><img src='imgs/bday.jpg'>";
				break;

			}

			else if (month == 5 && year == 2017 && day == 29 ) {
				// memorial day

				textout = " is " + holidarray[11][1] + ". " + holidarray[11][2] +
						"<br/><img src='imgs/memorialday.jpg'>";
				break;

			}

			else if (month == 6 && year == 2017 && day == 17 ) {
				// legislative day

				textout = " is " + holidarray[12][1] + ". " + holidarray[12][2] +
						"<br/><img src='imgs/legislativeday.jpg'>";
				break;

			}

			else if (month == 7 && year == 2017 && day == 4 ) {
				// independence day

				textout = " is " + holidarray[13][1] + ". " + holidarray[13][2] +
						"<br/><img src='imgs/independenceday.jpg'>";
				break;

			}

			else if (month == 7 && year == 2017 && day == 29 ) {
				// legislative day

				textout = " is " + holidarray[14][1] + ". " + holidarray[14][2] +
				"<br/><img src='imgs/legislativeday.jpg'>";
				break;

			}
			
			// if input date is none of the above, it is not an NYU holiday
			else {

				textout = " is not an NYU holiday. ";
				break;
			}
		}
	}

	/*-------------------------------------------------------------*/

	// output results
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
	var monthIndex = myDate.getMonth();

	var dateoutput = month[monthIndex] + ' ' + day + ', ' + year;

	if (nullvalid == true && errorvalid == true) {
		console.log(dateoutput + textout);
		output.innerHTML = dateoutput + textout;
	}

}