//your JS code here. If required.
function SizeInfo()
{
var x = document.documentElement.clientWidth;
var y = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h1>Width: " + x + "  Height: " + y + "</h1>";
}