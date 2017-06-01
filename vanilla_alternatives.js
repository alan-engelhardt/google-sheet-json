function loadJSON(link) {
	let xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', link, true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState == 4 && xobj.status == "200") {
			let rows = JSON.parse(xobj.responseText).feed.entry;
			rows.forEach(displayMembers);
		}
	};
	xobj.send(null);
}

function loadJSON(link) {
	fetch(link).then(e=>e.json()).then(data=>{
			data.feed.entry.forEach(displayMembers);
	});
}

function loadJSON(link) {
	fetch(link).then(function(e){
		return e.json()
	}).then(function(data){
			data.forEach(displayMembers)
	});
}
