var md = window.markdownit({html: true, breaks: true});

window.addEventListener('hashchange', function() {
	loadPageFromHash(location.hash)
})

window.addEventListener('load', function() {
	loadPageFromHash(location.hash)
})

function loadPageFromHash(hash) {
	if(hash === "") {
		location.hash = "#home"
	}

	var transformedHash = hash.replace("#","")
	if(directory[transformedHash] === undefined) {

	} else {
		var data = directory[transformedHash]

		document.getElementById("body").innerHTML = ""

		data.forEach( function(e, i) {
			document.getElementById("body").innerHTML += md.render(e) + "\n"
		});

		if(transformedHash == "home") {
			document.getElementById("body").innerHTML += index()
		}
	}
}

function index() {
	var list = "<ul>\n"
	Object.keys(directory).forEach(function(e, i) {
		list += "<li><a href=\"#" + e + "\">" + e + "</a></li>\n"
	})
	list += "</ul>\n"
	return list
}

function tableExample() {
	return "<table><tr><th>test</th><th>test2</th></tr><tr><td>data</td><td>data2</td></tr></table>\n"
}