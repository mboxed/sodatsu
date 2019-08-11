var md = window.markdownit({html: true, breaks: true});

const fun = /\{(.*)\}/

window.addEventListener('hashchange', function() {
	loadPageFromHash(location.hash)
})

window.addEventListener('load', function() {
	loadPageFromHash(location.hash)
})

function loadPageFromHash(hash) {
	try {
		if(hash === "") {
			location.hash = "#home"
		}

		var transformedHash = hash.replace("#","")
		var data = undefined
		if(directory[transformedHash] === undefined) {
			data = directory["hidden:404"]
		} else {
			var data = directory[transformedHash]
		}

		document.getElementById("body").innerHTML = ""

		data.forEach( function(e, i) {
			if(fun.test(e)) {
				document.getElementById("body").innerHTML += md.render(eval(e.match(fun)[1])) + "\n"
			} else {
				document.getElementById("body").innerHTML += md.render(e) + "\n"
			}
		});
	}
	catch(err) {
		document.getElementById("body").innerHTML = `<p>Sorry, there was an error processing this page...</p>
		<p>${err}</p>`
	}
}