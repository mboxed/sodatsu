const duration = /([0-9]+)h([0-9]+)m([0-9]+)s/
const metacodes = {
	"0": {
		"name": "programming",
		"color": "#67E4C7",
	},
	"1": {
		"name": "audio",
		"color": "#B067E4"
	},
	"2": {
		"name": "video",
		"color": "#E4DE67"
	},
	"3": {
		"name": "writing",
		"color": "#E4A767"
	},
	"4": {
		"name": "physical",
		"color": "#E46967"
	},
	"5": {
		"name": "spiritual",
		"color": "#6779E4"
	},
	"6": {
		"name": "intellectual",
		"color": "#69E467"
	},
}

const timecodes = {
	"001": "shinka",
	"002": "sodatsu",
	"003": "bubble",
	"004": "afero",
	"101": "orca",
	"301": "conlang",
	"401": "workout",
	"402": "walking",
	"403": "running",
	"501": "meditation",
	"502": "theology",
	"601" :"classes", 
}

var timeBucket = {}
var metaBucket = {}

function parseTimesheet() {
	timesheet.forEach( function(e, i) {
		var pieces = e.split("|")
		var date = new Date(pieces[0])
		var code = pieces[1]
		var metaCode = code[0]
		var time = pieces[2].match(duration)
		var seconds = (parseInt(time[1], 10) * 60 * 60) + (parseInt(time[2], 10) * 60) + (parseInt(time[3], 10))

		if(timeBucket[code] === undefined) 
			timeBucket[code] = seconds
		else
			timeBucket[code] += seconds

		if(metaBucket[metaCode] === undefined)
			metaBucket[metaCode] = {}

		if(metaBucket[metaCode][date] === undefined)
			metaBucket[metaCode][date] = seconds
		else
			metaBucket[metaCode][date] += seconds
	});
	console.log(timeBucket)
	console.log(metaBucket)
}

function timecodeIndex() {
	var table = "<table>\n<tr><th>Code</th><th>Project</th></tr>\n"
	var arr = Object.keys(timecodes).sort(function(a,b){return a - b})
	arr.forEach( function(e, i) {
		table += `<tr><td style="background-color:${metacodes[e[0]]["color"]};">${e}</td><td>${timecodes[e]}</td></tr>\n`
	});
	table += "</table>\n"
	return table
}

function metacodeIndex() {
	var table = "<table>\n<tr><th>Code</th><th>Type</th><th>Color</th></tr>\n"
	Object.keys(metacodes).forEach( function(e, i) {
		table += `<tr><td>${e}</td><td>${metacodes[e]["name"]}</td><td style="background-color:${metacodes[e]["color"]};"></td></tr>\n`
	});
	table += "</table>\n"
	return table
}

parseTimesheet()