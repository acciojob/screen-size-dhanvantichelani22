//your JS code here. If required.
function getSize(){
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;

	document.getElementById('wh').innerHTML = "<h1>Width: " + w + " <br> Height: " + h + "</h1>";
}