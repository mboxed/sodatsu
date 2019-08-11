function index() {
	var list = "<hr>\n<h2>Index</h2>\n<ul>\n"
	Object.keys(directory).forEach(function(e, i) {
		if(!e.startsWith("hidden:"))
			list += `<li><a href="#${e}">${e}</a></li>\n`
	})
	list += "</ul>\n<hr>\n"
	return list
}

function cannotFind(hash) {
	return `<p>It looks like the page "${hash}" doesn't exist...`
}

function link(hash) {
	return `<a href="#${hash}">${hash}</a>`
}