var page1 = require('webpage').create();
var system = require('system');
console.log('Starting Aviation Gadget #520');

gadgetId = system.args[1];
accessToken = "YsfyHMWCkSHUBFB6pSJT";
serverUrl = "https://txlink.net/api/StatusGadget/UpdateStatuses";


function Form(info) {
	var results = [];
	for (var i = 0; i < info.length; i++) {
    var tmp = info[i];		
	results.push({
		Name: tmp[0],
		Description: tmp[1],
		LastUpdated: tmp[2],
		Order: i,
		StatusLevel: tmp[3] 	
	});
	
	}
	return results;
}


var page1 = require('webpage').create();
page1.open("https://at123.azurewebsites.net/Info/AviatDebug.json", function() {
	setTimeout(function() {
		console.log('Page Loaded. Parsing statuses.');
	
		//Storage structure: [name,desc,date,statuslevel(color)]
		//Air
		var EWRAIR = [];
			
		var jsonAviation = JSON.parse(page1.plainText);
		EWRAIR.push("Air - Newark Airport (EWR)");
		EWRAIR.push(jsonAviation.EWR.air.html);
		EWRAIR.push(jsonAviation.LastUpdated);
		EWRAIR.push(jsonAviation.EWR.air.statusColor);

		var Mdata = Form([EWRAIR]);

			var stringData = JSON.stringify({
			id: gadgetId,
			StatusItems: Mdata
		});

		page1.close();
		var page2 = require('webpage').create();

		var settings = {
			operation: "PUT",
			encoding: "utf8",
			headers: {
				"authorization": "bearer " + accessToken,
				"Content-Type": "application/json"
			},
			data: stringData
		};
		
		setupErrorLogging(page2);
		
		page2.open(serverUrl, settings, function (status) {
			console.log(status);
			phantom.exit();
		});

	},5000);
}); //Page1
	

function setupErrorLogging(page) {
	page.onResourceRequested = function (request) {
		console.log('= onResourceRequested()');
		console.log('  request: ' + JSON.stringify(request, undefined, 4));
	};

	page.onResourceReceived = function(response) {
		console.log('= onResourceReceived()' );
		console.log('  id: ' + response.id + ', stage: "' + response.stage + '", response: ' + JSON.stringify(response));
	};

	page.onLoadStarted = function() {
		console.log('= onLoadStarted()');
		var currentUrl = page.evaluate(function() {
			return window.location.href;
		});
		console.log('  leaving url: ' + currentUrl);
	};

	page.onLoadFinished = function(status) {
		console.log('= onLoadFinished()');
		console.log('  status: ' + status);
	};

	page.onNavigationRequested = function(url, type, willNavigate, main) {
		console.log('= onNavigationRequested');
		console.log('  destination_url: ' + url);
		console.log('  type (cause): ' + type);
		console.log('  will navigate: ' + willNavigate);
		console.log('  from page\'s main frame: ' + main);
	};

	page.onResourceError = function(resourceError) {
		console.log('= onResourceError()');
		console.log('  - unable to load url: "' + resourceError.url + '"');
		console.log('  - error code: ' + resourceError.errorCode + ', description: ' + resourceError.errorString );
	};

	page.onError = function(msg, trace) {
		console.log('= onError()');
		var msgStack = ['  ERROR: ' + msg];
		if (trace) {
			msgStack.push('  TRACE:');
			trace.forEach(function(t) {
				msgStack.push('    -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function + '")' : ''));
			});
		}
		console.log(msgStack.join('\n'));
	};	
}