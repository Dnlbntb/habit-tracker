// set count
if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

// update count

function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update();

// add one to the count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) +1))
		update();
}

// reset count
function reset() {
	if (confirm("Do You Really Want To Do That?")) {
		if(confirm("ARE YOU ABSOLUTELY SURE?!?!")) {
	localStorage.setItem("count", 0)
	update()
}
}
}