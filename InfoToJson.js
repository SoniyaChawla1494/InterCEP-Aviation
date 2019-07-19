/**
 * Used to write information to text file.
 */

console.log('Starting Aviation Information Gathering Script');

/*
	Directory:
		Page 1 -> Colors + Nondetailed information
		Page 2 -> JFK Delays/Cancellation info
		Page 3 -> LGA Delays/Cancellation info
		Page 4 -> EWR Delays/Cancellation info
		Page 5 -> JFK Parking
		Page 6 -> LGA Parking
		Page 7 -> EWR Parking
		Page 8 -> Taxi wait times
*/

// Entire JSON Object
var Info = {
    "JFK": {
        "air": {
			"desc": "",
            "ddelays": 0,
            "dcancels": 0,
            "adelays": 0,
			"acancels": 0,
			"html": "",
			"statusColor": 0
        },
        "parking": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "taxi": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "tsa": {
            "terminals": [],
            "info": [],
			"html": ""
        }
    },
    "LGA": {
        "air": {
            "desc": "",
            "ddelays": 0,
            "dcancels": 0,
            "adelays": 0,
            "acancels": 0,
			"html": "",
			"statusColor": 0
        },
        "parking": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "taxi": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "tsa": {
            "terminals": [],
            "info": [],
			"html": ""
        }
    },
    "EWR": {
        "air": {
            "desc": "",
            "ddelays": 0,
            "dcancels": 0,
            "adelays": 0,
            "acancels": 0,
			"html": "",
			"statusColor": 0
        },
        "parking": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "taxi": {
            "terminals": [],
            "info": [],
			"html": ""
        },
        "tsa": {
            "terminals": [],
            "info": [],
			"html": ""
        }
	},
    "LastUpdated": ""
};


// Taxi Functions
function orderTaxiJFK(info) {
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split(" "))[0] <= 15)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split(" "))[0] <= 20)
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else 
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ": " + info[0][i] + "</p>";
		}
	}
	return titles;
}

function orderTaxiLGA(info){
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split(" "))[0] <= 15)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split(" "))[0] <= 20)
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else 
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ": " + info[0][i] + "</p>";
		}
	}
	return titles;
}

function orderTaxiEWR(info) {
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split(" "))[0] <= 15)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split(" "))[0] <= 20)
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else 
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ": " + info[0][i] + "</p>";
		}
	}
	return titles;
}


//Parking Functions
function orderParkJFK(info) {
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split("%"))[0] <= 50)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split("%")[0]) > 50 & (info[0][i].split("%")[0] <= 75))
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ': ' + info[0][i] + "</p>";
		}
	}
	return titles;
}

function orderParkLGA(info) {
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split("%"))[0] <= 50)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split("%")[0]) > 50 & (info[0][i].split("%")[0] <= 75))
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ': ' + info[0][i] + "</p>";
		}
	}
	return titles;
}

function orderParkEWR(info) {
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if ((info[0][i].split("%"))[0] <= 50)
				color = "<p style=\"background-color:rgba(0,255,0,.25);margin:0;\">";
			else if ((info[0][i].split("%")[0]) > 50 & (info[0][i].split("%")[0] <=75))
				color = "<p style=\"background-color:rgba(255,165,0,.25);margin:0;\">";
			else
				color = "<p style=\"background-color:rgba(255,0,0,.25);margin:0;\">";
			titles[i] = color + titles[i] + ': ' + info[0][i] + "</p>";
		}
	}
	return titles;
}


//TSA Functions
function orderTSAJFK(info) {
	// ordered in such formula: (terminal, general, tsa pre-chk)
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if (info[0][i] === "Information Not Available" || info[0][i] === "---" || info[0][i] === "") {
				color = "<td>";
			}
			else if (info[0][i] === " ") { // if terminal start, then create beginning <tr> tag.
				color = "<tr><td>";
			}
			else {
				// Change color according to percentage
				if ((info[0][i].split(" "))[0] <= 15)
					color = "<td style='background-color:rgba(0,255,0,.25);margin:0;'>";
				else if ((info[0][i].split(" "))[0] <= 30)
					color = "<td style='background-color:rgba(255,165,0,.25);margin:0;'>";
				else 
					color = "<td style='background-color:rgba(255,0,0,.25);margin:0;'>";
			}
			if (titles[i] === "  ") {
				titles[i] = color + titles[i] + info[0][i] + '</td></tr>';
			}
			else {
				titles[i] = color + titles[i] + info[0][i] + '</td>';
			}
		}
	}
	return titles;
}

function orderTSALGA(info) {
	// ordered in such formula: (terminal, general, tsa pre-chk)
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if (info[0][i] === "Information Not Available" || info[0][i] === "---" || info[0][i] === "") {
				color = "<td>";
			}
			else if (info[0][i] === " ") { // if terminal start, then create beginning <tr> tag.
				color = "<tr><td>";
			}
			else {
				// Change color according to percentage
				if ((info[0][i].split(" "))[0] <= 15)
					color = "<td style='background-color:rgba(0,255,0,.25);margin:0;'>";
				else if ((info[0][i].split(" "))[0] <= 30)
					color = "<td style='background-color:rgba(255,165,0,.25);margin:0;'>";
				else 
					color = "<td style='background-color:rgba(255,0,0,.25);margin:0;'>";
			}
			if (titles[i] === "  ") {
				titles[i] = color + titles[i] + info[0][i] + '</td></tr>';
			}
			else {
				titles[i] = color + titles[i] + info[0][i] + '</td>';
			}
		}
	}
	return titles;
}

function orderTSAEWR(info) {
	// ordered in such formula: (terminal, general, tsa pre-chk)
	titles = info[1];
	if (titles.length === 0) {
		titles = "<td style='margin:0;'>" + "Information Not Available" + "</td>";
	}
	else {
		for (var i = 0; i < titles.length; i++) {
			color = "";
			if (info[0][i] === "Information Not Available" || info[0][i] === "---" || info[0][i] === "") {
				color = "<td>";
			}
			else if (info[0][i] === " ") { // if terminal start, then create beginning <tr> tag.
				color = "<tr><td>";
			}
			else {
				// Change color according to percentage
				if ((info[0][i].split(" "))[0] <= 15)
					color = "<td style='background-color:rgba(0,255,0,.25);margin:0;'>";
				else if ((info[0][i].split(" "))[0] <= 30)
					color = "<td style='background-color:rgba(255,165,0,.25);margin:0;'>";
				else 
					color = "<td style='background-color:rgba(255,0,0,.25);margin:0;'>";
			}
			if (titles[i] === "  ") {
				titles[i] = color + titles[i] + info[0][i] + '</td></tr>';
			}
			else {
				titles[i] = color + titles[i] + info[0][i] + '</td>';
			}
		}
	}
	return titles;
}


// Convert array into string
function list(info) {
	var tmp = '';
	for (var i = 0; i < info.length; i++) {
		tmp += info[i];
	}
	return tmp;
}


//FAA Functions
//FAA flight information altering
function infoAlt(info) {
	removal = ['(JFK)New York, New York','(LGA)New York, New York','(EWR)Newark, New Jersey','(TEB)Teterboro, New Jersey'];
	rem = ' Click for more info.';
	for(var i = 0; i < info.length; i++) {
		info[i] = (info[i].split(removal[i]))[1];
		info[i] = (info[i].split(rem))[0];
	}
	return info;
}

//FAA color determination
function colorSelector(data,texts) {
	console.log("Selecting Colors...");
	var info = [0,0,0,0];
	var tmp = ['i','i','i','i'];
	
	for (var i = 0; i < data.length; i++) {
		if ((data[i].search("orange")) >= 0) {
			info[i] = 2; 	
        } else if ((data[i].search("yellow")) >= 0) {
            info[i] = 2; 	
		} else if ((data[i].search("red")) >= 0) {
            info[i] = 3;  
		}else if ((data[i].search("black")) >= 0) {
            info[i] = 3;    	
		} else {
            info[i] = 1;
		}
		tmp[i] = texts[i];
	}
    return [info,tmp];
}

//Add FAA information with flight aware information
function aviatComb(newData,ogData) {
	//Add Delays and Cancellation info to Status information
	for (var i = 0; i < newData.length; i++) {
		ogData[i] += '</br> <b> Departure Delays: '+ newData[i][0] + ' Cancellations: '+ newData[i][1] + '</b><br>'+'</br> <b> Arrival Delays: '+ newData[i][2] + ' Cancellations: '+ newData[i][3] + '</b>'; 
	}
	return ogData;
}

//*******************************************************************************************************************************************
var page1 = require('webpage').create();
page1.open("http://www.fly.faa.gov/flyfaa/usmap.jsp", function(status) {
	console.log('FAA Page Loaded. Parsing statuses.');
   	//Scraping stuff
    page1.includeJs('http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js', function(status) {
	var data = page1.evaluate(function() {
		var date = (new Date()).toISOString();
		var jfk = $("a[id='jfk']").attr('style');
		var jfkText = $("#usmap > dd:nth-of-type(39)").text();
		var lga = $("a[id='lga']").attr('style');
		var lgaText = $("#usmap > dd:nth-of-type(38)").text();
		var ewr = $("a[id='ewr']").attr('style');
		var ewrText = $("#usmap > dd:nth-of-type(37)").text();
		var teb = $("a[id='teb']").attr('style');
		var tebText = $("#usmap > dd:nth-of-type(36)").text();
		return [[jfk,lga,ewr,teb],[jfkText,lgaText,ewrText,tebText],date];
	});
	
	var date = data[2];
	var airportTexts = infoAlt(data[1]);
	var airportFAA = colorSelector(data[0],data[1]);

	// Push to JSON obj
	Info.LastUpdated = date;
	Info.JFK.air.desc = airportTexts[0];
	Info.LGA.air.desc = airportTexts[1];
	Info.EWR.air.desc = airportTexts[2];
	Info.JFK.air.statusColor = airportFAA[0][0];
	Info.LGA.air.statusColor = airportFAA[0][1];
	Info.EWR.air.statusColor = airportFAA[0][2];
	
	page1.close();

	var page2 = require('webpage').create();
	console.log('JFK Delay and Cancellations');
page2.open("http://flightaware.com/live/cancelled/today/KJFK", function(status) {
	console.log(status);
	setTimeout(function() {
		console.log(status);
		var JFKs = page2.evaluate(function() {
			// Origin
			var amt = document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			if (amt > 3) {
				var Ocancel = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Odelays = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				// Destination
				var Dcancel = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Ddelays = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				return [Odelays,Ocancel,Ddelays,Dcancel,amt];
			}
			return [0,0,0,0,0];
		});
			
		if (!JFKs) phantom.exit();
		var JFKod = JFKs[0];
		var JFKoc = JFKs[1];
		var JFKdd = JFKs[2];
		var JFKdc = JFKs[3];
		var JFK = [JFKod,JFKoc,JFKdd,JFKdc];
		
		Info.JFK.air.adelays = JFKod;
    	Info.JFK.air.acancels = JFKoc;
		Info.JFK.air.ddelays = JFKdd;
    	Info.JFK.air.dcancels = JFKdc;

		console.log("DONE");
	
		page2.close();	

		var page3 = require('webpage').create();
		console.log('LGA Delay and Cancellations');
page3.open("http://flightaware.com/live/cancelled/today/KLGA",function(status) {
	setTimeout(function() {
		var LGAs = page3.evaluate(function() {
			//Origin
			var amt = document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			if (amt > 3) {
				var Ocancel = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Odelays = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				//Destination
				var Dcancel = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Ddelays = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				return [Odelays,Ocancel,Ddelays,Dcancel,amt];
			}
			return[0,0,0,0,0];
		});
			 
		if(!LGAs) phantom.exit();
		var LGAod = LGAs[0];
		var LGAoc = LGAs[1];
		var LGAdd = LGAs[2];
		var LGAdc = LGAs[3];
		var LGA = [LGAod,LGAoc,LGAdd,LGAdc];
		
		Info.LGA.air.adelays = LGAod;
    	Info.LGA.air.acancels = LGAoc;
		Info.LGA.air.ddelays = LGAdd;
    	Info.LGA.air.dcancels = LGAdc;
    	
		console.log("LGA DONE");
	
		page3.close();

		var page4 = require('webpage').create();
		console.log('EWR Delay and Cancellations');

page4.open("http://flightaware.com/live/cancelled/today/KEWR",function(status) {
	setTimeout(function() {
		var EWRs = page4.evaluate(function() {
			//Origin
			var amt = document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").length;
			amt += document.querySelectorAll("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").length;
			if (amt > 3) {
				var Ocancel = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Odelays = document.querySelector("div[id='origin_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				//Destination
				var Dcancel = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(1)").innerText;
				var Ddelays = document.querySelector("div[id='destination_cancellation_board'] > table > tbody > tr:nth-child(1) > td:nth-child(3)").innerText;
				return [Odelays,Ocancel,Ddelays,Dcancel,amt];
			}
			return[0,0,0,0,0];
		});

		if (!EWRs) phantom.exit();
		
		var EWRod = EWRs[0];
		var EWRoc = EWRs[1];
		var EWRdd = EWRs[2];
		var EWRdc = EWRs[3];
		var EWR = [EWRod,EWRoc,EWRdd,EWRdc];

		Info.EWR.air.adelays = EWRod;
    	Info.EWR.air.acancels = EWRoc;
		Info.EWR.air.ddelays = EWRdd;
		Info.EWR.air.dcancels = EWRdc;
		
		var aviatParsedData = aviatComb([JFK,LGA,EWR],airportFAA[1]);
		Info.JFK.air.html = aviatParsedData[0];
		Info.LGA.air.html = aviatParsedData[1];
		Info.EWR.air.html = aviatParsedData[2];

		console.log("DONE");
	
		page4.close();

		var page5 = require('webpage').create();
		page5.open("http://www.jfkairport.com/", function(status) {
			console.log('JFK Parking');
			console.log(status);
			//Scraping stuff
			setTimeout(function() {
				console.log(status);
	
				var data = page5.evaluate(function() {
					var JFKParkingInfo = [];
					var JFKParkingTerminals = [];
					var JFKTaxiInfo = [];
					var JFKTaxiTerminals = [];
					var JFKTSAInfo = [];
					var JFKTSATerminals = [];

					//Parking
					if (document.querySelectorAll('.terminal-percentage').length !== 0) {
						for (var i = 0; i < document.querySelectorAll('.terminal-percentage').length; i++) {
							var JFKParkingTerminal = document.querySelectorAll('div[id="parkingContent"] > div > div > div > div > div:nth-child(2)')[i].innerText.trim().replace(/\n/g, ' ');
							var JFKParkingTerminalInfo = document.querySelectorAll('.terminal-percentage')[i].innerText.trim();
							JFKParkingInfo.push(JFKParkingTerminalInfo);
							JFKParkingTerminals.push(JFKParkingTerminal);
						}
					}
		
					//Taxi
					if (document.querySelectorAll('.terminal-time').length !== 0) {
						for (var i = 0; i < document.querySelectorAll('.terminal-time').length; i++) {
							var JFKTaxiTerminal = document.querySelectorAll('div[id="taxi-waitDiv"] > div[class="taxi-parent"] > div[class="taxi-holder"] div[class="col-sm-4 col-xs-12 terminal-container"]')[i].innerText.substring(0,13).trim();
							var JFKTaxiTerminalInfo = document.querySelectorAll('.terminal-time')[i].innerText.trim();
							JFKTaxiInfo.push(JFKTaxiTerminalInfo);
							JFKTaxiTerminals.push(JFKTaxiTerminal);
						}
					}		
					
					// Security Wait Time
					if (document.querySelectorAll('div[class="security-wait-inner security-padding"] > table').length !== 0) {
						for (var i = 1; i < document.querySelectorAll('div[class="security-wait-inner security-padding"] > table > tbody > tr').length+1; i++) {
							JFKTSATerminals.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').innerText.substring(9).trim());
							JFKTSATerminals.push(' ','  ');
							JFKTSAInfo.push(' ');
							JFKTSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(4)').innerText.substring(13).trim());
							JFKTSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(5)').innerText.substring(13).trim());
						}
					}
					
					// return park arr, taxi arr, tsa arr
					return [[JFKParkingInfo,JFKParkingTerminals],[JFKTaxiInfo,JFKTaxiTerminals],[JFKTSAInfo,JFKTSATerminals]];
				});
				
				console.log("JFK info: "+data);
				if (!data) phantom.exit();

		        Info.JFK.parking.terminals = data[0][1];
      	        Info.JFK.parking.info = data[0][0];
      	        Info.JFK.taxi.terminals = data[1][1];
      	        Info.JFK.taxi.info = data[1][0];
      	        Info.JFK.tsa.terminals = data[2][1];
			    Info.JFK.tsa.info = data[2][0];
				  
				var JFKParkData = orderParkJFK(data[0]);
		        JFKParkData = list(JFKParkData);
				Info.JFK.parking.html = "<b>" + JFKParkData + "</b>";
				
				var JFKTaxiData = orderTaxiJFK(data[1]);
		        JFKTaxiData = list(JFKTaxiData);
				Info.JFK.taxi.html = "<b>" + JFKTaxiData + "</b>";
				
				var JFKTSAData = orderTSAJFK(data[2]);
		        JFKTSAData = list(JFKTSAData);
		        Info.JFK.tsa.html = "<table><tr><th>Terminal</th><th>General Line</th><th>TSA Pre-Check Line</th></tr><tr>"+JFKTSAData+"</tr></table>";
		
				page5.close();
				var page6 = require('webpage').create();

page6.open("http://laguardiaairport.com/", function(status) {
	console.log('LGA Parking');
	console.log(status);
    setTimeout(function() {
		console.log(status);
		
		var data = page6.evaluate(function() {
			var LGAParkingInfo = [];
			var LGAParkingTerminals = [];
			var LGATaxiInfo = [];
			var LGATaxiTerminals = [];
			var LGATSAInfo = [];
			var LGATSATerminals = [];

			//Parking
			if (document.querySelectorAll('.terminal-percentage').length !== 0) {
				for (var i = 0; i < document.querySelectorAll('.terminal-percentage').length; i++) {
					var lgaParkingTerminal = document.querySelectorAll('div[id="parkingContent"] > div > div')[i].innerText.trim();
					lgaParkingTerminal = lgaParkingTerminal.substring(0,lgaParkingTerminal.length-8).replace(/\n/g, ' ');
					var lgaParkingTerminalInfo = document.querySelectorAll('.terminal-percentage')[i].innerText.trim();
					LGAParkingInfo.push(lgaParkingTerminalInfo);
					LGAParkingTerminals.push(lgaParkingTerminal);
				}
			}

			//Taxi
			if (document.querySelectorAll('.terminal-time').length !== 0) {
				for (var i = 0; i < document.querySelectorAll('.terminal-time').length; i++) {
					var lgaTaxiTerminal = document.querySelectorAll('div[id="taxi-waitDiv"] > div[class="taxi-parent"] > div[class="taxi-holder"] div[class="col-sm-4 col-xs-12 terminal-container"]')[i].innerText.substring(0,13).trim();
					var lgaTaxiTerminalInfo = document.querySelectorAll('.terminal-time')[i].innerText.trim();
					LGATaxiInfo.push(lgaTaxiTerminalInfo);
					LGATaxiTerminals.push(lgaTaxiTerminal);
				}
			}

			// Security Wait Time
			if (document.querySelectorAll('div[class="security-wait-inner security-padding"] > table').length !== 0) {
				for (var i = 1; i < document.querySelectorAll('div[class="security-wait-inner security-padding"] > table > tbody > tr').length+1; i++) {
					var lgaTerminal = document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').innerText.substring(9).trim();
					var lgaGate = document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(4)').innerText.substring(6).trim();
					LGATSATerminals.push(lgaTerminal + " (" + lgaGate + ")");
					LGATSATerminals.push(' ','  ');

					LGATSAInfo.push(' ');
					LGATSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(5)').innerText.substring(13).trim());
					LGATSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(6)').innerText.substring(13).trim());
				}
			}

			return [[LGAParkingInfo,LGAParkingTerminals],[LGATaxiInfo,LGATaxiTerminals],[LGATSAInfo,LGATSATerminals]];
		});
		console.log("LGA: "+data);
		if (!data) phantom.exit();

        Info.LGA.parking.terminals = data[0][1];
        Info.LGA.parking.info = data[0][0];
        Info.LGA.taxi.terminals = data[1][1];
        Info.LGA.taxi.info = data[1][0];
        Info.LGA.tsa.terminals = data[2][1];
		Info.LGA.tsa.info = data[2][0];

		var LGAParkData = orderParkLGA(data[0]);
	    LGAParkData = list(LGAParkData);
		Info.LGA.parking.html = "<b>" + LGAParkData + "</b>";

		var LGATaxiData = orderTaxiLGA(data[1]);
		LGATaxiData = list(LGATaxiData);
		Info.LGA.taxi.html = "<b>" + LGATaxiData + "</b>";

		var LGATSAData = orderTSALGA(data[2]);
        LGATSAData = list(LGATSAData);
        Info.LGA.tsa.html = "<table><tr><th>Terminal</th><th>General Line</th><th>TSA Pre-Check Line</th></tr><tr>"+LGATSAData+"</tr></table>";


		page6.close();
		var page7 = require('webpage').create();
		page7.open("https://www.newarkairport.com/", function(status) {
			console.log('Page Loaded.  Parsing statuses.');
			console.log(status);
			//Scraping stuff
			setTimeout(function() {
				console.log(status);
			
				var data = page7.evaluate(function() {
					var EWRParkingInfo = [];
					var EWRParkingTerminals = [];
					var EWRTaxiInfo = [];
					var EWRTaxiTerminals = [];
					var EWRTSAInfo = [];
					var EWRTSATerminals = [];

					//Parking
					if (document.querySelectorAll('.terminal-percentage').length !== 0) {
						for (var i = 0; i < document.querySelectorAll('.terminal-percentage').length; i++) {
							var EWRParkingTerminal = document.querySelectorAll('div[id="parkingContent"] > div > div')[i].innerText.trim();
							EWRParkingTerminal = EWRParkingTerminal.substring(0,EWRParkingTerminal.length-8).replace(/\n/g, ' ');
							var EWRParkingTerminalInfo = document.querySelectorAll('.terminal-percentage')[i].innerText.trim();
							EWRParkingInfo.push(EWRParkingTerminalInfo);
							EWRParkingTerminals.push(EWRParkingTerminal);
						}
					}
					
					//Taxi stuff 
					if (document.querySelectorAll('.terminal-time').length !== 0) {
						for (var i = 0; i < document.querySelectorAll('.terminal-time').length; i++) {
							var EWRTaxiTerminal = document.querySelectorAll('div[id="taxi-waitDiv"] > div[class="taxi-parent"] > div[class="taxi-holder"] div[class="col-sm-4 col-xs-12 terminal-container"]')[i].innerText.trim();
							EWRTaxiTerminal = EWRTaxiTerminal.substring(0, EWRTaxiTerminal.length-7)
							var EWRTaxiTerminalInfo = document.querySelectorAll('.terminal-time')[i].innerText.trim();
							EWRTaxiInfo.push(EWRTaxiTerminalInfo);
							EWRTaxiTerminals.push(EWRTaxiTerminal);
						}
					}
					
					// Security Wait Time
					if (document.querySelectorAll('div[class="security-wait-inner security-padding"] > table').length !== 0) {
						for (var i = 1; i < document.querySelectorAll('div[class="security-wait-inner security-padding"] > table > tbody > tr').length+1; i++) {
							var ewrTerminal = document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(1)').innerText.substring(9).trim();
							var ewrGate = document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(4)').innerText.substring(6).trim();
							EWRTSATerminals.push(ewrTerminal + " (" + ewrGate + ")");
							EWRTSATerminals.push(' ','  ');

							EWRTSAInfo.push(' ');
							EWRTSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(5)').innerText.substring(13).trim());
							EWRTSAInfo.push(document.querySelector('div[class="security-wait-inner security-padding"] > table > tbody > tr:nth-child(' + i + ') > td:nth-child(6)').innerText.substring(13).trim());
						}
					}

					return [[EWRParkingInfo,EWRParkingTerminals],[EWRTaxiInfo,EWRTaxiTerminals],[EWRTSAInfo,EWRTSATerminals]];
				});
				console.log("EWR: "+data);
				if (!data) phantom.exit();
		
                Info.EWR.parking.terminals = data[0][1];
                Info.EWR.parking.info = data[0][0];
                Info.EWR.taxi.terminals = data[1][1];
                Info.EWR.taxi.info = data[1][0];
                Info.EWR.tsa.terminals = data[2][1];
				Info.EWR.tsa.info = data[2][0];
				
				var EWRParkData = orderParkEWR(data[0]);
		        EWRParkData = list(EWRParkData);
				Info.EWR.parking.html = "<b>" + EWRParkData + "</b>";

				var EWRTaxiData = orderTaxiEWR(data[1]);
				EWRTaxiData = list(EWRTaxiData);
				Info.EWR.taxi.html = "<b>" + EWRTaxiData + "</b>";

				var EWRTSAData = orderTSAEWR(data[2]);
				EWRTSAData = list(EWRTSAData);
				Info.EWR.tsa.html = "<table><tr><th>Terminal</th><th>General Line</th><th>TSA Pre-Check Line</th></tr><tr>"+EWRTSAData+"</tr></table>";
		
				console.log('Write to File');
				
				writeAndPost(Info);
				phantom.exit();
	 
				page7.close();
				
},2000); //Page7 Timeout
});//Page7 
},2000); //Page6 Timeout	
}); //Page6
},2000); //Page5 Timeout	
}); //Page5
},2000); //Page4 Timeout
}); //Page4
},2000); //Page3 Timeout	
}); //Page3 
},3000); //Page2 Timeout	
}); //Page2
}); //Page1 JS insert
}); //Page1
	

function writeAndPost(jsonObject) {
	var fs = require('fs');
	var path = 'D:\\home\\site\\wwwroot\\Info\\AviatDebug.json'; //'C:\\Users\\Admin\\Downloads\\AviatDebug.json';
	fs.write(path, JSON.stringify(jsonObject), 'w');
}